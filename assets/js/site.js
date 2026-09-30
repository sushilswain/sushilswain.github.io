document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');
if (menuButton && navList) {
  const closeMenu = () => {
    navList.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  };
  menuButton.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navList.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navList.classList.contains('open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.header-inner')) closeMenu();
  });
  window.matchMedia('(max-width: 800px)').addEventListener('change', closeMenu);
}
