const d = document;

/** carga de todos los docuemtos */

// window.addEventListener("load", (event) => {
//   let loading = d.querySelector('.loader');
//   d.querySelector('body').removeChild(loading);
// });

/** Menu movil */

function toggleNav() {
  const menuBtn = d.querySelector('.header__nav__btn')
  let navbar = d.querySelector('.header__nav')
  let mobileMenu = d.querySelector('.header__nav__menu')
  let main = d.querySelector('.Main')
  let menuBtnImg = d.querySelector('.header__nav__btn__img')

  menuBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log('bonto menu')

    mobileMenu.classList.toggle('is-active');
    navbar.classList.toggle('is-active');
    // main.classList.toggle('is-active');
    if (mobileMenu.classList.contains('is-active')) {
      console.log('menu activo');
      menuBtnImg.src = 'images/error.svg'
    } else {
      menuBtnImg.src = 'images/menu.svg'
    }
  });

  d.addEventListener('click', e => {
    if (e.target.matches('a[href="#"]')) {
      e.preventDefault();
      menuBtn.classList.remove('is-active');
      // header.classList.remove('is-active');
      // main.classList.remove('is-active');
    }
  });
}

toggleNav();

/** evento de scroll para el menu */

window.onscroll = () => { menuScroll() };

const menuScroll = () => {
  let menu = d.querySelector('.header__nav');

  if (d.body.scrollTop > 100 || d.documentElement.scrollTop > 100) {
    menu.classList.add('--scroll');
  } else {
    menu.classList.remove('--scroll');
  }
}

const footerYear = document.querySelector('.Footer-year');
footerYear.textContent = new Date().getFullYear();