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

// Filter existing application cards independently within each brand section.
document.querySelectorAll('.filters').forEach(filters => {
  filters.hidden = false;
  const section = filters.closest('section');
  filters.addEventListener('click', event => {
    const button = event.target.closest('[data-sector]');
    if (!button) return;
    section.querySelectorAll('[data-sectors]').forEach(card => {
      card.hidden = button.dataset.sector !== 'Todos' && !card.dataset.sectors.split('|').includes(button.dataset.sector);
    });
    const quote = section.querySelector('[data-filter-quote]');
    if (quote) quote.hidden = button.dataset.sector !== 'Todos';
    filters.querySelectorAll('[data-sector]').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
  });
});

document.querySelectorAll('[data-product-group]').forEach(group => {
  group.querySelector('.compact-search').hidden = false;
  const cards = [...group.querySelectorAll('[data-product]')];
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  group.querySelector('input').addEventListener('input', event => {
    cards.forEach(card => { card.hidden = !normalize(card.textContent).includes(normalize(event.target.value)); });
    group.querySelector('[data-search-empty]').hidden = cards.some(card => !card.hidden);
  });
});

// Native HTML details work without JavaScript; this supports direct links to a selected item.
function revealLinkedDetail() {
  const item = document.getElementById(location.hash.slice(1));
  if (!item || item.tagName !== 'DETAILS') return;
  item.hidden = false;
  item.open = true;
  item.scrollIntoView({ block: 'start' });
}
window.addEventListener('hashchange', revealLinkedDetail);
revealLinkedDetail();

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
