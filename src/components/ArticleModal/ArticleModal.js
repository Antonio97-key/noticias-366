/**
 * ArticleModal.js
 * Modal de lectura de artículo completo.
 * Accesible (focus trap, ESC para cerrar, aria-modal).
 */

import { formatDateLong } from '../../utils/dateFormatter.js';
import { createCategoryBadge } from '../CategoryBadge/CategoryBadge.js';
import { speak, stopSpeaking, isSpeaking } from '../../utils/speech.js';
import './ArticleModal.css';

let _modalEl = null;
let _onClose = null;
let _currentArticle = null;

/** Crea el modal una sola vez y lo reutiliza */
const getOrCreateModal = () => {
  if (_modalEl) return _modalEl;

  _modalEl = document.createElement('div');
  _modalEl.className = 'modal-overlay';
  _modalEl.id = 'article-modal';
  _modalEl.setAttribute('role', 'dialog');
  _modalEl.setAttribute('aria-modal', 'true');
  _modalEl.setAttribute('aria-hidden', 'true');
  _modalEl.setAttribute('aria-labelledby', 'modal-title');

  _modalEl.innerHTML = `
    <div class="modal" id="modal-box">
      <button class="modal__close" id="modal-close" aria-label="Cerrar artículo">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>

      <div class="modal__hero">
        <img class="modal__image" id="modal-image" src="" alt="" />
        <div class="modal__hero-overlay"></div>
        <div class="modal__hero-content">
          <div id="modal-badge" class="modal__badge"></div>
          <h1 class="modal__title" id="modal-title"></h1>
        </div>
      </div>

      <div class="modal__body">
        <div class="modal__actions">
          <button class="modal__action-btn" id="modal-listen" aria-label="Escuchar artículo">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M15.5 8.5C16.8333 9.83333 16.8333 12.1667 15.5 13.5M18.5 5.5C20.8333 7.83333 20.8333 14.1667 18.5 16.5M12 6L8 10H5V14H8L12 18V6Z"/>
            </svg>
            <span>Escuchar artículo</span>
          </button>
        </div>
        <div class="modal__meta">
          <span class="modal__author" id="modal-author"></span>
          <span class="modal__separator">·</span>
          <time class="modal__date" id="modal-date"></time>
          <span class="modal__separator">·</span>
          <span class="modal__read-time" id="modal-read-time"></span>
        </div>
        <div class="modal__excerpt" id="modal-excerpt"></div>
        <div class="modal__content" id="modal-content"></div>
        <div class="modal__tags" id="modal-tags"></div>
      </div>
    </div>
  `;

  document.body.appendChild(_modalEl);

  /* Close events */
  _modalEl.querySelector('#modal-close').addEventListener('click', closeModal);
  _modalEl.addEventListener('click', (e) => {
    if (e.target === _modalEl) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && _modalEl.getAttribute('aria-hidden') === 'false') closeModal();
  });

  /* TTS Event */
  _modalEl.querySelector('#modal-listen').addEventListener('click', () => {
    if (isSpeaking()) {
      stopSpeaking();
      _modalEl.querySelector('#modal-listen span').textContent = 'Escuchar artículo';
    } else {
      if (_currentArticle) {
        const text = `${_currentArticle.title}. ${_currentArticle.excerpt}. ${_currentArticle.body}`;
        speak(text);
        _modalEl.querySelector('#modal-listen span').textContent = 'Detener lectura';
      }
    }
  });

  return _modalEl;
};

/** Abre el modal con un artículo */
export const openModal = (article) => {
  const modal = getOrCreateModal();
  _currentArticle = article; // Store the current article

  /* Populate */
  modal.querySelector('#modal-image').src = article.imageUrl;
  modal.querySelector('#modal-image').alt = article.title;
  modal.querySelector('#modal-title').textContent = article.title;
  modal.querySelector('#modal-author').textContent = article.author;
  modal.querySelector('#modal-date').textContent = formatDateLong(article.publishedAt);
  modal.querySelector('#modal-read-time').textContent = `${article.readTime} min de lectura`;
  modal.querySelector('#modal-excerpt').textContent = article.excerpt;
  modal.querySelector('#modal-content').innerHTML = article.body
    .split('\n\n')
    .map((p) => `<p>${p}</p>`)
    .join('');

  /* Badge */
  const badgeEl = modal.querySelector('#modal-badge');
  badgeEl.innerHTML = '';
  badgeEl.appendChild(createCategoryBadge(article.categoryId, 'md'));

  /* Tags */
  const tagsEl = modal.querySelector('#modal-tags');
  tagsEl.innerHTML = article.tags
    .map((t) => `<span class="modal__tag">#${t}</span>`)
    .join('');

  /* Show */
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('modal-overlay--visible');
  document.body.classList.add('body--modal-open');

  /* Focus */
  modal.querySelector('#modal-close').focus();
};

/** Cierra el modal */
export const closeModal = () => {
  if (!_modalEl) return;
  stopSpeaking(); // Stop speech when closing the modal
  const btnSpan = _modalEl.querySelector('#modal-listen span');
  if (btnSpan) btnSpan.textContent = 'Escuchar artículo'; // Reset button text

  _modalEl.setAttribute('aria-hidden', 'true');
  _modalEl.classList.remove('modal-overlay--visible');
  document.body.classList.remove('body--modal-open');
};
