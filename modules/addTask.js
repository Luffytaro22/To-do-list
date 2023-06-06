import TaskConstructor from './constructor';
import { taskInput } from './elements';

export default function addTask() {
  /* Create a new instance of the Task Class */
  const task = new TaskConstructor(taskInput.value);

  task.storage();
  task.createTask(task);
  /* Eliminates the information in the input */
  taskInput.value = '';
}
