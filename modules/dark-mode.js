import { darkModeIcon } from './elements.js';

const all = document.documentElement;

function darkMode() {
  let darkStatus = localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')) : { status: 'day', };
  all.classList.remove('rose-mode', 'yellow-mode');
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
  } else if (darkStatus.status === 'night') {
    all.classList.add('dark-mode');
    darkModeIcon.classList.add('animation');
  } else if (darkStatus.status === 'Rose') {
    all.classList.remove('dark-mode');
    all.classList.add('rose-mode');
  } else if (darkStatus.status === 'Yellow') {
    all.classList.remove('dark-mode', 'rose-mode');
    all.classList.add('yellow-mode');
  }
}

export { darkMode, setTheme, };