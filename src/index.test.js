/**
 * @jest-environment jsdom
 */

import TaskConstructor from '../modules/constructor.js';


describe('adding tasks', () => {
  test('Add one or more new items to the list', () => {
    document.body.innerHTML =
      `<ul id="tasks-container">
          <input type="text" id="task"><i class="fa-solid fa-arrow-right-to-bracket" id="enter-icon"></i>
          <button type="button" id="clear-button"></button>
      </ul>`

    const task = new TaskConstructor('add');
    task.createTask(task);

    const task2 = new TaskConstructor('Another one');
    task2.createTask(task2);

    const list = document.querySelectorAll('#tasks-container li');

    expect(list).toHaveLength(2);
    expect(document.body.innerHTML).toBe(
      `<ul id="tasks-container">
          <input type="text" id="task"><i class="fa-solid fa-arrow-right-to-bracket" id="enter-icon"></i>
          <li class="tasks remove" draggable="true"><div class="div-check"><input type="checkbox"><textarea>add</textarea></div><i class="fa-solid fa-ellipsis-vertical" draggable="true"></i><i class="fa-regular fa-trash-can hide" id="0"></i></li><li class="tasks remove" draggable="true"><div class="div-check"><input type="checkbox"><textarea>Another one</textarea></div><i class="fa-solid fa-ellipsis-vertical" draggable="true"></i><i class="fa-regular fa-trash-can hide" id="1"></i></li><button type="button" id="clear-button"></button>
      </ul>`
    )
  });
});
