import { darkModeIcon } from './elements.js';

const all = document.documentElement;
export default function darkMode() {
  all.classList.toggle('dark-mode');
  darkModeIcon.classList.toggle('animation');
}
