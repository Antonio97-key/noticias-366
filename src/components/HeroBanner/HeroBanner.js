/**
 * HeroBanner.js
 * Noticia principal destacada a pantalla completa.
 */

import { getCategoryById } from '../../data/categories.js';
import { formatRelativeTime } from '../../utils/dateFormatter.js';
import { createCategoryBadge } from '../CategoryBadge/CategoryBadge.js';
import './HeroBanner.css';

/**
 * @param {Object} article - La noticia destacada principal
 * @param {Function} onArticleClick
 * @returns {HTMLElement}
 */
export const createHeroBanner = (article, onArticleClick) => {
  const cat = getCategoryById(article.categoryId);

  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.id = 'hero-banner';
  hero.setAttribute('aria-label', 'Noticia destacada');

  hero.innerHTML = `
    <div class="hero__card">
      <div class="hero__image-wrapper">
        <img src="${article.imageUrl}" alt="${article.title}" class="hero__image" />
        <div class="hero__image-badge">Noticia Destacada</div>
      </div>
      <div class="hero__content">
        <div class="hero__meta"></div>
        <h1 class="hero__title">${article.title}</h1>
        <p class="hero__excerpt">${article.excerpt}</p>
        <div class="hero__footer">
          <div class="hero__author-info">
            <span class="hero__author">${article.author}</span>
            <span class="hero__time">${formatRelativeTime(article.publishedAt)}</span>
            <span class="hero__read-time">· ${article.readTime} min de lectura</span>
          </div>
          <button class="hero__cta" aria-label="Leer artículo completo">
            Leer artículo completo
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  /* Badge de categoría */
  const metaEl = hero.querySelector('.hero__meta');
  metaEl.appendChild(createCategoryBadge(article.categoryId, 'md'));
  if (article.isFeatured) {
    const featured = document.createElement('span');
    featured.className = 'hero__featured-tag';
    featured.textContent = '🔥 Destacado';
    metaEl.appendChild(featured);
  }

  /* Click para abrir modal */
  hero.querySelector('.hero__cta').addEventListener('click', () => onArticleClick(article));
  hero.style.cursor = 'pointer';
  hero.addEventListener('click', (e) => {
    if (!e.target.closest('.hero__cta')) onArticleClick(article);
  });

  return hero;
};
