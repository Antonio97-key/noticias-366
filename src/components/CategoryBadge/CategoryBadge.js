/**
 * CategoryBadge.js
 * Componente: Badge de categoría con color semántico.
 * Principio SoC: sólo renderiza, no sabe de datos globales.
 */

import { getCategoryById } from '../../data/categories.js';
import './CategoryBadge.css';

/**
 * @param {string} categoryId
 * @param {'sm'|'md'} size
 * @returns {HTMLElement}
 */
export const createCategoryBadge = (categoryId, size = 'md') => {
    const cat = getCategoryById(categoryId);
    if (!cat) return document.createElement('span');

    const badge = document.createElement('span');
    badge.className = `category-badge category-badge--${size} category-badge--${categoryId}`;
    badge.setAttribute('data-category', categoryId);
    badge.textContent = `${cat.emoji} ${cat.label}`;

    return badge;
};
