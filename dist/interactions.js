/* Enhancements only: all content and links are authored in HTML. */
'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menuButton && navigation) {
  document.documentElement.classList.add('menu-enhanced');
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  });
}

// Filters only hide/show cards already present in the application page.
const filters = document.querySelector('.filters');
if (filters) {
  filters.hidden = false;
  const cards = [...document.querySelectorAll('[data-sectors]')];
  const quote = document.querySelector('[data-filter-quote]');
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-sector]');
    if (!button) return;
    const sector = button.dataset.sector;
    cards.forEach(card => {
      card.hidden = sector !== 'Todos' && !card.dataset.sectors.split('|').includes(sector);
    });
    if (quote) quote.hidden = sector !== 'Todos';
    filters.querySelectorAll('[data-sector]').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
  });
}

// Search and pagination operate on this category's static HTML cards.
const catalogue = document.querySelector('[data-catalog]');
if (catalogue) {
  const cards = [...catalogue.querySelectorAll('[data-product]')];
  const search = catalogue.querySelector('input[type="search"]');
  const pagination = catalogue.querySelector('.pagination');
  const buttons = [...pagination.querySelectorAll('[data-page]')];
  const count = catalogue.querySelector('#count');
  const empty = catalogue.querySelector('[data-empty]');
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  let page = 1;
  catalogue.querySelector('.search').hidden = false;

  function updateCatalogue() {
    const query = normalize(search.value);
    const matches = cards.filter(card => normalize(card.textContent).includes(query));
    const pages = Math.ceil(matches.length / 6);
    page = Math.min(page, Math.max(pages, 1));
    const start = (page - 1) * 6;
    const visible = new Set(matches.slice(start, start + 6));
    cards.forEach(card => { card.hidden = !visible.has(card); });
    empty.hidden = matches.length > 0;
    count.textContent = matches.length
      ? `Mostrando ${start + 1}–${Math.min(start + 6, matches.length)} de ${matches.length} resultados`
      : '0 resultados';
    pagination.hidden = pages <= 1;
    buttons.forEach(button => {
      const number = Number(button.dataset.page);
      button.hidden = number > pages;
      button.classList.toggle('active', number === page);
      if (number === page) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
  }
  search.addEventListener('input', () => { page = 1; updateCatalogue(); });
  pagination.addEventListener('click', event => {
    const button = event.target.closest('[data-page]');
    if (!button) return;
    page = Number(button.dataset.page);
    updateCatalogue();
    catalogue.querySelector('#category-title').scrollIntoView({ block: 'start' });
  });
  updateCatalogue();
}

// The contact form is intentionally disconnected from any sending service.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => event.preventDefault());
  contactForm.addEventListener('keydown', event => {
    if (event.key === 'Enter' && event.target.tagName === 'INPUT') event.preventDefault();
  });
  contactForm.querySelector('fieldset').disabled = false;
  contactForm.querySelector('[data-contact-action]').addEventListener('click', () => {
    if (contactForm.reportValidity()) {
      contactForm.querySelector('.form-result').textContent =
        'El envío desde este formulario no está disponible. Puedes contactarnos por correo o WhatsApp.';
    }
  });
}
