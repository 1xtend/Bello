const refs = {
  navToggler: document.querySelector('#navToggler'),
  navbar: document.querySelector('.navbar'),
  body: document.querySelector('body'),
};

function toggleNav() {
  refs.navToggler.classList.toggle('active');
  refs.navbar.classList.toggle('active');
  refs.body.classList.toggle('fixed');
}

function clickedLink(e) {
  if (!e.target.classList.contains('active') && refs.navbar.classList.contains('active')) {
    refs.navToggler.classList.remove('active');
    refs.navbar.classList.remove('active');
    refs.body.classList.remove('fixed');
  }
}

refs.navToggler.addEventListener('click', toggleNav);
refs.navbar.addEventListener('click', clickedLink);
