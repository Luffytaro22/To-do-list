import './styles.css'

import { taskInput, clearButton } from '../modules/elements.js';
import addTask from '../modules/addTask.js';
import { Task } from '../modules/tasks';

const myTasks = new Task();
myTasks.displayTasks();

taskInput.addEventListener('keypress', (event) => {
  /* If the code of the keyword is 13 (enter) then calls the function */
  if (event.charCode === 13) {
    addTask();
  }
});
