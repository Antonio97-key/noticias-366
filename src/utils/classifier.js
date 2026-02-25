import { CATEGORIES } from '../data/categories.js';

/**
 * Normaliza un texto eliminando acentos y convirtiendo a minúsculas.
 * @param {string} text 
 * @returns {string}
 */
const normalizeText = (text) => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Elimina acentos
};

/**
 * Clasifica un texto dado en una categoría.
 * Devuelve el ID de la categoría con mayor coincidencia de keywords,
 * o 'actualidad' como fallback.
 *
 * @param {string} text - Texto a clasificar (título + excerpt)
 * @returns {string} categoryId
 */
export const classifyText = (text) => {
    const normalizedText = normalizeText(text);

    let bestMatch = { id: 'actualidad', score: 0 };

    for (const category of CATEGORIES) {
        const score = category.keywords.reduce((acc, kw) => {
            const normalizedKeyword = normalizeText(kw);
            // Búsqueda de palabra completa o subcadena significativa
            if (normalizedText.includes(normalizedKeyword)) {
                // El título suele tener más relevancia (asumiendo que viene primero)
                return acc + 1;
            }
            return acc;
        }, 0);

        if (score > bestMatch.score) {
            bestMatch = { id: category.id, score };
        }
    }

    return bestMatch.id;
};
