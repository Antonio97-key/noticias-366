/**
 * NewsGrid.js
 * Grid principal de noticias. Soporta filtrado por categoría y búsqueda.
 */

import { createNewsCard } from '../NewsCard/NewsCard.js';
import './NewsGrid.css';

/**
 * @param {{ articles: Array, onArticleClick: Function, categoryLabel?: string }} props
 * @returns {HTMLElement}
 */
export const createNewsGrid = ({ articles, onArticleClick, categoryLabel = 'Todas las noticias' }) => {
    const section = document.createElement('section');
    section.className = 'news-grid-section';
    section.setAttribute('aria-label', categoryLabel);

    if (articles.length === 0) {
        section.innerHTML = `
      <div class="news-grid__empty">
        <div class="news-grid__empty-icon">🔍</div>
        <h3 class="news-grid__empty-title">Sin resultados</h3>
        <p class="news-grid__empty-text">No se encontraron noticias para tu búsqueda.</p>
      </div>
    `;
        return section;
    }

    section.innerHTML = `
    <h2 class="news-grid__heading" aria-label="${categoryLabel}">
      ${categoryLabel}
      <span class="news-grid__count">${articles.length}</span>
    </h2>
    <div class="news-grid" id="news-grid-container" role="list"></div>
  `;

    const grid = section.querySelector('#news-grid-container');

    articles.forEach((article, i) => {
        const card = createNewsCard(article, onArticleClick, 'default');
        card.setAttribute('role', 'listitem');
        card.style.animationDelay = `${i * 60}ms`;
        grid.appendChild(card);
    });

    return section;
};
