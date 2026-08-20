const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-menu');
if (button && menu) {
  button.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
