const menu = document.querySelector('.navbar-menu'),
mobileToggle = document.querySelector('.navbar-toggle'),
navLogo = document.getElementById('navbar-logo');

const mobileMenu = () => {
  menu.classList.toggle('active');
  mobileToggle.classList.toggle('active');
};

mobileToggle.addEventListener('click', mobileMenu);

const addHighlight = () => {
  const home = document.getElementById('a-home'),
  about = document.getElementById('a-about'),
  services = document.getElementById('a-services'),
  elem = document.querySelector('.highlight');

  if (window.innerWidth >= 768) {
    if (window.scrollY < 780) {
      home.classList.add('highlight');
      about.classList.remove('highlight');
      return
    } else if (window.scrollY < 1693) {
      home.classList.remove('highlight');
      about.classList.add('highlight');
      services.classList.remove('highlight');
      return
    } else if (window.scrollY < 2483) {
      about.classList.remove('highlight');
      services.classList.add('highlight');
      return
    } else {
      services.classList.remove('highlight');
    }
  }

  if (elem && window.innerWidth < 768) {
    elem.classList.remove('highlight');
  }
}

document.addEventListener('scroll', addHighlight);
document.addEventListener('DOMContentLoaded', addHighlight);
document.addEventListener('click', addHighlight);

const closeMenu = e => {
  if (e.target.classList.contains('navbar-links') || e.target.classList.contains('button')) {
    mobileMenu();
  }
}

menu.addEventListener('click', closeMenu);
navLogo.addEventListener('click', mobileMenu);