const toggle = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('header__nav--active');
  const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
  toggle.setAttribute('aria-expanded', !expanded);
});