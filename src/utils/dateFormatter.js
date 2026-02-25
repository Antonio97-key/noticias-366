/**
 * dateFormatter.js
 * Utilidad de formateo de fechas en español.
 */

const MONTHS_ES = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];

/**
 * Formatea una fecha ISO a string legible en español.
 * @param {string} isoString
 * @returns {string} Ej: "24 de febrero de 2026"
 */
export const formatDateLong = (isoString) => {
    const d = new Date(isoString);
    return `${d.getDate()} de ${MONTHS_ES[d.getMonth()]} de ${d.getFullYear()}`;
};

/**
 * Formatea una fecha ISO a string corto.
 * @param {string} isoString
 * @returns {string} Ej: "24 feb. 2026"
 */
export const formatDateShort = (isoString) => {
    const d = new Date(isoString);
    return `${d.getDate()} ${MONTHS_ES[d.getMonth()].slice(0, 3)}. ${d.getFullYear()}`;
};

/**
 * Devuelve el tiempo relativo desde la fecha dada hasta ahora.
 * @param {string} isoString
 * @returns {string} Ej: "hace 3 horas"
 */
export const formatRelativeTime = (isoString) => {
    const diff = Date.now() - new Date(isoString).getTime();
    const min = Math.floor(diff / 60_000);
    const hrs = Math.floor(diff / 3_600_000);
    const days = Math.floor(diff / 86_400_000);

    if (min < 1) return 'ahora mismo';
    if (min < 60) return `hace ${min} min`;
    if (hrs < 24) return `hace ${hrs} h`;
    if (days === 1) return 'ayer';
    return formatDateShort(isoString);
};
