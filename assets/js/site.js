const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');
if (menuButton && navList) {
  menuButton.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navList.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      navList.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}
