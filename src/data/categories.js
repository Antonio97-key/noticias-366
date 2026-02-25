/**
 * categories.js - Definición de categorías editoriales
 * Noticias 366
 *
 * Fuente de verdad única para categorías.
 * UI y lógica de clasificación consumen este archivo.
 */

export const CATEGORIES = [
    {
        id: 'actualidad',
        label: 'Actualidad',
        emoji: '📰',
        icon: 'newspaper',
        description: 'Noticias de última hora, política y sucesos de relevancia inmediata.',
        keywords: [
            'política', 'gobierno', 'presidente', 'congreso', 'senado', 'diputados',
            'elecciones', 'ley', 'reforma', 'crisis', 'manifestación', 'protesta',
            'accidente', 'tragedia', 'internacional', 'mundo', 'exterior',
            'última hora', 'breaking', 'emergencia', 'conflicto',
            'republica dominicana', 'santo domingo', 'nacional', 'dn', 'interior',
            'policia nacional', 'ejercito', 'seguridad ciudadana'
        ],
    },
    {
        id: 'deportes',
        label: 'Deportes',
        emoji: '⚽',
        icon: 'trophy',
        description: 'Fútbol, baloncesto, tenis, motor y toda la actividad deportiva.',
        keywords: [
            'deporte', 'fútbol', 'baloncesto', 'tenis', 'béisbol', 'automovilismo',
            'F1', 'MotoGP', 'partido', 'campeonato', 'liga', 'Champions', 'Mundial',
            'jugador', 'equipo', 'entrenador', 'fichaje', 'lesión', 'gol', 'canasta',
            'set', 'carrera', 'atletismo', 'natación', 'ciclismo'
        ],
    },
    {
        id: 'economia',
        label: 'Economía',
        emoji: '📈',
        icon: 'chart-line',
        description: 'Mercados, empresas, finanzas, empleo e indicadores económicos.',
        keywords: [
            'economía', 'mercado', 'bolsa', 'ibex', 'acciones', 'divisas', 'euro',
            'dólar', 'inflación', 'PIB', 'empleo', 'paro', 'empresa', 'negocio',
            'startup', 'inversión', 'ahorro', 'impuestos', 'banco', 'tipo de interés',
            'recesión', 'fusión', 'adquisición', 'beneficios', 'resultados'
        ],
    },
    {
        id: 'revista',
        label: 'Revista',
        emoji: '🎭',
        icon: 'star',
        description: 'Cultura, entretenimiento, moda, gastronomía y tendencias.',
        keywords: [
            'cultura', 'arte', 'cine', 'música', 'teatro', 'exposición', 'concierto',
            'festival', 'moda', 'diseño', 'gastronomía', 'cocina', 'restaurante',
            'viajes', 'turismo', 'entrevista', 'reportaje', 'celebridad', 'famosos',
            'espectáculo', 'entretenimiento', 'serie', 'película', 'álbum'
        ],
    },
    {
        id: 'ciencia',
        label: 'Ciencia',
        emoji: '🔬',
        icon: 'microscope',
        description: 'Descubrimientos, investigaciones, avances espaciales y comunidad académica.',
        keywords: [
            'ciencia', 'científico', 'investigadores', 'estudio', 'investigación', 'descubrimiento',
            'laboratorio', 'universidad', 'revista científica', 'nature', 'science', 'cell', 'lancet',
            'publicación', 'artículo', 'experimento', 'hipótesis', 'teoría', 'biología', 'biólogo',
            'genética', 'adn', 'gen', 'célula', 'evolución', 'ecología', 'biodiversidad', 'física',
            'físico', 'química', 'químico', 'átomo', 'partícula', 'mecánica cuántica', 'relatividad',
            'astronomía', 'astrónomo', 'espacio', 'universo', 'planeta', 'estrella', 'galaxia',
            'telescopio', 'nasa', 'esa', 'cohete', 'satélite', 'misión espacial', 'medicina',
            'médico', 'salud', 'enfermedad', 'virus', 'bacteria', 'vacuna', 'fármaco', 'ensayo clínico',
            'paciente', 'tratamiento', 'neurociencia', 'cerebro', 'psicología', 'geología', 'geólogo',
            'roca', 'fósil', 'dinosaurio', 'paleontología', 'clima', 'cambio climático', 'calentamiento global',
            'medio ambiente', 'energía renovable', 'matemáticas', 'matemático', 'estadística',
            'inteligencia artificial', 'robótica', 'nanotecnología', 'materiales', 'química orgánica',
            'bioquímica', 'molecular', 'celular', 'microbiología', 'zoología', 'botánica', 'etología',
            'primatología', 'antropología', 'arqueología', 'fósil', 'evolución humana', 'premio nobel',
            'divulgación científica', 'museo de ciencias', 'planetario'
        ],
    },
    {
        id: 'planeta',
        label: 'Planeta',
        emoji: '🌍',
        icon: 'globe',
        description: 'Medio ambiente, impacto ambiental, naturaleza y sostenibilidad.',
        keywords: [
            'planeta', 'medio ambiente', 'ecología', 'bosque', 'océano', 'contaminación',
            'reciclaje', 'sostenibilidad', 'energía renovable', 'solar', 'eólica', 'biodiversidad',
            'especies', 'extinción', 'tierra', 'volcán', 'terremoto', 'tsunami', 'incendio', 'deforestación'
        ],
    },
    {
        id: 'social',
        label: 'Social',
        emoji: '🤝',
        icon: 'users',
        description: 'Sociedad, igualdad, derechos humanos, educación y sanidad.',
        keywords: [
            'social', 'sociedad', 'igualdad', 'género', 'diversidad', 'derechos humanos',
            'educación', 'sanidad', 'salud', 'vivienda', 'pobreza', 'exclusión',
            'migración', 'refugiados', 'ONG', 'voluntariado', 'movimientos sociales',
            'protesta', 'comunidad', 'bienestar', 'pensiones', 'familia'
        ],
    },
    {
        id: 'cripto',
        label: 'Cripto',
        emoji: '₿',
        icon: 'coins',
        description: 'Criptomonedas, blockchain, NFT, DeFi y economía descentralizada.',
        keywords: [
            'cripto', 'criptomoneda', 'bitcoin', 'ethereum', 'blockchain', 'cadena de bloques',
            'NFT', 'token', 'DeFi', 'finanzas descentralizadas', 'exchange', 'binance',
            'criptoactivo', 'minería', 'wallet', 'regulación cripto', 'inversión cripto',
            'altcoin', 'BTC', 'ETH', 'stablecoin', 'web3', 'metaverso'
        ],
    },
    {
        id: 'politica',
        label: 'Política',
        emoji: '🏛️',
        icon: 'landmark',
        description: 'Análisis político, partidos, gobiernos, parlamentos y decisiones de poder.',
        keywords: [
            'política', 'partido', 'elecciones', 'candidato', 'votación', 'parlamento',
            'congreso', 'senado', 'diputados', 'presidente', 'primer ministro', 'gobierno',
            'oposición', 'coalición', 'democracia', 'campaña', 'ideología', 'izquierda',
            'derecha', 'centro', 'referéndum', 'moción', 'investidura', 'gabinete',
            'abinader', 'danilo', 'leonel', 'prm', 'pld', 'fp', 'jce', 'tse'
        ],
    },
];

/** Devuelve una categoría por su ID. */
export const getCategoryById = (id) =>
    CATEGORIES.find((cat) => cat.id === id) ?? null;

/** Reserva de color de categoría (CSS custom property name). */
export const getCategoryColor = (id) => `var(--cat-${id})`;
export const getCategoryBg = (id) => `var(--cat-${id}-bg)`;
