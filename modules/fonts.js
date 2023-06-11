import { root } from './elements.js';

function changeFont(event) {
  const font = event.target.value;
  root.style.setProperty('--main-font', event.target.value);
  /* Update the local storage */
  localStorage.setItem('font', JSON.stringify(font));
}

function setFont() {
  const font = localStorage.getItem('font') ? JSON.parse(localStorage.getItem('font')) : 'yuji hentaigana akebono';
  root.style.setProperty('--main-font', font);
}

export { changeFont, setFont };