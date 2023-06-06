import './styles.css'

import { taskInput, clearButton } from '../modules/elements.js';
import addTask from '../modules/addTask.js';

taskInput.addEventListener('keypress', (event) => {
  /* If the code of the keyword is 13 (enter) then calls the function */
  if (event.charCode === 13) {
    addTask();
  }
});
