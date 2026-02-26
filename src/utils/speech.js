/**
 * speech.js
 * Utilidad para síntesis de voz (Text-to-Speech).
 */

let _currentUtterance = null;

/**
 * Lee un texto en voz alta.
 * @param {string} text - El texto a leer.
 * @param {string} lang - El idioma (ej: 'es-ES').
 */
export const speak = (text, lang = 'es-ES') => {
    stopSpeaking();

    _currentUtterance = new SpeechSynthesisUtterance(text);
    _currentUtterance.lang = lang;
    _currentUtterance.rate = 1.0;
    _currentUtterance.pitch = 1.0;

    window.speechSynthesis.speak(_currentUtterance);
};

/** Detiene la lectura actual */
export const stopSpeaking = () => {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
};

/** Verifica si está hablando */
export const isSpeaking = () => window.speechSynthesis.speaking;
