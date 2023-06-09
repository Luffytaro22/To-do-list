const all= document.documentElement;
import { darkModeIcon } from "./elements.js";
export default function darkMode() {
  all.classList.toggle('dark-mode');
  darkModeIcon.classList.toggle('animation');
}
