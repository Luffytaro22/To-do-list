import './styles.css';
import darkMode from '../modules/dark-mode.js';
import {
  taskInput, enterIcon, clearButton, darkModeIcon,
} from '../modules/elements.js';
import addTask from '../modules/addTask.js';
import Task from '../modules/tasks.js';
import Clear from '../modules/clear-button.js';
import { handleDragStart, handleDragOver, handleDrop } from '../modules/drag.js';

const dotsIcons = document.querySelectorAll('.fa-ellipsis-vertical');
const myTasks = new Task();
myTasks.displayTasks();

const newClear = new Clear();

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

dotsIcons.forEach((icon) => {
  icon.addEventListener('dragstart', handleDragStart);
  icon.addEventListener('dragover', handleDragOver);
  icon.addEventListener('drop', handleDrop);
});
