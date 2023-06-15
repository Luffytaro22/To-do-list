/**
 * @jest-environment jsdom
 */

import TaskConstructor from '../modules/constructor.js';

jest.mock('../modules/tasks.js');

describe('adding tasks', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML =
      `<ul id="tasks-container"> 
          <li></li>
          <button type="button" id="clear-button"></button>
      </ul>`

    const task = new TaskConstructor('add');
    task.createTask(task);

    const list = document.querySelectorAll('#tasks-container li');
    expect(list).toHaveLength(1);
  });
})
