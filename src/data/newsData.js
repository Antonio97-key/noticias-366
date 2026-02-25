/**
 * newsData.js - Base de datos de noticias Noticias 366
 */

// Función auxiliar para generar un cuerpo de 3 párrafos coherente si no se provee uno
const generateBody = (title, category) => {
    return `${title}. Este descubrimiento marca un hito en la industria de ${category}, permitiendo vislumbrar un futuro donde los desafíos actuales se transforman en oportunidades de crecimiento y desarrollo sostenible para toda la sociedad.\n\nLos investigadores y expertos involucrados han trabajado durante meses para validar estos resultados, asegurando que cada detalle analizado aporte valor real al conocimiento global. La comunidad internacional ha recibido la noticia con gran entusiasmo, destacando la innovación y la solidez técnica del planteamiento presentado hoy en esta jornada histórica.\n\nFinalmente, se espera que en las próximas semanas se publiquen más detalles sobre las implicaciones prácticas de este avance. Noticias 366 continuará informando sobre la evolución de este caso y su impacto en el día a día de los ciudadanos, manteniendo nuestro compromiso con la veracidad y el análisis profundo.`;
};

const RAW_NEWS = [
    /* ──────────────── CIENCIA (Nueva Categoría Principal) ──────────────── */
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: `cie-0${i + 1}`,
        categoryId: 'ciencia',
        title: [
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
            'La física de partículas encuentra una posible quinta fuerza de la naturaleza',
            'Logran teletransportar información cuántica a través de fibra óptica',
            'Estudio revela que los árboles se comunican mediante una red de hongos',
            'Un nuevo reactor de grafeno promete energía limpia e infinita',
            'Encuentran fósiles de vida microscópica de hace 4.000 millones de años',
            'Científicos logran revertir el envejecimiento celular en ratones'
        ][i],
        excerpt: `Avance científico sin precedentes en el área de la ${['astronomía', 'física nuclear', 'genética', 'astrobiología', 'química de materiales'][i % 5]}.`,
        body: generateBody(`Investigación publicada en la prestigiosa revista Nature sobre ${['el cosmos', 'la energía', 'la vida', 'la materia', 'la tecnología'][i % 5]}`, 'ciencia'),
        author: 'Dr. Alejandro Soto',
        publishedAt: `2026-02-${25 - (i % 5)}T10:00:00-04:00`,
        imageUrl: `https://images.unsplash.com/photo-${['1446776811953-b23d57bd21aa', '1451187580459-43490279c0fa', '1532187863486-abf717956572', '1481391243133-f96216d5542f', '1518152006812-edab29b069ac'][i % 5]}?w=800&q=80`,
        readTime: 5,
        isFeatured: i === 0,
        tags: ['ciencia', 'investigación', 'futuro']
    })),

    /* ──────────────── ACTUALIDAD (20 artículos) ──────────────── */
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: `act-0${i + 1}`,
        categoryId: 'actualidad',
        title: [
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
            'Elecciones anticipadas convocadas para el próximo otoño',
            'El transporte público será gratuito para jóvenes y jubilados',
            'Gran incendio forestal controlado tras 48 horas de lucha',
            'Cumbre del clima en Brasil busca compromisos vinculantes',
            'Lanzan programa de becas para talentos en tecnología',
            'Actualización del salario mínimo subirá un 8% este año'
        ][i],
        excerpt: `Informativo diario sobre los sucesos más relevantes de la jornada nacional e internacional.`,
        body: generateBody(`Reporte especial sobre los cambios legislativos y sociales`, 'actualidad'),
        author: 'Elena Blanco',
        publishedAt: `2026-02-${25 - (i % 5)}T12:00:00-04:00`,
        imageUrl: `https://images.unsplash.com/photo-${['1529107386315-e1a2ed48a620', '1588681664899-f142ff2dc9b1', '1555848962-6e79363ec58f', '1450133064473-71024230f91b', '1517048676732-d65bc937f952'][i % 5]}?w=800&q=80`,
        readTime: 4,
        isFeatured: i === 0,
        tags: ['noticias', 'actualidad', 'sociedad']
    })),

    /* ──────────────── DEPORTES (20 artículos) ──────────────── */
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: `dep-0${i + 1}`,
        categoryId: 'deportes',
        title: [
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
            'Baloncesto: Final épica decidida en el último segundo',
            'Rugby: El Seis Naciones arranca con sorpresas',
            'Golf: El joven debutante gana el Masters',
            'Ajedrez: El ordenador vence al campeón mundial',
            'E-sports: Final mundial con 50 millones de espectadores',
            'Presentan el balón inteligente para el próximo mundial'
        ][i],
        excerpt: `Crónica deportiva de los mejores eventos y competiciones del momento.`,
        body: generateBody(`Resumen de la competición y análisis táctico del encuentro`, 'deportes'),
        author: 'Marcos Rivas',
        publishedAt: `2026-02-${25 - (i % 5)}T18:00:00-04:00`,
        imageUrl: `https://images.unsplash.com/photo-${['1574629810360-7efbbe195018', '1544298621-35a989e4e54a', '1631295868223-63265b40d9e4', '1511886929837-354d827aae26', '1461896836934-ffe607ba8211'][i % 5]}?w=800&q=80`,
        readTime: 3,
        isFeatured: i === 0,
        tags: ['deporte', 'competición', 'acción']
    })),

    /* ──────────────── ECONOMÍA (20 artículos) ──────────────── */
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: `eco-0${i + 1}`,
        categoryId: 'economia',
        title: [
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
            'El teletrabajo se consolida en el 40% de las empresas',
            'Lanzan nuevo plan de ayudas para emprendedores jóvenes',
            'La bolsa de Nueva York vive su mejor semana en un año',
            'Aprobado el presupuesto general para el ejercicio 2027',
            'Impuesto a la banca se vuelve permanente para el gobierno',
            'Auge de las empresas de logística por el comercio online',
            'Sector automovilístico acelera la transición al eléctrico',
            'Exportaciones crecen gracias a la demanda asiática',
            'Nuevo índice de sostenibilidad para empresas cotizadas'
        ][i],
        excerpt: `Análisis económico de los mercados y las finanzas globales.`,
        body: generateBody(`Análisis de indicadores económicos y tendencias de mercado`, 'economía'),
        author: 'Laura Mendez',
        publishedAt: `2026-02-${25 - (i % 5)}T15:00:00-04:00`,
        imageUrl: `https://images.unsplash.com/photo-${['1611974789855-9c2a0a7236a3', '1559526324-4b87b5e36e44', '1526304640581-d334cdbbf45e', '1591696208162-a9d25ee8ef9c', '1454165833222-7cd73981507f'][i % 5]}?w=800&q=80`,
        readTime: 4,
        isFeatured: i === 0,
        tags: ['economía', 'finanzas', 'mercados']
    })),

    /* ──────────────── REVISTA (20 artículos) ──────────────── */
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: `rev-0${i + 1}`,
        categoryId: 'revista',
        title: [
            'Festival de cine de Berlín: El Oso de Oro es para Colombia',
            'Tendencias de moda primavera-verano 2026: Vuelve el color',
            'Entrevista exclusiva con el escritor más leído del año',
            'La gastronomía molecular vive una nueva edad de oro',
            'Inauguran exposición inmersiva de Picasso en Madrid',
            'Las 10 mejores series que ver este fin de semana',
            'Elton John anuncia gira de despedida definitiva',
            'Arquitectura: Los edificios del futuro serán de madera',
            'Moda sostenible: El auge de la ropa hecha con algas',
            'Videojuegos: El lanzamiento más esperado rompe récords',
            'Teatro: Vuelve el clásico al escenario principal',
            'Fotografía: Las mejores imágenes del concurso nacional',
            'Gastronomía: El mejor chef del mundo abre en Nueva York',
            'Música: El nuevo álbum de la diva del pop ya es número 1',
            'Diseño de interiores: Claves para el minimalismo cálido',
            'Viajes: Los 5 destinos poco conocidos para este verano',
            'Entrevista: La vida tras el éxito de la joven estrella',
            'Arte digital: Los museos abrazan la creación cripto',
            'Libros: Las novedades editoriales que no te puedes perder',
            'Socialité: La boda del año en el palacio real'
        ][i],
        excerpt: `Lo último en cultura, entretenimiento, moda y estilo de vida.`,
        body: generateBody(`Crónica cultural y entrevistas con los protagonistas`, 'revista'),
        author: 'Julian Castro',
        publishedAt: `2026-02-${25 - (i % 5)}T21:00:00-04:00`,
        imageUrl: `https://images.unsplash.com/photo-${['1489599849927-2ee91cede3ba', '1558618666-fcd25c85cd64', '1505673539012-6a4a5f0532fd', '1514362545857-3bc16c4c7d1b', '1540206395-68808572332f'][i % 5]}?w=800&q=80`,
        readTime: 3,
        isFeatured: i === 0,
        tags: ['cultura', 'entretenimiento', 'estilo']
    })),

    /* ──────────────── PLANETA (20 artículos) ──────────────── */
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: `pla-0${i + 1}`,
        categoryId: 'planeta',
        title: [
            'La Antártida registra récord de temperatura en su historia',
            'Esa lanza satélite para mapear bosques en tiempo real',
            'Descubren nueva especie de ballena en el Índico',
            'El Gran Agujero Azul de Belice bajo protección total',
            'Campaña mundial para limpiar el 50% de los plásticos oceánicos',
            'Energía mareomotriz: El mar ya ilumina ciudades enteras',
            'Especie de tigre declarada extinta vuelve a ser vista',
            'La selva amazónica muestra signos de recuperación',
            'Nueva ley prohíbe los plásticos de un solo uso en Asia',
            'Reforestación masiva en África crea un muro verde gigante',
            'Océanos: El nivel del mar sube pero el deshielo se frena',
            'Energía solar: Paneles invisibles en todas las ventanas',
            'Biodiversidad: Las abejas recuperan su población mundial',
            'Parques nacionales: Nuevo corredor para fauna salvaje',
            'Sostenibilidad: El transporte de carga se vuelve eléctrico',
            'Clima: El fenómeno del Niño termina con lluvias intensas',
            'Agricultura vertical: El futuro de la comida en las ciudades',
            'Biotecnología: Arrecifes de coral impresos en 3D',
            'Economía circular: El mercado de segunda mano estalla',
            'Cumbre mundial por el océano cierra con zonas protegidas'
        ][i],
        excerpt: `Información crucial sobre ecología, medio ambiente y naturaleza.`,
        body: generateBody(`Análisis del impacto ambiental y medidas correctivas`, 'planeta'),
        author: 'Sofía Rey',
        publishedAt: `2026-02-${25 - (i % 5)}T09:00:00-04:00`,
        imageUrl: `https://images.unsplash.com/photo-${['1494200483723-42bb92dc3e14', '1470115636474-831c77f34c6c', '1454496522488-7a8e488e860c', '1441974231531-c6227db76b6e', '1500382017468-9049fed747ef'][i % 5]}?w=800&q=80`,
        readTime: 5,
        isFeatured: i === 0,
        tags: ['ecología', 'tierra', 'naturaleza']
    })),

    /* ──────────────── SOCIAL (20 artículos) ──────────────── */
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: `soc-0${i + 1}`,
        categoryId: 'social',
        title: [
            'ONU alerta: Acceso al agua potable en zonas críticas',
            'Modelo de vivienda cooperativa crece un 200% este año',
            'Nueva ley de igualdad salarial reducirá la brecha un 15%',
            'Educación inclusiva: Más recursos para alumnos con discapacidad',
            'Auge del voluntariado digital entre los universitarios',
            'Derechos humanos: Nuevo protocolo de protección a refugiados',
            'Sanidad: Plan nacional contra la soledad no deseada',
            'Trabajo: La jornada de 32 horas mejora la salud mental',
            'Social: Crean la renta básica de emancipación joven',
            'Integración: Programa de formación para migrantes',
            'ONG: Récord de donaciones para ayuda humanitaria',
            'Accesibilidad: Ciudades inteligentes para mayores',
            'Juventud: Nuevo bono cultural y de transporte',
            'Familia: Ampliación de la baja por paternidad a 6 meses',
            'Pensiones: Actualización al coste de vida real',
            'Pobreza: Reducción de la brecha social en las capitales',
            'Justicia: Reforma para agilizar los juicios civiles',
            'Inclusión: El deporte adaptado recibe más apoyo',
            'Salud mental: Psicólogos gratis en todos los centros',
            'Sociedad: El respeto a la diversidad crece en las encuestas'
        ][i],
        excerpt: `Historias sobre personas, sociedad, derechos e igualdad.`,
        body: generateBody(`Crónica social y voces de la comunidad sobre derechos civiles`, 'social'),
        author: 'Ricardo Vaca',
        publishedAt: `2026-02-${25 - (i % 5)}T14:00:00-04:00`,
        imageUrl: `https://images.unsplash.com/photo-${['1541167760496-1628856ab772', '1560518883-ce09059eeffa', '1521791136064-7986c2923216', '1517486808906-6ca8b3f04846', '1531206715517-5c0ba140b2b8'][i % 5]}?w=800&q=80`,
        readTime: 4,
        isFeatured: i === 0,
        tags: ['sociedad', 'derechos', 'humano']
    })),

    /* ──────────────── CRIPTO (20 artículos) ──────────────── */
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: `cri-0${i + 1}`,
        categoryId: 'cripto',
        title: [
            'Bitcoin supera los $120.000 impulsado por ETFs europeos',
            'Ethereum completa actualización Pectra: Tarifas un 70% bajas',
            'Regulación cripto: La UE aprueba el marco MICA definitivo',
            'Nace la primera ciudad financiada íntegramente por DAO',
            'Auge de las Stablecoins: El dólar digital domina el comercio',
            'NFT: El arte digital vuelve con utilidades reales en museos',
            'DeFi: El valor bloqueado en finanzas descentralizadas es récord',
            'Binance lanza programa global contra el fraude en la red',
            'Cajeros Bitcoin se triplican en las principales ciudades',
            'La web3 llega a las redes sociales tradicionales',
            'Metaverso: Primera cumbre empresarial en realidad virtual',
            'Seguridad: Nuevo hardware wallet a prueba de cuántica',
            'Inversión: Bancos tradicionales abren custodia cripto',
            'Tokenización: Inmuebles vendidos en fracciones por blockchain',
            'Gaming: Los juegos play-to-earn se vuelven sostenibles',
            'Minería Bitcoin: El 80% ya utiliza energía verde',
            'Wallet: Google integra pagos cripto nativos en el móvil',
            'Altcoins: Los proyectos de Capa 2 explotan en actividad',
            'Economía: El FMI estudia integrar CBDC en los pagos',
            'Comunidad: Encuentro mundial de desarrolladores web3'
        ][i],
        excerpt: `El pulso del mercado cripto, tecnología blockchain y finanzas web3.`,
        body: generateBody(`Reporte técnico sobre tendencias blockchain y criptoeconomía`, 'cripto'),
        author: 'Daniel Crypto',
        publishedAt: `2026-02-${25 - (i % 5)}T16:00:00-04:00`,
        imageUrl: `https://images.unsplash.com/photo-${['1518546305927-5a555bb7020d', '1639762681485-074b7f938ba0', '1621504450181-5d356f63d3cc', '1622630998477-00aa6731ca22', '1642104704074-907c0698cbd9'][i % 5]}?w=800&q=80`,
        readTime: 4,
        isFeatured: i === 0,
        tags: ['cripto', 'blockchain', 'web3']
    })),

    /* ──────────────── POLÍTICA (20 artículos) ──────────────── */
    ...Array.from({ length: 20 }).map((_, i) => ({
        id: `pol-0${i + 1}`,
        categoryId: 'politica',
        title: [
            'El partido gobernante pierde la mayoría absoluta en elecciones',
            'Congreso aprueba ley de transparencia con apoyo transversal',
            'Crisis diplomática: Llaman a consultas a tres embajadores',
            'Nuevo mapa político tras las elecciones municipales',
            'El Senado tumba el proyecto de presupuestos del gobierno',
            'Líder de la oposición propone pacto de Estado por sanidad',
            'Justicia: El Tribunal Supremo anula el último decreto ley',
            'Debate electoral: Récord de audiencia en el cara a cara',
            'Corrupción: Detenidos varios cargos públicos en macrooperación',
            'Reforma de la ley electoral: Más proporcionalidad',
            'Gabinete de crisis por huelga de transporte indefinida',
            'Política exterior: Nueva alianza estratégica con Asia',
            'El Congreso investigará la gestión de la crisis climática',
            'Dimisión en el gobierno por escándalo de espionaje',
            'Elecciones: Los indecisos marcarán el resultado final',
            'Nueva coalición de gobierno se presenta en rueda de prensa',
            'Ayudas: El cheque bebé se amplía a 2.500 euros',
            'Ley de seguridad: Amplio debate sobre los derechos civiles',
            'Financiación autonómica: Nuevo acuerdo histórico',
            'Primer ministro anuncia plan de regeneración democrática'
        ][i],
        excerpt: `Análisis político, gestión pública y relaciones de poder.`,
        body: generateBody(`Crónica política y análisis de las estrategias parlamentarias`, 'política'),
        author: 'Rosa Dieguez',
        publishedAt: `2026-02-${25 - (i % 5)}T20:00:00-04:00`,
        imageUrl: `https://images.unsplash.com/photo-${['1541872703-74c5e44368f9', '1529107386315-e1a2ed48a620', '1555848960-8c3ed4cf32a0', '1450133064473-71024230f91b', '1517048676732-d65bc937f952'][i % 5]}?w=800&q=80`,
        readTime: 5,
        isFeatured: i === 0,
        tags: ['política', 'poder', 'gobierno']
    })),
];

// Exportamos los datos procesados
export const NEWS_DATA = RAW_NEWS;

/** Devuelve todas las noticias destacadas */
export const getFeaturedNews = () => NEWS_DATA.filter((n) => n.isFeatured);

/** Devuelve noticias por categoría */
export const getNewsByCategory = (categoryId) =>
    NEWS_DATA.filter((n) => n.categoryId === categoryId);

/** Devuelve las N noticias más recientes */
export const getLatestNews = (limit = 10) =>
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
