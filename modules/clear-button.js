import { checks } from './elements.js';
import Task from './tasks.js';

export default class Clear extends Task {
  constructor() {
    super();
  }

  clearButton() {
    this.tasks = this.tasks.filter((obj) => obj.completed === false);
    /* Actualize the local storage */
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    checks.forEach((check) => {
      if (check.checked) {
        /* Gets the li element because the checkbox it's inside a div */
        check.parentNode.parentNode.remove();
      }
    });
  }
}
