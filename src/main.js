/**
 * main.js - Orquestador principal de Noticias 366
 *
 * Responsabilidades:
 * 1. Montar todos los componentes en #app
 * 2. Coordinar el estado de filtro activo (categoría / búsqueda)
 * 3. Propagar eventos entre componentes
 *
 * La UI es "tonta" (solo muestra datos).
 * Este módulo es el único que conoce el estado global.
 */

import './styles/reset.css';
import './styles/global.css';
import './styles/tokens.css';
import './styles/layout.css';

import { createHeader, setActiveNav } from './components/Header/Header.js';
import { createHeroBanner } from './components/HeroBanner/HeroBanner.js';
import { createNewsGrid } from './components/NewsGrid/NewsGrid.js';
import { createSidebar } from './components/Sidebar/Sidebar.js';
import { createFooter } from './components/Footer/Footer.js';
import { openModal } from './components/ArticleModal/ArticleModal.js';
import './components/ArticleModal/ArticleModal.css';

import { NEWS_DATA, getFeaturedNews, getNewsByCategory, searchNews } from './data/newsData.js';
import { CATEGORIES, getCategoryById } from './data/categories.js';
import { fetchLiveNews } from './services/newsFetcher.js';

/* ─── Estado global (inmutable por defecto) ─── */
const state = {
    activeCategory: 'actualidad',
    searchQuery: '',
    allArticles: [...NEWS_DATA],
    isLoading: true,
    lang: 'es',
};

/* ─── Referencias al DOM ─── */
const headerRoot = document.getElementById('header-root');
const mainRoot = document.getElementById('main-root');
const footerRoot = document.getElementById('footer-root');

/* ─── Helpers ─── */
const getFilteredNews = () => {
    let base = state.allArticles || [];
    if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase().trim();
        return base.filter(n =>
            (n.title && n.title.toLowerCase().includes(q)) ||
            (n.excerpt && n.excerpt.toLowerCase().includes(q)) ||
            (n.tags && n.tags.some(t => t.toLowerCase().includes(q)))
        );
    }
    // Si no hay búsqueda, filtramos por categoría
    // Pero excluimos la noticia destacada que se muestra arriba si estamos en la vista de categoría
    const news = base.filter(n => n.categoryId === state.activeCategory);
    if (!state.searchQuery) {
        const featured = news.find(n => n.isFeatured) || news[0];
        return news.filter(n => n.id !== featured?.id);
    }
    return news;
};

const getCategoryLabel = () => {
    if (state.searchQuery) return `Resultados para "${state.searchQuery}"`;
    const cat = getCategoryById(state.activeCategory);
    return cat ? cat.label : 'Noticias';
};

/* ─── Renderizador ─── */
const renderMainContent = () => {
    try {
        // Limpiamos el root principal
        mainRoot.innerHTML = '';

        const featured = getFeaturedNews();

        const main = document.createElement('main');
        main.id = 'main-content';

        /* Hero - Noticia destacada de la categoría actual o global si es ciencia */
        const categoryFeatured = featured.find(n => n.categoryId === state.activeCategory) || (state.activeCategory === 'ciencia' ? featured[0] : null);
        if (!state.searchQuery && categoryFeatured) {
            const hero = createHeroBanner(categoryFeatured, openModal);
            main.appendChild(hero);
        }

        /* Grid + Sidebar layout */
        const layout = document.createElement('div');
        layout.className = 'container layout';
        layout.innerHTML = '<div class="layout__grid" id="layout-grid"></div><div class="layout__sidebar" id="layout-sidebar"></div>';

        const gridWrapper = layout.querySelector('#layout-grid');
        const sidebarWrapper = layout.querySelector('#layout-sidebar');

        if (state.isLoading) {
            main.innerHTML = '<div class="container" style="padding: 100px 0; text-align: center;"><div class="skeleton" style="height: 400px; margin-bottom: 20px;"></div><h2>Actualizando últimas noticias reales...</h2></div>';
            mainRoot.appendChild(main);
            return;
        }

        /* VISTA FILTRADA (Categoría o Búsqueda seleccionada) */
        const filtered = getFilteredNews();
        gridWrapper.appendChild(
            createNewsGrid({
                articles: filtered,
                onArticleClick: openModal,
                categoryLabel: getCategoryLabel(),
            })
        );

        sidebarWrapper.appendChild(
            createSidebar({
                articles: [...state.allArticles].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
                onArticleClick: openModal,
            })
        );

        main.appendChild(layout);
        mainRoot.appendChild(main);
    } catch (error) {
        console.error('Error crítico en renderMainContent:', error);
        mainRoot.innerHTML = `<div class="container error-msg animate-fade-in">
            <h3>Ups, algo salió mal al cargar las noticias</h3>
            <p>${error.message}</p>
            <button onclick="location.reload()" class="header__nav-btn" style="margin-top:20px; background: white;">Reintentar</button>
        </div>`;
    }
};

/* ─── Manejadores de eventos ─── */
const handleCategorySelect = (categoryId) => {
    state.activeCategory = categoryId;
    state.searchQuery = '';
    const searchInput = document.querySelector('#search-input');
    if (searchInput) searchInput.value = '';
    setActiveNav(categoryId);
    renderMainContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleLangChange = (lang) => {
    state.lang = lang;
    console.log(`Cambiando idioma a: ${lang}`);
    // Aquí se podría integrar una API de traducción o recargar datos
    // Por ahora simulamos una actualización visual
    state.isLoading = true;
    renderMainContent();
    setTimeout(() => {
        state.isLoading = false;
        renderMainContent();
    }, 500);
};

const handleSearch = (query) => {
    state.searchQuery = query;
    // Buscamos en todas las categorías pero mantenemos la UI consistente
    renderMainContent();
};

/* ─── Carga de noticias externas ─── */
const refreshNews = async () => {
    const live = await fetchLiveNews();
    if (live.length > 0) {
        // Combinar evitando duplicados por título
        const titles = new Set(live.map(l => l.title));
        const filteredMock = NEWS_DATA.filter(m => !titles.has(m.title));
        state.allArticles = [...live, ...filteredMock].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    }
    state.isLoading = false;
    renderMainContent();
};

/* ─── Bootstrap ─── */
const init = async () => {
    headerRoot.innerHTML = '';
    mainRoot.innerHTML = '';
    footerRoot.innerHTML = '';

    /* Header */
    headerRoot.appendChild(
        createHeader({
            onCategorySelect: handleCategorySelect,
            onSearch: handleSearch,
            onLangChange: handleLangChange,
        })
    );

    /* Footer inicializado pronto para estructura estable */
    footerRoot.appendChild(createFooter({ onCategorySelect: handleCategorySelect }));

    /* Render inicial (con skeleton si tarda) */
    renderMainContent();

    /* Cargar noticias reales */
    await refreshNews();

    /* Actualizar cada 30 min */
    setInterval(refreshNews, 30 * 60 * 1000);
};

init();
