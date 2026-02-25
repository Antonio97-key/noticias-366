/**
 * Footer.js
 */

import { CATEGORIES } from '../../data/categories.js';
import './Footer.css';

/**
 * @param {{ onCategorySelect: Function }} props
 * @returns {HTMLElement}
 */
export const createFooter = ({ onCategorySelect }) => {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.id = 'main-footer';

  footer.innerHTML = `
    <div class="container footer__inner">
      <div class="footer__brand">
        <span class="footer__logo">
          <span class="footer__logo-n">N</span>OTICIAS<span class="footer__logo-number">366</span>
        </span>
        <p class="footer__tagline">Tu portal de información de confianza.<br/>Noticias verificadas, análisis profundo, siempre.</p>
        <p class="footer__copy">&copy; ${new Date().getFullYear()} Noticias 366. Todos los derechos reservados.</p>
      </div>

      <nav class="footer__nav" aria-label="Categorías del portal">
        <h4 class="footer__nav-title">Secciones</h4>
        <ul class="footer__nav-list" role="list">
          ${CATEGORIES.map(cat => `
            <li>
              <button class="footer__nav-link" data-category="${cat.id}" aria-label="Ir a ${cat.label}">
                ${cat.emoji} ${cat.label}
              </button>
            </li>
          `).join('')}
        </ul>
      </nav>

      <div class="footer__about">
        <h4 class="footer__nav-title">Acerca del proyecto</h4>
        <p class="footer__about-text">
          Noticias 366 es un portal de periodismo digital independiente,
          comprometido con la veracidad, la pluralidad y la calidad informativa.
          Nuestras 8 secciones cubren toda la actualidad que importa.
        </p>
        <div class="footer__tech">
          <span class="footer__tech-badge">Vite</span>
          <span class="footer__tech-badge">Vanilla JS</span>
          <span class="footer__tech-badge">RSS · n8n</span>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-grid">
        <div class="footer__contact">
          <h4 class="footer__nav-title footer__nav-title--small">Comunícate con nosotros</h4>
          <a href="mailto:informacionesnoticias366@gmail.com" class="footer__contact-link">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            informacionesnoticias366@gmail.com
          </a>
        </div>
        <div class="footer__credits">
          <span>Noticias 366 · Periodismo digital independiente</span>
          <span>Hecho con ❤️ y código limpio</span>
        </div>
      </div>
    </div>
  `;

  footer.querySelector('.footer__nav-list').addEventListener('click', (e) => {
    const btn = e.target.closest('.footer__nav-link');
    if (!btn) return;
    onCategorySelect(btn.dataset.category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  return footer;
};
