const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.js-overlay');

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    header.classList.toggle('header--active');
    overlay.classList.toggle('js-overlay--active');
}


hamburger.addEventListener('click', handleClick);