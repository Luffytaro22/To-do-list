import { root } from './elements.js';

export default function changeFont(event) {
    root.style.setProperty('--main-font', event.target.value);
}