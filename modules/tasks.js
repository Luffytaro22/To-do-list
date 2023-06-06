import { tasksContainer, clearButton } from './elements.js';

export let index = 0;

export class Task {
  constructor() {
    this.tasks = [];

    /* Initialize the array with the information in the local storage */
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  }

  createTask() {
    /* Create elements */
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const pDescription = document.createElement('p');
    const dotsIcon = document.createElement('i');

    /* Assign classes and attributes */
    li.classList.add('tasks');
    checkbox.type = 'checkbox';
    checkbox.value = 'off';
    pDescription.textContent = this.description;
    dotsIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');

    /* Append elements */
    li.appendChild(checkbox);
    li.appendChild(pDescription);
    li.appendChild(dotsIcon);
    tasksContainer.insertBefore(li, clearButton);
    index += 1;
  }

  storage() {
    /* Add the object to the array */
    this.tasks.push({description: `${this.description}`, completed: false, index: `${index}`});

    /* Create the tasks key in the local storage */
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
