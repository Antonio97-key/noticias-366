/**
 * newsFetcher.js
 * Servicio para obtener noticias reales de medios confiables via RSS-to-JSON.
 */

import { classifyText } from '../utils/classifier.js';

const RSS_SOURCES = [
    // --- Internacionales ---
    { name: 'BBC Mundo', url: 'https://feeds.bbci.co.uk/mundo/rss.xml' },
    { name: 'El País', url: 'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/internacional/portada' },
    { name: 'El Mundo', url: 'https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml' },
    // --- Locales (República Dominicana) ---
    { name: 'Diario Libre', url: 'https://www.diariolibre.com/rss/portada.xml' },
    { name: 'Remolacha.net', url: 'http://feeds.feedburner.com/remolacha/GcnR' },
    { name: 'De Último Minuto', url: 'https://deultimominuto.net/feed/' }
];

const PROXY_URL = 'https://api.rss2json.com/v1/api.json?rss_url=';

/**
 * Obtiene noticias de múltiples fuentes RSS, las normaliza y las clasifica.
 * @returns {Promise<Array>} Noticas normalizadas
 */
export const fetchLiveNews = async () => {
    try {
        const allResults = await Promise.all(
            RSS_SOURCES.map(source =>
                fetch(PROXY_URL + encodeURIComponent(source.url))
                    .then(res => res.json())
                    .catch(err => {
                        console.error(`Error cargando fuente ${source.name}:`, err);
                        return { items: [] };
                    })
            )
        );

        const mergedItems = allResults.flatMap(res => res.items || []);

        // Normalizar y clasificar
        return mergedItems.map((item, index) => {
            const textToClassify = `${item.title} ${item.description || ''}`;
            const categoryId = classifyText(textToClassify);

            return {
                id: `live-${index}-${Date.now()}`,
                categoryId,
                title: item.title,
                excerpt: (item.description || item.content || '').replace(/<[^>]*>?/gm, '').slice(0, 160) + '...',
                body: item.content || item.description || '',
                author: item.author || 'Agencia',
                publishedAt: item.pubDate || new Date().toISOString(),
                imageUrl: item.enclosure?.link || item.thumbnail || `https://images.unsplash.com/photo-${['1504711434969-e33886168f5c', '1495020689067-958852abab44', '1523994590528-564d0f079965', '1504467957764-b3e66c1d2f97'][index % 4]}?w=800&q=80`,
                readTime: Math.max(2, Math.floor((item.content?.length || 500) / 1000)),
                isFeatured: false,
                tags: [categoryId, 'tiempo-real']
            };
        }).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    } catch (error) {
        console.error('Error general en fetchLiveNews:', error);
        return [];
    }
};
