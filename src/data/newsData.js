/**
 * newsData.js - Base de datos de noticias Noticias 366
 */

// Helper to get dynamic date
const getRecentDate = (hoursAgo = 0) => {
    const d = new Date();
    d.setHours(d.getHours() - hoursAgo);
    return d.toISOString();
};

const generateBody = (title, category) => {
    const intros = [
        `En un acontecimiento que ha captado la atención de expertos en ${category}, "${title}" plantea nuevas interrogantes sobre el rumbo de nuestra sociedad.`,
        `La reciente revelación sobre "${title}" marca un punto de inflexión en la industria de ${category}, según informan fuentes cercanas al caso.`,
        `Noticias 366 ha tenido acceso exclusivo a los detalles de "${title}", un suceso que redefine lo que sabíamos sobre ${category} hasta hoy.`
    ];
    const logic = [
        "Los analistas sugieren que esto no es un hecho aislado, sino parte de una tendencia global que busca mayor transparencia y eficiencia en los procesos.",
        "A pesar de los desafíos iniciales, el equipo responsable ha demostrado una resiliencia excepcional, logrando hitos que hace apenas un año parecían inalcanzables.",
        "La reacción de los mercados y de la opinión pública ha sido inmediata, generando un debate necesario sobre las implicaciones éticas y prácticas de este avance."
    ];
    return `${intros[Math.floor(Math.random() * intros.length)]}\n\n${logic[Math.floor(Math.random() * logic.length)]}\n\nFinalmente, Noticias 366 continuará dando seguimiento a esta noticia en desarrollo para ofrecerle la información más veraz y oportuna del momento.`;
};

const RAW_NEWS = [
    /* ──────────────── CIENCIA ──────────────── */
    ...Array.from({ length: 15 }).map((_, i) => {
        const title = [
            'Descubren una nueva galaxia a 13.000 millones de años luz',
            'Logran por primera vez la fusión nuclear con ganancia neta de energía',
            'Un nuevo tratamiento genético podría curar la ceguera hereditaria',
            'La NASA confirma la existencia de agua líquida en Marte',
            'Científicos crean un material más resistente que el diamante',
            'El telescopio James Webb detecta señales de atmósfera en un exoplaneta',
            'Descubren los restos de un dinosaurio volador desconocido en la Patagonia',
            'La IA logra predecir la estructura de todas las proteínas conocidas',
            'Un experimento de física cuántica desafía nuestra noción de la realidad',
            'Investigadores desarrollan una batería que se carga en 30 segundos',
            'Misión espacial europea aterriza con éxito en un cometa lejano',
            'El genoma humano completo es finalmente secuenciado al 100%',
            'Descubren una bacteria capaz de devorar plásticos en el océano',
            'Un chip cerebral permite a un paciente con parálisis volver a caminar',
            'La física de partículas encuentra una posible quinta fuerza de la naturaleza'
        ][i % 15];
        return {
            id: `cie-0${i + 1}`,
            categoryId: 'ciencia',
            title: title,
            excerpt: `Exploración profunda sobre el impacto de este hallazgo científico. Un avance hacia el futuro.`,
            body: generateBody(title, 'ciencia'),
            author: 'Dr. Alejandro Soto',
            publishedAt: getRecentDate(i * 3 + 1),
            imageUrl: `https://images.unsplash.com/photo-${['1446776811953-b23d57bd21aa', '1451187580459-43490279c0fa', '1532187863486-abf717956572', '1481391243133-f96216d5542f', '1518152006812-edab29b069ac'][i % 5]}?w=800&q=80`,
            readTime: 5,
            isFeatured: i === 0,
            tags: ['ciencia', 'investigación', 'futuro']
        };
    }),

    /* ──────────────── ACTUALIDAD ──────────────── */
    ...Array.from({ length: 15 }).map((_, i) => {
        const title = [
            'El gobierno anuncia una reforma histórica del sistema tributario',
            'Protestas masivas en tres capitales europeas por la inflación',
            'Cumbre de líderes del G7 en Roma aborda la crisis internacional',
            'Nueva ley de vivienda entra en vigor mañana en todo el país',
            'El desempleo cae a niveles récord en el último trimestre',
            'Histórica ola de calor obliga a declarar la emergencia nacional',
            'Acuñan nueva moneda conmemorativa del décimo aniversario',
            'La educación pública recibirá una inversión de 5.000 millones',
            'Crisis diplomática entre dos potencias por fronteras marítimas',
            'Festival internacional de música reunirá a 200.000 personas',
            'Plan nacional de digitalización llegará a las zonas rurales',
            'Inauguran el puente colgante más largo del continente',
            'Cierran acuerdo de paz tras décadas de conflicto civil',
            'Nueva variante de virus respiratorio bajo vigilancia médica',
            'Elecciones anticipadas convocadas para el próximo otoño'
        ][i % 15];
        return {
            id: `act-0${i + 1}`,
            categoryId: 'actualidad',
            title: title,
            excerpt: `Análisis detallado de los acontecimientos que marcan la agenda nacional e internacional hoy.`,
            body: generateBody(title, 'actualidad'),
            author: 'Elena Blanco',
            publishedAt: getRecentDate(i * 2),
            imageUrl: `https://images.unsplash.com/photo-${['1529107386315-e1a2ed48a620', '1588681664899-f142ff2dc9b1', '1555848962-6e79363ec58f', '1450133064473-71024230f91b', '1517048676732-d65bc937f952'][i % 5]}?w=800&q=80`,
            readTime: 4,
            isFeatured: i === 0,
            tags: ['noticias', 'actualidad', 'sociedad']
        };
    }),

    /* ──────────────── DEPORTES ──────────────── */
    ...Array.from({ length: 15 }).map((_, i) => {
        const title = [
            'El Real Madrid golea al Manchester City en Champions',
            'Alcaraz arrasa en Acapulco y se consolida como número 1',
            'Fórmula 1: El GP de Argentina regresa al calendario oficial',
            'La selección femenina de fútbol hace historia en el Mundial',
            'Inauguran el estadio olímpico más tecnológico del mundo',
            'Mercado de fichajes: El delantero estrella cambia de equipo',
            'Escándalo en el boxeo por decisión arbitral polémica',
            'El ciclismo vive su etapa más dura en los Alpes',
            'Nuevo récord mundial de natación en los 100 libres',
            'La NBA anuncia expansión a dos ciudades europeas',
            'El atletismo celebra su gran gala anual de premios',
            'Vuelve el motociclismo tras el parón invernal',
            'Copa del Rey: El modesto elimina al gigante',
            'Tenis: Nadal anuncia su último torneo oficial',
            'Baloncesto: Final épica decidida en el último segundo'
        ][i % 15];
        return {
            id: `dep-0${i + 1}`,
            categoryId: 'deportes',
            title: title,
            excerpt: `Todo sobre la jornada deportiva: victorias, récords y los protagonistas del momento.`,
            body: generateBody(title, 'deportes'),
            author: 'Marcos Rivas',
            publishedAt: getRecentDate(i * 4 + 2),
            imageUrl: `https://images.unsplash.com/photo-${['1574629810360-7efbbe195018', '1544298621-35a989e4e54a', '1631295868223-63265b40d9e4', '1511886929837-354d827aae26', '1461896836934-ffe607ba8211'][i % 5]}?w=800&q=80`,
            readTime: 3,
            isFeatured: i === 0,
            tags: ['deporte', 'competición', 'acción']
        };
    }),

    /* ──────────────── ECONOMÍA ──────────────── */
    ...Array.from({ length: 15 }).map((_, i) => {
        const title = [
            'El IBEX 35 cierra en máximos históricos impulsado por la banca',
            'La startup IA-Core recauda 120 millones en ronda Serie B',
            'Inflación en la zona euro cae por debajo del 2%',
            'Gigante tecnológico reduce su plantilla un 10%',
            'Nuevo tratado comercial entre Europa y América Latina',
            'Las energías renovables ya cubren el 60% de la demanda',
            'El precio de la vivienda comienza a estabilizarse',
            'Fusión bancaria histórica creará el mayor grupo del país',
            'Turismo bate récords de ingresos en el primer trimestre',
            'Crisis del petróleo: El barril cae tras acuerdo de la OPEP',
            'Invierten 2.000 millones en plantas de microchips',
            'El teletrabajo se consolida en el 40% de las empresas'
        ][i % 12];
        return {
            id: `eco-0${i + 1}`,
            categoryId: 'economia',
            title: title,
            excerpt: `Claves para entender el panorama financiero y empresarial que afecta a tu bolsillo.`,
            body: generateBody(title, 'economía'),
            author: 'Laura Mendez',
            publishedAt: getRecentDate(i * 5 + 3),
            imageUrl: `https://images.unsplash.com/photo-${['1611974789855-9c2a0a7236a3', '1559526324-4b87b5e36e44', '1526304640581-d334cdbbf45e', '1591696208162-a9d25ee8ef9c', '1454165833222-7cd73981507f'][i % 5]}?w=800&q=80`,
            readTime: 4,
            isFeatured: i === 0,
            tags: ['economía', 'finanzas', 'mercados']
        };
    }),

    /* ──────────────── REVISTA ──────────────── */
    ...Array.from({ length: 15 }).map((_, i) => {
        const title = [
            'Festival de cine de Berlín: El Oso de Oro es para Colombia',
            'Tendencias de moda primavera-verano 2026: Vuelve el color',
            'Entrevista exclusiva con el escritor más leído del año',
            'La gastronomía molecular vive una nueva edad de oro',
            'Inauguran exposición inmersiva de Picasso en Madrid',
            'Las 10 mejores series que ver este fin de semana',
            'Elton John anuncia gira de despedida definitiva',
            'Arquitectura: Los edificios del futuro serán de madera',
            'Moda sostenible: El auge de la ropa hecha con algas',
            'Videojuegos: El lanzamiento más esperado rompe récords'
        ][i % 10];
        return {
            id: `rev-0${i + 1}`,
            categoryId: 'revista',
            title: title,
            excerpt: `Descubre las tendencias en cultura, arte y estilo de vida que están dando que hablar.`,
            body: generateBody(title, 'revista'),
            author: 'Julian Castro',
            publishedAt: getRecentDate(i * 6 + 4),
            imageUrl: `https://images.unsplash.com/photo-${['1489599849927-2ee91cede3ba', '1558618666-fcd25c85cd64', '1505673539012-6a4a5f0532fd', '1514362545857-3bc16c4c7d1b', '1540206395-68808572332f'][i % 5]}?w=800&q=80`,
            readTime: 3,
            isFeatured: i === 0,
            tags: ['cultura', 'entretenimiento', 'estilo']
        };
    })
];

// Exportamos los datos procesados
export const NEWS_DATA = RAW_NEWS;

/** Devuelve todas las noticias destacadas */
export const getFeaturedNews = () => NEWS_DATA.filter((n) => n.isFeatured);

/** Devuelve noticias por categoría */
export const getNewsByCategory = (categoryId) =>
    NEWS_DATA.filter((n) => n.categoryId === categoryId);

/** Devuelve las N noticias más recientes */
export const getLatestNews = (limit = 12) =>
    [...NEWS_DATA]
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, limit);

/** Busca noticias por texto en título o excerpt */
export const searchNews = (query) => {
    const q = query.toLowerCase().trim();
    if (!q) return NEWS_DATA;
    return NEWS_DATA.filter(
        (n) =>
            n.title.toLowerCase().includes(q) ||
            n.excerpt.toLowerCase().includes(q) ||
            n.tags.some((t) => t.toLowerCase().includes(q))
    );
};
