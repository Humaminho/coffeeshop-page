import './styles.css';
import home from './home';
import menu from './menu';
import about from './about';


function grabElements() {
  const homeEl = document.querySelector('#home');
  const menuEl = document.querySelector('#menu');
  const aboutEl = document.querySelector('#about');
  const logo = document.querySelector('#logo');
  logo.addEventListener('click', goToHome);
  homeEl.addEventListener('click', goToHome);
  menuEl.addEventListener('click', goToMenu);
  aboutEl.addEventListener('click', goToAbout);
}

function goToHome() {
  home();
  grabElements();
}
function goToMenu() {
  menu();
  grabElements();
}
function goToAbout() {
  about();
  grabElements();
}

goToHome();