import { darkModeIcon } from './elements.js';

const all = document.documentElement;

function darkMode() {
  let darkStatus = localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')) : { status: 'day', };
  all.classList.toggle('dark-mode');
  darkModeIcon.classList.toggle('animation');
  if (darkStatus.status === 'day') {
    /* Change the status to night and update the local storage */
    darkStatus.status = 'night';
    localStorage.setItem('darkMode', JSON.stringify(darkStatus));
  } else {
    /* Change the status to night and update the local storage */
    darkStatus.status = 'day';
    localStorage.setItem('darkMode', JSON.stringify(darkStatus));
  }
}

function setTheme() {
  /* Initialize the object with the info in the local storage */
  let darkStatus = localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')) : { status: 'day', };
  if (darkStatus.status === 'day') {
    all.classList.remove('dark-mode');
    darkModeIcon.classList.remove('animation');
  } else {
    all.classList.add('dark-mode');
    darkModeIcon.classList.add('animation');
  }
}

export { darkMode, setTheme, };