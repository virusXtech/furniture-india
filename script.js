const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const prankPopup = document.querySelector('#prank-popup');

const dismissPopup = () => prankPopup?.classList.add('is-hidden');

document.querySelector('.popup-close')?.addEventListener('click', dismissPopup);
document.querySelector('.popup-dismiss')?.addEventListener('click', dismissPopup);

prankPopup?.addEventListener('click', (event) => {
  if (event.target === prankPopup) dismissPopup();
});

menu?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
