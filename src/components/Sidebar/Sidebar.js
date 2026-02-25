/**
 * Sidebar.js
 * Panel lateral: noticias más recientes y tendencias.
 */

import { createNewsCard } from '../NewsCard/NewsCard.js';
import './Sidebar.css';

/**
 * @param {{ articles: Array, onArticleClick: Function }} props
 * @returns {HTMLElement}
 */
export const createSidebar = ({ articles, onArticleClick }) => {
    const aside = document.createElement('aside');
    aside.className = 'sidebar';
    aside.setAttribute('aria-label', 'Últimas noticias');

    aside.innerHTML = `
    <div class="sidebar__section">
      <h3 class="sidebar__title">
        <span class="sidebar__title-dot sidebar__title-dot--live"></span>
        Últimas noticias
      </h3>
      <ul class="sidebar__list" id="sidebar-list" role="list"></ul>
    </div>

    <div class="sidebar__section sidebar__trending">
      <h3 class="sidebar__title">🔥 Tendencia</h3>
      <ul class="sidebar__trending-list" id="sidebar-trending" role="list"></ul>
    </div>
  `;

    /* Compact news list */
    const list = aside.querySelector('#sidebar-list');
    articles.slice(0, 5).forEach((article) => {
        const li = document.createElement('li');
        li.setAttribute('role', 'listitem');
        li.appendChild(createNewsCard(article, onArticleClick, 'compact'));
        list.appendChild(li);
    });

    /* Trending (top 3 por más reciente) */
    const trending = aside.querySelector('#sidebar-trending');
    articles.slice(0, 3).forEach((article, i) => {
        const item = document.createElement('li');
        item.className = 'sidebar__trending-item';
        item.setAttribute('role', 'listitem');
        item.innerHTML = `
      <span class="sidebar__trending-num" aria-hidden="true">${i + 1}</span>
      <button class="sidebar__trending-title" aria-label="Leer: ${article.title}">
        ${article.title}
      </button>
    `;
        item.querySelector('button').addEventListener('click', () => onArticleClick(article));
        trending.appendChild(item);
    });

    return aside;
};
