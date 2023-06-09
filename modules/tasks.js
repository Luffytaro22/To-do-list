import { tasksContainer, clearButton } from './elements.js';


export default class Task {
  static index = 0;

  constructor() {
    this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    /* Initialize the array with the information in the local storage */
    this.index = Task.index;
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
    li.classList.add('tasks', 'remove');
    div.classList.add('div-check');
    checkbox.type = 'checkbox';
    checkbox.value = this.status;
    pDescription.textContent = task.description;
    dotsIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
    trashIcon.classList.add('fa-regular', 'fa-trash-can', 'hide');
    trashIcon.id = Task.index;

    /* Append elements */
    div.appendChild(checkbox);
    div.appendChild(pDescription);
    li.appendChild(div);
    li.appendChild(dotsIcon);
    li.appendChild(trashIcon);
    tasksContainer.insertBefore(li, clearButton);
    Task.index += 1;

    const changeStatus = () => {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      if (checkbox.checked) {
        this.tasks[task.index].completed = true;
        pDescription.classList.add('line-through');
        /* Actualize the local storage */
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      } else {
        this.tasks[task.index].completed = false;
        pDescription.classList.remove('line-through');
        /* Actualize the local storage */
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    };

    checkbox.addEventListener('click', changeStatus);

    const showRemoveEdit = () => {
      dotsIcon.classList.add('hide');
      trashIcon.classList.remove('hide');
      li.classList.add('background');

      /* A function to edit the tasks */
      const editTask = () => {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        /* Changes the description of the specific task */
        this.tasks[task.index].description = pDescription.value;
        /* Actualize the local storage */
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      };

      /* A function to remove the tasks */
      const removeTask = (event) => {
        /* Eliminates the selected task */
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        this.tasks = this.tasks.filter((obj) => obj.index !== Number(event.target.id));
        for (let i = 0; i < this.tasks.length; i += 1) {
          this.tasks[i].index = i;
        }
        /* Actualize the local storage */
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        /* Removes the element in the DOM */
        const lis = document.querySelectorAll('.remove');
        lis.forEach((li) => {
          tasksContainer.removeChild(li);
        });
        Task.index = 0;
        this.displayTasks();
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
      trashIcon.addEventListener('click', removeTask);
      pDescription.addEventListener('input', editTask);

      /* Listeners when the user clicks or taps */
      document.addEventListener('mousedown', hideRemoveEdit);
      document.addEventListener('touchstart', hideRemoveEdit);
    };

    /* A click listener to show the remove icon and modify the task */
    pDescription.addEventListener('click', showRemoveEdit);
  }

  storage() {
    /* Add the object to the array */
    this.tasks.push({ description: `${this.description}`, completed: false, index: this.index });

    /* Create the tasks key in the local storage */
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  displayTasks() {
    this.tasks.forEach((task) => {
      this.createTask(task);
    });
  }
}
