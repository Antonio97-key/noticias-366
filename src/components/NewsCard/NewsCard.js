/**
 * NewsCard.js
 * Tarjeta de noticia individual. Dos variantes: 'default' y 'compact'.
 */

import { formatRelativeTime } from '../../utils/dateFormatter.js';
import { createCategoryBadge } from '../CategoryBadge/CategoryBadge.js';
import './NewsCard.css';

/**
 * @param {Object} article
 * @param {Function} onArticleClick
 * @param {'default'|'compact'} variant
 * @returns {HTMLElement}
 */
export const createNewsCard = (article, onArticleClick, variant = 'default') => {
    const card = document.createElement('article');
    card.className = `news-card news-card--${variant}`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Leer: ${article.title}`);

    const isCompact = variant === 'compact';

    card.innerHTML = `
    ${!isCompact ? `
      <div class="news-card__image-wrapper">
        <img
          class="news-card__image"
          src="${article.imageUrl}"
          alt="${article.title}"
          loading="lazy"
        />
        <div class="news-card__image-overlay"></div>
      </div>
    ` : ''}

    <div class="news-card__body">
      <div class="news-card__meta" data-badge="${article.categoryId}"></div>
      <h2 class="news-card__title">${article.title}</h2>
      ${!isCompact ? `<p class="news-card__excerpt">${article.excerpt}</p>` : ''}
      <div class="news-card__footer">
        <span class="news-card__author">${article.author}</span>
        <span class="news-card__time">${formatRelativeTime(article.publishedAt)}</span>
        ${!isCompact ? `<span class="news-card__read-time">${article.readTime} min</span>` : ''}
      </div>
    </div>
  `;

    /* Insert badge */
    const metaEl = card.querySelector('[data-badge]');
    metaEl.appendChild(createCategoryBadge(article.categoryId, 'sm'));

    /* Click & keyboard */
    const handleOpen = () => onArticleClick(article);
    card.addEventListener('click', handleOpen);
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleOpen(); }
    });

    return card;
};
