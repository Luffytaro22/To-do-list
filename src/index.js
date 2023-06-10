import './styles.css';
import darkMode from '../modules/dark-mode.js';
import {
  taskInput, enterIcon, clearButton, darkModeIcon,
} from '../modules/elements.js';
import addTask from '../modules/addTask.js';
import Task from '../modules/tasks.js';
import Clear from '../modules/clear-button.js';
import webIcon from '../src/assets/lista-de-deseos.png';

const myTasks = new Task();
myTasks.displayTasks();

const newClear = new Clear();

/* Creates a new link element and added it to the head */
const Image = document.createElement('link');
Image.href = webIcon;
Image.rel = 'icon';
document.querySelector('head').appendChild(Image);
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
