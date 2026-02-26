/**
 * Header.js - Componente de cabecera
 * Logo, navegación por categorías, buscador.
 */

import { CATEGORIES } from '../../data/categories.js';
import './Header.css';

/**
 * @param {{ onCategorySelect: Function, onSearch: Function }} props
 * @returns {HTMLElement}
 */
export const createHeader = ({ onCategorySelect, onSearch, onLangChange }) => {
  const header = document.createElement('header');
  header.className = 'header';
  header.id = 'main-header';

  header.innerHTML = `
    <div class="header__top">
      <div class="container header__top-inner">
        <div class="header__date" id="header-date"></div>
        <div class="header__lang-selector">
          <select id="lang-select" class="header__lang-dropdown" aria-label="Cambiar idioma">
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="zh">Mandarin</option>
            <option value="hi">Hindi</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
        <div class="header__meta">
          <div class="header__clock" id="header-clock">00:00:00</div>
          <span class="header__edition">Edición Digital</span>
        </div>
      </div>
    </div>

    <div class="header__brand">
      <div class="container header__brand-inner">
        <a href="#" class="header__logo" id="logo-home" aria-label="Noticias 366 - Inicio">
          <span class="header__logo-text">N<img src="/logo.png" alt="" class="header__logo-icon" />TICIAS</span>
          <span class="header__logo-number">366</span>
        </a>

        <div class="header__search-wrapper">
          <form class="header__search" id="search-form" role="search" aria-label="Buscar noticias">
            <input
              type="search"
              id="search-input"
              class="header__search-input"
              placeholder="Buscar noticias..."
              autocomplete="off"
              aria-label="Buscar noticias"
            />
            <button type="submit" class="header__search-btn" aria-label="Buscar">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>

    <nav class="header__nav" id="main-nav" role="navigation" aria-label="Categorías">
      <div class="container">
        <ul class="header__nav-list" id="nav-list" role="list">
          ${CATEGORIES.map((cat, index) => `
            <li class="header__nav-item">
              <button
                class="header__nav-btn ${index === 0 ? 'header__nav-btn--active' : ''} header__nav-btn--${cat.id}"
                data-category="${cat.id}"
                id="nav-${cat.id}"
                aria-label="Ver ${cat.label}"
              >
                <span aria-hidden="true">${cat.emoji}</span> ${cat.label}
              </button>
            </li>
          `).join('')}
        </ul>
      </div>
    </nav>
  `;

  /* ─── Fecha ─── */
  const dateEl = header.querySelector('#header-date');
  dateEl.textContent = new Date().toLocaleDateString('es-ES', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  /* ─── Logo → reset all ─── */
  header.querySelector('#logo-home').addEventListener('click', (e) => {
    e.preventDefault();
    setActiveNav('actualidad');
    onCategorySelect('actualidad');
  });

  /* ─── Navegación ─── */
  header.querySelector('#nav-list').addEventListener('click', (e) => {
    const btn = e.target.closest('.header__nav-btn');
    if (!btn) return;
    setActiveNav(btn.dataset.category);
    onCategorySelect(btn.dataset.category);
  });

  /* ─── Búsqueda ─── */
  const searchInput = header.querySelector('#search-input');
  let searchTimeout;

  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      onSearch(searchInput.value.trim());
    }, 300);
  });

  header.querySelector('#search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    onSearch(searchInput.value.trim());
  });

  /* ─── Idioma ─── */
  header.querySelector('#lang-select').addEventListener('change', (e) => {
    onLangChange(e.target.value);
  });

  /* ─── Sticky scroll shadow ─── */
  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ─── Reloj en tiempo real ─── */
  const clockEl = header.querySelector('#header-clock');
  const updateClock = () => {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('es-ES', {
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  };
  setInterval(updateClock, 1000);
  updateClock();

  return header;
};

/** Marca el botón de navegación activo */
export const setActiveNav = (categoryId) => {
  document.querySelectorAll('.header__nav-btn').forEach((btn) => {
    btn.classList.toggle('header__nav-btn--active', btn.dataset.category === categoryId);
  });
};
