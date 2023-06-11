import './styles.css';
import { darkMode, setTheme } from '../modules/dark-mode.js';
import {
  taskInput, enterIcon, clearButton, darkModeIcon, select,
  selectTheme,
} from '../modules/elements.js';
import addTask from '../modules/addTask.js';
import Task from '../modules/tasks.js';
import Clear from '../modules/clear-button.js';
import webIcon from './assets/lista-de-deseos.png';
import { changeFont, setFont } from '../modules/fonts.js';
import themeMode from '../modules/themes.js';

const myTasks = new Task();
myTasks.displayTasks();

const newClear = new Clear();

/* Creates a new link element and added it to the head */
const Image = document.createElement('link');
Image.href = webIcon;
Image.rel = 'icon';
document.querySelector('head').appendChild(Image);

/* Charge the theme and the font selected */
window.addEventListener('DOMContentLoaded', setTheme);
window.addEventListener('DOMContentLoaded', setFont);
taskInput.addEventListener('keypress', (event) => {
  /* If the code of the keyword is 13 (enter) then calls the function */
  if (event.charCode === 13 && taskInput.value !== '') {
    addTask();
  }
});

enterIcon.addEventListener('click', () => {
  if (taskInput.value !== '') {
    addTask();
  }
});

clearButton.addEventListener('click', () => {
  newClear.clearButton();
});

darkModeIcon.addEventListener('click', darkMode);

select.addEventListener('change', changeFont);

selectTheme.addEventListener('change', themeMode);