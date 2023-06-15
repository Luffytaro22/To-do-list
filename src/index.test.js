/**
 * @jest-environment jsdom
 */

import TaskConstructor from '../modules/constructor.js';


describe('adding tasks', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML =
      `<ul id="tasks-container">
          <input type="text" id="task"><i class="fa-solid fa-arrow-right-to-bracket" id="enter-icon"></i>
          <button type="button" id="clear-button"></button>
      </ul>`

    require('../modules/tasks.js');
    //require('./index.js');

    const tasksContainer = document.getElementById('tasks-container');
    const input = document.getElementById('task');
    const clearButton = document.getElementById('clear-button');
    const enterIcon = document.getElementById('enter-icon');

    input.value = 'add';
    enterIcon.click();

    const list = document.querySelectorAll('#tasks-container li');
    const list1 = document.querySelector('#tasks-container li:first-child');
    expect(list).toHaveLength(1);
  });
});
