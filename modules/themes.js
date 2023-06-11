import { root } from './elements.js';

export default function themeMode(event) {
  let themeStatus = { status: event.target.value };
  localStorage.setItem('darkMode', JSON.stringify(themeStatus));
  if (event.target.value === 'Rose') {
    root.classList.remove('yellow-mode');
    root.classList.add('rose-mode');
  }
  if (event.target.value === 'Yellow') {
    root.classList.remove('rose-mode');
    root.classList.add('yellow-mode');
  }
}