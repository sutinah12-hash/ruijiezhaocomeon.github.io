const languageLink = document.querySelector('[data-language]');
const translation = languageLink.getAttribute('href');

function updateLanguageLink() {
  languageLink.setAttribute('href', translation + window.location.hash);
}

updateLanguageLink();
window.addEventListener('hashchange', updateLanguageLink);

function openLinkedCertificate() {
  const id = window.location.hash.slice(1);
  if (!id.startsWith('proof-')) return;
  const proof = document.getElementById(id);
  if (proof) proof.open = true;
}

openLinkedCertificate();
window.addEventListener('hashchange', openLinkedCertificate);

const filters = document.querySelector('.filters');
if (filters) {
  const groups = document.querySelectorAll('.award-group[data-level]');
  const buttons = filters.querySelectorAll('button');
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const level = button.dataset.filter;
    for (const control of buttons) {
      control.setAttribute('aria-pressed', String(control === button));
    }
    for (const group of groups) {
      group.hidden = level !== 'all' && group.dataset.level !== level;
    }
  });
}
