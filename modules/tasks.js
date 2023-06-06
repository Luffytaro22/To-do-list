import { tasksContainer } from './elements.js';

let tasks = [
  {
    description: '',
    completed: true,
    index: 1,
  }
];

export default class Task {
  constructor(description) {
    this.description = description;
  }

  createTask() {
    /* Create elements */
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const pDescription = document.createElement('p');
    const dotsIcon = document.createElement('i');

    /* Assign classes and attributes */
    checkbox.type = 'checkbox';
    checkbox.value = 'off';
    pDescription.textContent = this.description;
    dotsIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');

    /* Append elements */
    li.appendChild(checkbox);
    li.appendChild(pDescription);
    li.appendChild(dotsIcon);
    tasksContainer.appendChild(li);
  }
}
