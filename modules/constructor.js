import Task from "./tasks";

export default class TaskConstructor extends Task {
  constructor(description) {
    /* Use the constructor of the TaskConstructor class */
    super();
    this.description = description;
  }
}
