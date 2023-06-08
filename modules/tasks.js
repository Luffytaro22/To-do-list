import TaskConstructor from './constructor.js';
import { tasksContainer, clearButton } from './elements.js';

let index = 0;

export default class Task {
  constructor() {
    this.tasks = [];
    this.status = 'off';
    /* Initialize the array with the information in the local storage */
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  }

  createTask(task) {
    /* Create elements */
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const pDescription = document.createElement('textarea');
    const dotsIcon = document.createElement('i');
    const div = document.createElement('div');
    const trashIcon = document.createElement('i');

    /* Assign classes and attributes */
    li.classList.add('tasks');
    div.classList.add('div-check');
    checkbox.type = 'checkbox';
    checkbox.value = this.status;
    pDescription.textContent = task.description;
    dotsIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
    trashIcon.classList.add('fa-regular', 'fa-trash-can', 'hide');

    /* Append elements */
    div.appendChild(checkbox);
    div.appendChild(pDescription);
    li.appendChild(div);
    li.appendChild(dotsIcon);
    li.appendChild(trashIcon);
    tasksContainer.insertBefore(li, clearButton);
    index += 1;

    const changeStatus = () => {
        if (checkbox.value === 'off') {
          this.status = 'on';
          checkbox.value = this.status;
          task.completed = true;
        } else if (checkbox.value === 'on') {
          this.status = 'off';
          checkbox.value = this.status;
          task.completed = false;
        }
    };

    checkbox.addEventListener('click', changeStatus);

    const showRemoveEdit = () => {
      dotsIcon.classList.add('hide');
      trashIcon.classList.remove('hide');
      li.classList.add('background');

      /* A function to edit the tasks */
      const editTask = () => {
        /* Changes the description of the specific task */
        task.description = pDescription.value;
        /* Actualize the local storage */
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      };

      /* A function to remove the tasks */
      const removeTask = () => {
        /* Eliminates the selected task */
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        this.tasks = this.tasks.filter((obj) => obj.index !== task.index);
        /* Iterate through the array beginning at the eliminated index and changes the indexes */
        /*this.tasks.forEach((task, i) => {
          task.index = i;
          index = i;
        });*/
        for (let i = task.index; i < this.tasks.length; i += 1) {
          this.tasks[i].index = i;
          index = i;
        }
        /* Actualize the local storage */
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        /* Removes the element in the DOM */
        tasksContainer.removeChild(li);
        index += 1;
      };

      const hideRemoveEdit = (event) => {
        /* Check if the li element not contains the target element */
        if (!li.contains(event.target)) {
          dotsIcon.classList.remove('hide');
          trashIcon.classList.add('hide');
          li.classList.remove('background');
        }
      };

      /* Save the info in the textarea every time the user modifies it */
      pDescription.addEventListener('input', editTask);

      trashIcon.addEventListener('click', removeTask);

      /* Listeners when the user clicks or taps */
      window.addEventListener('mousedown', hideRemoveEdit);
      window.addEventListener('touchstart', hideRemoveEdit);
    };

    /* A click listener to show the remove icon and modify the task */
    pDescription.addEventListener('click', showRemoveEdit);
  }

  storage() {
    /* Add the object to the array */
    this.tasks.push({ description: `${this.description}`, completed: false, index: index });

    /* Create the tasks key in the local storage */
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  displayTasks() {
    this.tasks.forEach((task) => {
      this.createTask(task);
    });
  }
}
