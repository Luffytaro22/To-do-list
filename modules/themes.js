import { root } from './elements.js';

export default function themeMode(event) {
  let themeStatus = { status: event.target.value };
  localStorage.setItem('darkMode', JSON.stringify(themeStatus));
  if (event.target.value === 'Rose') {
    root.classList.add('rose-mode');
  }
}