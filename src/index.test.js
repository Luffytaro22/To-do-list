/**
 * @jest-environment jsdom
 */

import TaskConstructor from '../modules/constructor.js';

test('Add one new item to the list', () => {
  document.body.innerHTML =
    '<div>' +
    '  <ul id="list"><li></li>' +
    '<button type="button" id="clear-button">Clear all completed</button></ul>' +
    '</div>';
  const task = new TaskConstructor('add');
  task.createTask(task);
  const list = document.querySelectorAll('#list li');
  expect(list).toHaveLength(1);
});