import Task from "./tasks";
import { taskInput } from "./elements";

export default function addTask() {
  /* Create a new instance of the Task Class */
  const task = new Task(taskInput.value);

  task.createTask();
  
  /* Eliminates the information in the input */
  taskInput.value = '';
}
