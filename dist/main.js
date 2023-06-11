"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./modules/addTask.js":
/*!****************************!*\
  !*** ./modules/addTask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor.js */ "./modules/constructor.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ "./modules/elements.js");



function addTask() {
  /* Create a new instance of the Task Class */
  const task = new _constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"](_elements_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value);

  task.storage();
  task.createTask(task);
  /* Eliminates the information in the input */
  _elements_js__WEBPACK_IMPORTED_MODULE_1__.taskInput.value = '';
}


/***/ }),

/***/ "./modules/clear-button.js":
/*!*********************************!*\
  !*** ./modules/clear-button.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Clear)
/* harmony export */ });
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ "./modules/elements.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ "./modules/tasks.js");



class Clear extends _tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super();
    this.void = 1;
  }

  clearButton() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    this.tasks = this.tasks.filter((obj) => obj.completed === false);
    for (let i = 0; i < this.tasks.length; i += 1) {
      this.tasks[i].index = i;
    }
    /* Actualize the local storage */
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    const lis = document.querySelectorAll('.remove');
    lis.forEach((li) => {
      _elements_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.removeChild(li);
    });
    _tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"].index = 0;
    this.displayTasks();
  }
}


/***/ }),

/***/ "./modules/constructor.js":
/*!********************************!*\
  !*** ./modules/constructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskConstructor)
/* harmony export */ });
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ "./modules/tasks.js");


class TaskConstructor extends _tasks_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(description) {
    /* Use the constructor of the TaskConstructor class */
    super();
    this.description = description;
  }
}


/***/ }),

/***/ "./modules/dark-mode.js":
/*!******************************!*\
  !*** ./modules/dark-mode.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   darkMode: () => (/* binding */ darkMode),
/* harmony export */   setTheme: () => (/* binding */ setTheme)
/* harmony export */ });
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ "./modules/elements.js");


const all = document.documentElement;

function darkMode() {
  const darkStatus = localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')) : { status: 'day' };
  all.classList.remove('rose-mode', 'yellow-mode');
  all.classList.toggle('dark-mode');
  _elements_js__WEBPACK_IMPORTED_MODULE_0__.darkModeIcon.classList.toggle('animation');
  if (darkStatus.status === 'day') {
    /* Change the status to night and update the local storage */
    darkStatus.status = 'night';
    localStorage.setItem('darkMode', JSON.stringify(darkStatus));
  } else {
    /* Change the status to night and update the local storage */
    darkStatus.status = 'day';
    localStorage.setItem('darkMode', JSON.stringify(darkStatus));
  }
}

function setTheme() {
  /* Initialize the object with the info in the local storage */
  const darkStatus = localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')) : { status: 'day' };
  if (darkStatus.status === 'day') {
    all.classList.remove('dark-mode');
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.darkModeIcon.classList.remove('animation');
  } else if (darkStatus.status === 'night') {
    all.classList.add('dark-mode');
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.darkModeIcon.classList.add('animation');
  } else if (darkStatus.status === 'Rose') {
    all.classList.remove('dark-mode');
    all.classList.add('rose-mode');
  } else if (darkStatus.status === 'Yellow') {
    all.classList.remove('dark-mode', 'rose-mode');
    all.classList.add('yellow-mode');
  }
}



/***/ }),

/***/ "./modules/elements.js":
/*!*****************************!*\
  !*** ./modules/elements.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checks: () => (/* binding */ checks),
/* harmony export */   clearButton: () => (/* binding */ clearButton),
/* harmony export */   darkModeIcon: () => (/* binding */ darkModeIcon),
/* harmony export */   descriptions: () => (/* binding */ descriptions),
/* harmony export */   dotsIcons: () => (/* binding */ dotsIcons),
/* harmony export */   enterIcon: () => (/* binding */ enterIcon),
/* harmony export */   lis: () => (/* binding */ lis),
/* harmony export */   listContainer: () => (/* binding */ listContainer),
/* harmony export */   root: () => (/* binding */ root),
/* harmony export */   select: () => (/* binding */ select),
/* harmony export */   selectTheme: () => (/* binding */ selectTheme),
/* harmony export */   taskInput: () => (/* binding */ taskInput),
/* harmony export */   tasksContainer: () => (/* binding */ tasksContainer),
/* harmony export */   trashIcons: () => (/* binding */ trashIcons)
/* harmony export */ });
const listContainer = document.querySelector('#list-container');
const tasksContainer = document.getElementById('tasks-container');
const taskInput = document.getElementById('task');
const clearButton = document.getElementById('clear-button');
const enterIcon = document.getElementById('enter-icon');
const checks = document.querySelectorAll('input[type="checkbox"]');
const lis = document.querySelectorAll('.remove');
const descriptions = document.querySelectorAll('textarea');
const dotsIcons = document.querySelectorAll('.fa-ellipsis-vertical');
const trashIcons = document.querySelectorAll('.fa-trash-can');
const darkModeIcon = document.querySelector('#light-dark-icon');
const select = document.querySelector('#font');
const selectTheme = document.getElementById('theme');
const root = document.documentElement;




/***/ }),

/***/ "./modules/fonts.js":
/*!**************************!*\
  !*** ./modules/fonts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeFont: () => (/* binding */ changeFont),
/* harmony export */   setFont: () => (/* binding */ setFont)
/* harmony export */ });
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ "./modules/elements.js");


function changeFont(event) {
  const font = event.target.value;
  _elements_js__WEBPACK_IMPORTED_MODULE_0__.root.style.setProperty('--main-font', event.target.value);
  /* Update the local storage */
  localStorage.setItem('font', JSON.stringify(font));
}

function setFont() {
  const font = localStorage.getItem('font') ? JSON.parse(localStorage.getItem('font')) : 'yuji hentaigana akebono';
  _elements_js__WEBPACK_IMPORTED_MODULE_0__.root.style.setProperty('--main-font', font);
}



/***/ }),

/***/ "./modules/tasks.js":
/*!**************************!*\
  !*** ./modules/tasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ "./modules/elements.js");


class Task {
  static index = 0;

  constructor() {
    this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    /* Initialize the array with the information in the local storage */
    this.index = Task.index;
  }

  createTask(task) {
    /* Create elements */
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const pDescription = document.createElement('textarea');
    const dotsIcon = document.createElement('i');
    const div = document.createElement('div');
    const trashIcon = document.createElement('i');

    /* Assign classes and attributes */
    li.classList.add('tasks', 'remove');
    li.draggable = true;
    div.classList.add('div-check');
    checkbox.type = 'checkbox';
    pDescription.textContent = task.description;
    dotsIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
    dotsIcon.draggable = true;
    trashIcon.classList.add('fa-regular', 'fa-trash-can', 'hide');
    trashIcon.id = Task.index;

    /* Append elements */
    div.appendChild(checkbox);
    div.appendChild(pDescription);
    li.appendChild(div);
    li.appendChild(dotsIcon);
    li.appendChild(trashIcon);
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.insertBefore(li, _elements_js__WEBPACK_IMPORTED_MODULE_0__.clearButton);
    Task.index += 1;

    const changeStatus = () => {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      if (checkbox.checked) {
        this.tasks[task.index].completed = true;
        pDescription.classList.add('line-through');
        /* Actualize the local storage */
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      } else {
        this.tasks[task.index].completed = false;
        pDescription.classList.remove('line-through');
        /* Actualize the local storage */
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    };

    checkbox.addEventListener('click', changeStatus);

    dotsIcon.addEventListener('dragstart', (event) => {
      event.target.parentNode.classList.add('drag');
    });
    dotsIcon.addEventListener('dragend', (event) => {
      event.target.parentNode.classList.remove('drag');
    });
    dotsIcon.addEventListener('dragover', (event) => {
      console.log(event);
    });
    dotsIcon.addEventListener('drop', (event) => {
      event.target.parentNode.classList.remove('drag');
    });

    const showRemoveEdit = () => {
      dotsIcon.classList.add('hide');
      trashIcon.classList.remove('hide');
      li.classList.add('background');

      /* A function to edit the tasks */
      const editTask = () => {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        /* Changes the description of the specific task */
        this.tasks[task.index].description = pDescription.value;
        /* Actualize the local storage */
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      };

      /* A function to remove the tasks */
      const removeTask = (event) => {
        /* Eliminates the selected task */
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        this.tasks = this.tasks.filter((obj) => obj.index !== Number(event.target.id));
        for (let i = 0; i < this.tasks.length; i += 1) {
          this.tasks[i].index = i;
        }
        /* Actualize the local storage */
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        /* Removes the element in the DOM */
        const lis = document.querySelectorAll('.remove');
        lis.forEach((li) => {
          _elements_js__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.removeChild(li);
        });
        Task.index = 0;
        this.displayTasks();
      };

      const hideRemoveEdit = (event) => {
        /* Check if the li element not contains the target element */
        if (!li.contains(event.target)) {
          dotsIcon.classList.remove('hide');
          trashIcon.classList.add('hide');
          li.classList.remove('background');
        }
      };

      /* Save the info in the textarea every time the user modifies it */
      trashIcon.addEventListener('click', removeTask);
      pDescription.addEventListener('input', editTask);

      /* Listeners when the user clicks or taps */
      document.addEventListener('mousedown', hideRemoveEdit);
      document.addEventListener('touchstart', hideRemoveEdit);
    };

    /* A click listener to show the remove icon and modify the task */
    pDescription.addEventListener('click', showRemoveEdit);
  }

  storage() {
    /* Add the object to the array */
    this.tasks.push({ description: `${this.description}`, completed: false, index: this.index });

    /* Create the tasks key in the local storage */
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  displayTasks() {
    this.tasks.forEach((task) => {
      this.createTask(task);
    });
  }
}


/***/ }),

/***/ "./modules/themes.js":
/*!***************************!*\
  !*** ./modules/themes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ themeMode)
/* harmony export */ });
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ "./modules/elements.js");


function themeMode(event) {
  const themeStatus = { status: event.target.value };
  localStorage.setItem('darkMode', JSON.stringify(themeStatus));
  if (event.target.value === 'Rose') {
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.root.classList.remove('yellow-mode');
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.root.classList.add('rose-mode');
  }
  if (event.target.value === 'Yellow') {
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.root.classList.remove('rose-mode');
    _elements_js__WEBPACK_IMPORTED_MODULE_0__.root.classList.add('yellow-mode');
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Yuji+Hentaigana+Akebono&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --background-color: #fff;
  --text-color: black;
  --tasks-background: #fff;
  --li-active: blanchedalmond;
  --box-shadow: darkgrey;
  --background-button: darkgrey;
  --main-font: yuji hentaigana akebono;
}

.dark-mode {
  --background-color: rgb(53, 53, 53);
  --text-color: white;
  --tasks-background: rgb(4, 0, 66);
  --li-active: black;
  --box-shadow: rgb(0, 0, 0);
  --background-button: black;
}

.rose-mode {
  --background-color: #c759bd;
  --text-color: white;
  --tasks-background: #930d29;
  --li-active: #8a741d;
  --box-shadow: #6e480e;
  --background-button: #a46b03;
}

.yellow-mode {
  --background-color: #737303;
  --text-color: white;
  --tasks-background: brown;
  --li-active: #000;
  --box-shadow: black;
  --background-button: #d08702;
}

* {
  margin: 0;
  padding: 0;
  color: var(--text-color);
  font-style: italic;
}

body {
  font-family: var(--main-font), sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: all 0.5s ease-in-out;
}

main {
  min-height: calc(100vh);
}

h1 {
  text-align: center;
  margin: 50px 0;
}

i:hover {
  cursor: pointer;
}

.hide {
  display: none;
}

.line-through {
  text-decoration: line-through;
}

.animation {
  animation-name: dark-mode;
  animation-timing-function: ease-in-out;
  animation-duration: 0.5s;
}

.drag {
  opacity: 1;
  border: 1px solid blue;
}

#light-dark-icon {
  position: absolute;
  top: 5%;
  left: 5%;
  font-size: 30px;
}

@keyframes dark-mode {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

#tasks-container textarea {
  font-weight: 600;
  width: 55vw;
  max-width: 340px;
  font-family: var(--main-font), sans-serif;
  overflow: auto;
  resize: none;
  outline: none;
  border: none;
  padding-top: 15px;
  background: none;
}

.background {
  background-color: var(--li-active);
  animation-name: li-background;
  animation-timing-function: ease-in-out;
  animation-duration: 0.5s;
}

@keyframes li-background {
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
}

#list-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

#tasks-container {
  list-style: none;
  box-shadow: 0 0 5px 3px var(--box-shadow);
  width: 90%;
  max-width: 443px;
  background-color: var(--tasks-background);
}

.display-containers {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 10px;
  padding: 0 20px;
}

.selects {
  background-color: var(--background-color);
  border-radius: 5px;
}

#font option {
  padding: 5px 1px;
}

.tasks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid var(--box-shadow);
}

.div-check {
  display: flex;
  gap: 20px;
}

#clear-button {
  width: 100%;
  padding: 20px 20px;
  border: none;
  font-family: var(--main-font), sans-serif;
  font-weight: 600;
  background-color: var(--background-button);
  transition: all 0.5s ease-in-out;
}

#task {
  border: none;
  outline: none;
  padding: 5px 0;
  width: 90%;
  font-family: var(--main-font), sans-serif;
  font-weight: 600;
  background: none;
}

#task::placeholder {
  font-family: var(--main-font), sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 1.2em;
}

#clear-button:hover {
  cursor: pointer;
  text-decoration: underline;
  background: crimson;
}

@media only screen and (min-width: 768px) {
  #tasks-container p,
  textarea {
    font-size: 1.3em;
  }

  .display-containers label {
    font-size: 1.3em;
  }

  #task {
    font-size: 1.3em;
  }

  #task::placeholder {
    font-size: 1.3em;
  }

  #clear-button {
    font-size: 1.2em;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAMA;EACE,wBAAwB;EACxB,mBAAmB;EACnB,wBAAwB;EACxB,2BAA2B;EAC3B,sBAAsB;EACtB,6BAA6B;EAC7B,oCAAoC;AACtC;;AAEA;EACE,mCAAmC;EACnC,mBAAmB;EACnB,iCAAiC;EACjC,kBAAkB;EAClB,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,2BAA2B;EAC3B,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,yCAAyC;EACzC,yCAAyC;EACzC,wBAAwB;EACxB,gCAAgC;AAClC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,sCAAsC;EACtC,wBAAwB;AAC1B;;AAEA;EACE,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,yCAAyC;EACzC,cAAc;EACd,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,6BAA6B;EAC7B,sCAAsC;EACtC,wBAAwB;AAC1B;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,yCAAyC;EACzC,UAAU;EACV,gBAAgB;EAChB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,yCAAyC;EACzC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,yCAAyC;EACzC,gBAAgB;EAChB,0CAA0C;EAC1C,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,UAAU;EACV,yCAAyC;EACzC,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE;;IAEE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Yuji+Hentaigana+Akebono&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');\r\n\r\n:root {\r\n  --background-color: #fff;\r\n  --text-color: black;\r\n  --tasks-background: #fff;\r\n  --li-active: blanchedalmond;\r\n  --box-shadow: darkgrey;\r\n  --background-button: darkgrey;\r\n  --main-font: yuji hentaigana akebono;\r\n}\r\n\r\n.dark-mode {\r\n  --background-color: rgb(53, 53, 53);\r\n  --text-color: white;\r\n  --tasks-background: rgb(4, 0, 66);\r\n  --li-active: black;\r\n  --box-shadow: rgb(0, 0, 0);\r\n  --background-button: black;\r\n}\r\n\r\n.rose-mode {\r\n  --background-color: #c759bd;\r\n  --text-color: white;\r\n  --tasks-background: #930d29;\r\n  --li-active: #8a741d;\r\n  --box-shadow: #6e480e;\r\n  --background-button: #a46b03;\r\n}\r\n\r\n.yellow-mode {\r\n  --background-color: #737303;\r\n  --text-color: white;\r\n  --tasks-background: brown;\r\n  --li-active: #000;\r\n  --box-shadow: black;\r\n  --background-button: #d08702;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: var(--text-color);\r\n  font-style: italic;\r\n}\r\n\r\nbody {\r\n  font-family: var(--main-font), sans-serif;\r\n  background-color: var(--background-color);\r\n  color: var(--text-color);\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\nmain {\r\n  min-height: calc(100vh);\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  margin: 50px 0;\r\n}\r\n\r\ni:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.line-through {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.animation {\r\n  animation-name: dark-mode;\r\n  animation-timing-function: ease-in-out;\r\n  animation-duration: 0.5s;\r\n}\r\n\r\n.drag {\r\n  opacity: 1;\r\n  border: 1px solid blue;\r\n}\r\n\r\n#light-dark-icon {\r\n  position: absolute;\r\n  top: 5%;\r\n  left: 5%;\r\n  font-size: 30px;\r\n}\r\n\r\n@keyframes dark-mode {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#tasks-container textarea {\r\n  font-weight: 600;\r\n  width: 55vw;\r\n  max-width: 340px;\r\n  font-family: var(--main-font), sans-serif;\r\n  overflow: auto;\r\n  resize: none;\r\n  outline: none;\r\n  border: none;\r\n  padding-top: 15px;\r\n  background: none;\r\n}\r\n\r\n.background {\r\n  background-color: var(--li-active);\r\n  animation-name: li-background;\r\n  animation-timing-function: ease-in-out;\r\n  animation-duration: 0.5s;\r\n}\r\n\r\n@keyframes li-background {\r\n  from {\r\n    opacity: 0.5;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#list-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n#tasks-container {\r\n  list-style: none;\r\n  box-shadow: 0 0 5px 3px var(--box-shadow);\r\n  width: 90%;\r\n  max-width: 443px;\r\n  background-color: var(--tasks-background);\r\n}\r\n\r\n.display-containers {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 30px;\r\n  gap: 10px;\r\n  padding: 0 20px;\r\n}\r\n\r\n.selects {\r\n  background-color: var(--background-color);\r\n  border-radius: 5px;\r\n}\r\n\r\n#font option {\r\n  padding: 5px 1px;\r\n}\r\n\r\n.tasks {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px 20px;\r\n  border-bottom: 1px solid var(--box-shadow);\r\n}\r\n\r\n.div-check {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n#clear-button {\r\n  width: 100%;\r\n  padding: 20px 20px;\r\n  border: none;\r\n  font-family: var(--main-font), sans-serif;\r\n  font-weight: 600;\r\n  background-color: var(--background-button);\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n#task {\r\n  border: none;\r\n  outline: none;\r\n  padding: 5px 0;\r\n  width: 90%;\r\n  font-family: var(--main-font), sans-serif;\r\n  font-weight: 600;\r\n  background: none;\r\n}\r\n\r\n#task::placeholder {\r\n  font-family: var(--main-font), sans-serif;\r\n  font-style: italic;\r\n  font-weight: 600;\r\n  font-size: 1.2em;\r\n}\r\n\r\n#clear-button:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n  background: crimson;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  #tasks-container p,\r\n  textarea {\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  .display-containers label {\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  #task {\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  #task::placeholder {\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  #clear-button {\r\n    font-size: 1.2em;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_dark_mode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/dark-mode.js */ "./modules/dark-mode.js");
/* harmony import */ var _modules_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/elements.js */ "./modules/elements.js");
/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/addTask.js */ "./modules/addTask.js");
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/tasks.js */ "./modules/tasks.js");
/* harmony import */ var _modules_clear_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/clear-button.js */ "./modules/clear-button.js");
/* harmony import */ var _assets_lista_de_deseos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/lista-de-deseos.png */ "./src/assets/lista-de-deseos.png");
/* harmony import */ var _modules_fonts_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/fonts.js */ "./modules/fonts.js");
/* harmony import */ var _modules_themes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/themes.js */ "./modules/themes.js");










const myTasks = new _modules_tasks_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
myTasks.displayTasks();

const newClear = new _modules_clear_button_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

/* Creates a new link element and added it to the head */
const Image = document.createElement('link');
Image.href = _assets_lista_de_deseos_png__WEBPACK_IMPORTED_MODULE_6__;
Image.rel = 'icon';
document.querySelector('head').appendChild(Image);

/* Charge the theme and the font selected */
window.addEventListener('DOMContentLoaded', _modules_dark_mode_js__WEBPACK_IMPORTED_MODULE_1__.setTheme);
window.addEventListener('DOMContentLoaded', _modules_fonts_js__WEBPACK_IMPORTED_MODULE_7__.setFont);
_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.taskInput.addEventListener('keypress', (event) => {
  /* If the code of the keyword is 13 (enter) then calls the function */
  if (event.charCode === 13 && _modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.taskInput.value !== '') {
    (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
});

_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.enterIcon.addEventListener('click', () => {
  if (_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.taskInput.value !== '') {
    (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
});

_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.clearButton.addEventListener('click', () => {
  newClear.clearButton();
});

_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.darkModeIcon.addEventListener('click', _modules_dark_mode_js__WEBPACK_IMPORTED_MODULE_1__.darkMode);

_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.select.addEventListener('change', _modules_fonts_js__WEBPACK_IMPORTED_MODULE_7__.changeFont);

_modules_elements_js__WEBPACK_IMPORTED_MODULE_2__.selectTheme.addEventListener('change', _modules_themes_js__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/assets/lista-de-deseos.png":
/*!****************************************!*\
  !*** ./src/assets/lista-de-deseos.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bbd97aab5f30d4cd02a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVB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Q0EsOERBQVksMkJBQTJCLDJEQUFRO0FBQy9DO0FBQ0Esd0RBQU0sNEJBQTRCLHlEQUFVO0FBQzVDO0FBQ0EsNkRBQVcsNEJBQTRCLDBEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9jbGVhci1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvZGFyay1tb2RlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL2ZvbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL3RoZW1lcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFza0NvbnN0cnVjdG9yIGZyb20gJy4vY29uc3RydWN0b3IuanMnO1xyXG5pbXBvcnQgeyB0YXNrSW5wdXQgfSBmcm9tICcuL2VsZW1lbnRzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2soKSB7XHJcbiAgLyogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBUYXNrIENsYXNzICovXHJcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrQ29uc3RydWN0b3IodGFza0lucHV0LnZhbHVlKTtcclxuXHJcbiAgdGFzay5zdG9yYWdlKCk7XHJcbiAgdGFzay5jcmVhdGVUYXNrKHRhc2spO1xyXG4gIC8qIEVsaW1pbmF0ZXMgdGhlIGluZm9ybWF0aW9uIGluIHRoZSBpbnB1dCAqL1xyXG4gIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xyXG59XHJcbiIsImltcG9ydCB7IHRhc2tzQ29udGFpbmVyIH0gZnJvbSAnLi9lbGVtZW50cy5qcyc7XHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFza3MuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXIgZXh0ZW5kcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnZvaWQgPSAxO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJCdXR0b24oKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKG9iaikgPT4gb2JqLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHRoaXMudGFza3NbaV0uaW5kZXggPSBpO1xyXG4gICAgfVxyXG4gICAgLyogQWN0dWFsaXplIHRoZSBsb2NhbCBzdG9yYWdlICovXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XHJcbiAgICBjb25zdCBsaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJyk7XHJcbiAgICBsaXMuZm9yRWFjaCgobGkpID0+IHtcclxuICAgICAgdGFza3NDb250YWluZXIucmVtb3ZlQ2hpbGQobGkpO1xyXG4gICAgfSk7XHJcbiAgICBUYXNrLmluZGV4ID0gMDtcclxuICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFza3MuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0NvbnN0cnVjdG9yIGV4dGVuZHMgVGFzayB7XHJcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pIHtcclxuICAgIC8qIFVzZSB0aGUgY29uc3RydWN0b3Igb2YgdGhlIFRhc2tDb25zdHJ1Y3RvciBjbGFzcyAqL1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZGFya01vZGVJY29uIH0gZnJvbSAnLi9lbGVtZW50cy5qcyc7XHJcblxyXG5jb25zdCBhbGwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG5mdW5jdGlvbiBkYXJrTW9kZSgpIHtcclxuICBjb25zdCBkYXJrU3RhdHVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrTW9kZScpKSA6IHsgc3RhdHVzOiAnZGF5JyB9O1xyXG4gIGFsbC5jbGFzc0xpc3QucmVtb3ZlKCdyb3NlLW1vZGUnLCAneWVsbG93LW1vZGUnKTtcclxuICBhbGwuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyay1tb2RlJyk7XHJcbiAgZGFya01vZGVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGlvbicpO1xyXG4gIGlmIChkYXJrU3RhdHVzLnN0YXR1cyA9PT0gJ2RheScpIHtcclxuICAgIC8qIENoYW5nZSB0aGUgc3RhdHVzIHRvIG5pZ2h0IGFuZCB1cGRhdGUgdGhlIGxvY2FsIHN0b3JhZ2UgKi9cclxuICAgIGRhcmtTdGF0dXMuc3RhdHVzID0gJ25pZ2h0JztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrTW9kZScsIEpTT04uc3RyaW5naWZ5KGRhcmtTdGF0dXMpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLyogQ2hhbmdlIHRoZSBzdGF0dXMgdG8gbmlnaHQgYW5kIHVwZGF0ZSB0aGUgbG9jYWwgc3RvcmFnZSAqL1xyXG4gICAgZGFya1N0YXR1cy5zdGF0dXMgPSAnZGF5JztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrTW9kZScsIEpTT04uc3RyaW5naWZ5KGRhcmtTdGF0dXMpKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRoZW1lKCkge1xyXG4gIC8qIEluaXRpYWxpemUgdGhlIG9iamVjdCB3aXRoIHRoZSBpbmZvIGluIHRoZSBsb2NhbCBzdG9yYWdlICovXHJcbiAgY29uc3QgZGFya1N0YXR1cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrTW9kZScpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKSkgOiB7IHN0YXR1czogJ2RheScgfTtcclxuICBpZiAoZGFya1N0YXR1cy5zdGF0dXMgPT09ICdkYXknKSB7XHJcbiAgICBhbGwuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XHJcbiAgICBkYXJrTW9kZUljb24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0aW9uJyk7XHJcbiAgfSBlbHNlIGlmIChkYXJrU3RhdHVzLnN0YXR1cyA9PT0gJ25pZ2h0Jykge1xyXG4gICAgYWxsLmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xyXG4gICAgZGFya01vZGVJY29uLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGlvbicpO1xyXG4gIH0gZWxzZSBpZiAoZGFya1N0YXR1cy5zdGF0dXMgPT09ICdSb3NlJykge1xyXG4gICAgYWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xyXG4gICAgYWxsLmNsYXNzTGlzdC5hZGQoJ3Jvc2UtbW9kZScpO1xyXG4gIH0gZWxzZSBpZiAoZGFya1N0YXR1cy5zdGF0dXMgPT09ICdZZWxsb3cnKSB7XHJcbiAgICBhbGwuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJywgJ3Jvc2UtbW9kZScpO1xyXG4gICAgYWxsLmNsYXNzTGlzdC5hZGQoJ3llbGxvdy1tb2RlJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBkYXJrTW9kZSwgc2V0VGhlbWUgfTsiLCJjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3QtY29udGFpbmVyJyk7XHJcbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWNvbnRhaW5lcicpO1xyXG5jb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpO1xyXG5jb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1idXR0b24nKTtcclxuY29uc3QgZW50ZXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VudGVyLWljb24nKTtcclxuY29uc3QgY2hlY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcbmNvbnN0IGxpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcclxuY29uc3QgZGVzY3JpcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKTtcclxuY29uc3QgZG90c0ljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWVsbGlwc2lzLXZlcnRpY2FsJyk7XHJcbmNvbnN0IHRyYXNoSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtdHJhc2gtY2FuJyk7XHJcbmNvbnN0IGRhcmtNb2RlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWdodC1kYXJrLWljb24nKTtcclxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZvbnQnKTtcclxuY29uc3Qgc2VsZWN0VGhlbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUnKTtcclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgbGlzdENvbnRhaW5lciwgdGFza3NDb250YWluZXIsIHRhc2tJbnB1dCwgY2xlYXJCdXR0b24sXHJcbiAgZW50ZXJJY29uLCBjaGVja3MsIGxpcywgZGVzY3JpcHRpb25zLCBkb3RzSWNvbnMsXHJcbiAgdHJhc2hJY29ucywgZGFya01vZGVJY29uLCBzZWxlY3QsIHJvb3QsXHJcbiAgc2VsZWN0VGhlbWUsXHJcbn07XHJcbiIsImltcG9ydCB7IHJvb3QgfSBmcm9tICcuL2VsZW1lbnRzLmpzJztcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUZvbnQoZXZlbnQpIHtcclxuICBjb25zdCBmb250ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tbWFpbi1mb250JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAvKiBVcGRhdGUgdGhlIGxvY2FsIHN0b3JhZ2UgKi9cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9udCcsIEpTT04uc3RyaW5naWZ5KGZvbnQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Rm9udCgpIHtcclxuICBjb25zdCBmb250ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbnQnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbnQnKSkgOiAneXVqaSBoZW50YWlnYW5hIGFrZWJvbm8nO1xyXG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tbWFpbi1mb250JywgZm9udCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNoYW5nZUZvbnQsIHNldEZvbnQgfTsiLCJpbXBvcnQgeyB0YXNrc0NvbnRhaW5lciwgY2xlYXJCdXR0b24gfSBmcm9tICcuL2VsZW1lbnRzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gIHN0YXRpYyBpbmRleCA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50YXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgOiBbXTtcclxuICAgIC8qIEluaXRpYWxpemUgdGhlIGFycmF5IHdpdGggdGhlIGluZm9ybWF0aW9uIGluIHRoZSBsb2NhbCBzdG9yYWdlICovXHJcbiAgICB0aGlzLmluZGV4ID0gVGFzay5pbmRleDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRhc2sodGFzaykge1xyXG4gICAgLyogQ3JlYXRlIGVsZW1lbnRzICovXHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgY29uc3QgZG90c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuXHJcbiAgICAvKiBBc3NpZ24gY2xhc3NlcyBhbmQgYXR0cmlidXRlcyAqL1xyXG4gICAgbGkuY2xhc3NMaXN0LmFkZCgndGFza3MnLCAncmVtb3ZlJyk7XHJcbiAgICBsaS5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Rpdi1jaGVjaycpO1xyXG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICBwRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgZG90c0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtZWxsaXBzaXMtdmVydGljYWwnKTtcclxuICAgIGRvdHNJY29uLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsICdmYS10cmFzaC1jYW4nLCAnaGlkZScpO1xyXG4gICAgdHJhc2hJY29uLmlkID0gVGFzay5pbmRleDtcclxuXHJcbiAgICAvKiBBcHBlbmQgZWxlbWVudHMgKi9cclxuICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocERlc2NyaXB0aW9uKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChkb3RzSWNvbik7XHJcbiAgICBsaS5hcHBlbmRDaGlsZCh0cmFzaEljb24pO1xyXG4gICAgdGFza3NDb250YWluZXIuaW5zZXJ0QmVmb3JlKGxpLCBjbGVhckJ1dHRvbik7XHJcbiAgICBUYXNrLmluZGV4ICs9IDE7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy50YXNrc1t0YXNrLmluZGV4XS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHBEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdsaW5lLXRocm91Z2gnKTtcclxuICAgICAgICAvKiBBY3R1YWxpemUgdGhlIGxvY2FsIHN0b3JhZ2UgKi9cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50YXNrc1t0YXNrLmluZGV4XS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICBwRGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbGluZS10aHJvdWdoJyk7XHJcbiAgICAgICAgLyogQWN0dWFsaXplIHRoZSBsb2NhbCBzdG9yYWdlICovXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlU3RhdHVzKTtcclxuXHJcbiAgICBkb3RzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZHJhZycpO1xyXG4gICAgfSk7XHJcbiAgICBkb3RzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWcnKTtcclxuICAgIH0pO1xyXG4gICAgZG90c0ljb24uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgICBkb3RzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWcnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNob3dSZW1vdmVFZGl0ID0gKCkgPT4ge1xyXG4gICAgICBkb3RzSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQnKTtcclxuXHJcbiAgICAgIC8qIEEgZnVuY3Rpb24gdG8gZWRpdCB0aGUgdGFza3MgKi9cclxuICAgICAgY29uc3QgZWRpdFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gICAgICAgIC8qIENoYW5nZXMgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBzcGVjaWZpYyB0YXNrICovXHJcbiAgICAgICAgdGhpcy50YXNrc1t0YXNrLmluZGV4XS5kZXNjcmlwdGlvbiA9IHBEZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgICAvKiBBY3R1YWxpemUgdGhlIGxvY2FsIHN0b3JhZ2UgKi9cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvKiBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgdGFza3MgKi9cclxuICAgICAgY29uc3QgcmVtb3ZlVGFzayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIC8qIEVsaW1pbmF0ZXMgdGhlIHNlbGVjdGVkIHRhc2sgKi9cclxuICAgICAgICB0aGlzLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKChvYmopID0+IG9iai5pbmRleCAhPT0gTnVtYmVyKGV2ZW50LnRhcmdldC5pZCkpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgdGhpcy50YXNrc1tpXS5pbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEFjdHVhbGl6ZSB0aGUgbG9jYWwgc3RvcmFnZSAqL1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcclxuICAgICAgICAvKiBSZW1vdmVzIHRoZSBlbGVtZW50IGluIHRoZSBET00gKi9cclxuICAgICAgICBjb25zdCBsaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlJyk7XHJcbiAgICAgICAgbGlzLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICAgICAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZChsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgVGFzay5pbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhpZGVSZW1vdmVFZGl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLyogQ2hlY2sgaWYgdGhlIGxpIGVsZW1lbnQgbm90IGNvbnRhaW5zIHRoZSB0YXJnZXQgZWxlbWVudCAqL1xyXG4gICAgICAgIGlmICghbGkuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgZG90c0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2JhY2tncm91bmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvKiBTYXZlIHRoZSBpbmZvIGluIHRoZSB0ZXh0YXJlYSBldmVyeSB0aW1lIHRoZSB1c2VyIG1vZGlmaWVzIGl0ICovXHJcbiAgICAgIHRyYXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRhc2spO1xyXG4gICAgICBwRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlZGl0VGFzayk7XHJcblxyXG4gICAgICAvKiBMaXN0ZW5lcnMgd2hlbiB0aGUgdXNlciBjbGlja3Mgb3IgdGFwcyAqL1xyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoaWRlUmVtb3ZlRWRpdCk7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoaWRlUmVtb3ZlRWRpdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIEEgY2xpY2sgbGlzdGVuZXIgdG8gc2hvdyB0aGUgcmVtb3ZlIGljb24gYW5kIG1vZGlmeSB0aGUgdGFzayAqL1xyXG4gICAgcERlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1JlbW92ZUVkaXQpO1xyXG4gIH1cclxuXHJcbiAgc3RvcmFnZSgpIHtcclxuICAgIC8qIEFkZCB0aGUgb2JqZWN0IHRvIHRoZSBhcnJheSAqL1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHsgZGVzY3JpcHRpb246IGAke3RoaXMuZGVzY3JpcHRpb259YCwgY29tcGxldGVkOiBmYWxzZSwgaW5kZXg6IHRoaXMuaW5kZXggfSk7XHJcblxyXG4gICAgLyogQ3JlYXRlIHRoZSB0YXNrcyBrZXkgaW4gdGhlIGxvY2FsIHN0b3JhZ2UgKi9cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlUYXNrcygpIHtcclxuICAgIHRoaXMudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZVRhc2sodGFzayk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcm9vdCB9IGZyb20gJy4vZWxlbWVudHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhlbWVNb2RlKGV2ZW50KSB7XHJcbiAgY29uc3QgdGhlbWVTdGF0dXMgPSB7IHN0YXR1czogZXZlbnQudGFyZ2V0LnZhbHVlIH07XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgSlNPTi5zdHJpbmdpZnkodGhlbWVTdGF0dXMpKTtcclxuICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnUm9zZScpIHtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgneWVsbG93LW1vZGUnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LmFkZCgncm9zZS1tb2RlJyk7XHJcbiAgfVxyXG4gIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09ICdZZWxsb3cnKSB7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Jvc2UtbW9kZScpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QuYWRkKCd5ZWxsb3ctbW9kZScpO1xyXG4gIH1cclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9WXVqaStIZW50YWlnYW5hK0FrZWJvbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgLS10ZXh0LWNvbG9yOiBibGFjaztcclxuICAtLXRhc2tzLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLS1saS1hY3RpdmU6IGJsYW5jaGVkYWxtb25kO1xyXG4gIC0tYm94LXNoYWRvdzogZGFya2dyZXk7XHJcbiAgLS1iYWNrZ3JvdW5kLWJ1dHRvbjogZGFya2dyZXk7XHJcbiAgLS1tYWluLWZvbnQ6IHl1amkgaGVudGFpZ2FuYSBha2Vib25vO1xyXG59XHJcblxyXG4uZGFyay1tb2RlIHtcclxuICAtLWJhY2tncm91bmQtY29sb3I6IHJnYig1MywgNTMsIDUzKTtcclxuICAtLXRleHQtY29sb3I6IHdoaXRlO1xyXG4gIC0tdGFza3MtYmFja2dyb3VuZDogcmdiKDQsIDAsIDY2KTtcclxuICAtLWxpLWFjdGl2ZTogYmxhY2s7XHJcbiAgLS1ib3gtc2hhZG93OiByZ2IoMCwgMCwgMCk7XHJcbiAgLS1iYWNrZ3JvdW5kLWJ1dHRvbjogYmxhY2s7XHJcbn1cclxuXHJcbi5yb3NlLW1vZGUge1xyXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2M3NTliZDtcclxuICAtLXRleHQtY29sb3I6IHdoaXRlO1xyXG4gIC0tdGFza3MtYmFja2dyb3VuZDogIzkzMGQyOTtcclxuICAtLWxpLWFjdGl2ZTogIzhhNzQxZDtcclxuICAtLWJveC1zaGFkb3c6ICM2ZTQ4MGU7XHJcbiAgLS1iYWNrZ3JvdW5kLWJ1dHRvbjogI2E0NmIwMztcclxufVxyXG5cclxuLnllbGxvdy1tb2RlIHtcclxuICAtLWJhY2tncm91bmQtY29sb3I6ICM3MzczMDM7XHJcbiAgLS10ZXh0LWNvbG9yOiB3aGl0ZTtcclxuICAtLXRhc2tzLWJhY2tncm91bmQ6IGJyb3duO1xyXG4gIC0tbGktYWN0aXZlOiAjMDAwO1xyXG4gIC0tYm94LXNoYWRvdzogYmxhY2s7XHJcbiAgLS1iYWNrZ3JvdW5kLWJ1dHRvbjogI2QwODcwMjtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCksIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5tYWluIHtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoKTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDUwcHggMDtcclxufVxyXG5cclxuaTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxpbmUtdGhyb3VnaCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbi5hbmltYXRpb24ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBkYXJrLW1vZGU7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uZHJhZyB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG59XHJcblxyXG4jbGlnaHQtZGFyay1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1JTtcclxuICBsZWZ0OiA1JTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZGFyay1tb2RlIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuI3Rhc2tzLWNvbnRhaW5lciB0ZXh0YXJlYSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogNTV2dztcclxuICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpLCBzYW5zLXNlcmlmO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGktYWN0aXZlKTtcclxuICBhbmltYXRpb24tbmFtZTogbGktYmFja2dyb3VuZDtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGktYmFja2dyb3VuZCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuI2xpc3QtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbiN0YXNrcy1jb250YWluZXIge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDQ0M3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2tzLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uZGlzcGxheS1jb250YWluZXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLnNlbGVjdHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuI2ZvbnQgb3B0aW9uIHtcclxuICBwYWRkaW5nOiA1cHggMXB4O1xyXG59XHJcblxyXG4udGFza3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3gtc2hhZG93KTtcclxufVxyXG5cclxuLmRpdi1jaGVjayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbiNjbGVhci1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCksIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJ1dHRvbik7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiN0YXNrIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuI3Rhc2s6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KSwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4jY2xlYXItYnV0dG9uOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgYmFja2dyb3VuZDogY3JpbXNvbjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICN0YXNrcy1jb250YWluZXIgcCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gIH1cclxuXHJcbiAgLmRpc3BsYXktY29udGFpbmVycyBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gIH1cclxuXHJcbiAgI3Rhc2sge1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICB9XHJcblxyXG4gICN0YXNrOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gIH1cclxuXHJcbiAgI2NsZWFyLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJd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Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVl1amkrSGVudGFpZ2FuYStBa2Vib25vJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgLS10ZXh0LWNvbG9yOiBibGFjaztcXHJcXG4gIC0tdGFza3MtYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIC0tbGktYWN0aXZlOiBibGFuY2hlZGFsbW9uZDtcXHJcXG4gIC0tYm94LXNoYWRvdzogZGFya2dyZXk7XFxyXFxuICAtLWJhY2tncm91bmQtYnV0dG9uOiBkYXJrZ3JleTtcXHJcXG4gIC0tbWFpbi1mb250OiB5dWppIGhlbnRhaWdhbmEgYWtlYm9ubztcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmstbW9kZSB7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6IHJnYig1MywgNTMsIDUzKTtcXHJcXG4gIC0tdGV4dC1jb2xvcjogd2hpdGU7XFxyXFxuICAtLXRhc2tzLWJhY2tncm91bmQ6IHJnYig0LCAwLCA2Nik7XFxyXFxuICAtLWxpLWFjdGl2ZTogYmxhY2s7XFxyXFxuICAtLWJveC1zaGFkb3c6IHJnYigwLCAwLCAwKTtcXHJcXG4gIC0tYmFja2dyb3VuZC1idXR0b246IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucm9zZS1tb2RlIHtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2M3NTliZDtcXHJcXG4gIC0tdGV4dC1jb2xvcjogd2hpdGU7XFxyXFxuICAtLXRhc2tzLWJhY2tncm91bmQ6ICM5MzBkMjk7XFxyXFxuICAtLWxpLWFjdGl2ZTogIzhhNzQxZDtcXHJcXG4gIC0tYm94LXNoYWRvdzogIzZlNDgwZTtcXHJcXG4gIC0tYmFja2dyb3VuZC1idXR0b246ICNhNDZiMDM7XFxyXFxufVxcclxcblxcclxcbi55ZWxsb3ctbW9kZSB7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6ICM3MzczMDM7XFxyXFxuICAtLXRleHQtY29sb3I6IHdoaXRlO1xcclxcbiAgLS10YXNrcy1iYWNrZ3JvdW5kOiBicm93bjtcXHJcXG4gIC0tbGktYWN0aXZlOiAjMDAwO1xcclxcbiAgLS1ib3gtc2hhZG93OiBibGFjaztcXHJcXG4gIC0tYmFja2dyb3VuZC1idXR0b246ICNkMDg3MDI7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogNTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5pOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUtdGhyb3VnaCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmFuaW1hdGlvbiB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogZGFyay1tb2RlO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5kcmFnIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlnaHQtZGFyay1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNSU7XFxyXFxuICBsZWZ0OiA1JTtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBkYXJrLW1vZGUge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1jb250YWluZXIgdGV4dGFyZWEge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHdpZHRoOiA1NXZ3O1xcclxcbiAgbWF4LXdpZHRoOiAzNDBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpLCBzYW5zLXNlcmlmO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saS1hY3RpdmUpO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGxpLWJhY2tncm91bmQ7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsaS1iYWNrZ3JvdW5kIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNsaXN0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3MtY29udGFpbmVyIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXgtd2lkdGg6IDQ0M3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFza3MtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWNvbnRhaW5lcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNmb250IG9wdGlvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHggMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi5kaXYtY2hlY2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYnV0dG9uKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzayB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCksIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2s6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBjcmltc29uO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAjdGFza3MtY29udGFpbmVyIHAsXFxyXFxuICB0ZXh0YXJlYSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGlzcGxheS1jb250YWluZXJzIGxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN0YXNrIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICN0YXNrOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY2xlYXItYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBkYXJrTW9kZSwgc2V0VGhlbWUgfSBmcm9tICcuLi9tb2R1bGVzL2RhcmstbW9kZS5qcyc7XHJcbmltcG9ydCB7XHJcbiAgdGFza0lucHV0LCBlbnRlckljb24sIGNsZWFyQnV0dG9uLCBkYXJrTW9kZUljb24sIHNlbGVjdCxcclxuICBzZWxlY3RUaGVtZSxcclxufSBmcm9tICcuLi9tb2R1bGVzL2VsZW1lbnRzLmpzJztcclxuaW1wb3J0IGFkZFRhc2sgZnJvbSAnLi4vbW9kdWxlcy9hZGRUYXNrLmpzJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi4vbW9kdWxlcy90YXNrcy5qcyc7XHJcbmltcG9ydCBDbGVhciBmcm9tICcuLi9tb2R1bGVzL2NsZWFyLWJ1dHRvbi5qcyc7XHJcbmltcG9ydCB3ZWJJY29uIGZyb20gJy4vYXNzZXRzL2xpc3RhLWRlLWRlc2Vvcy5wbmcnO1xyXG5pbXBvcnQgeyBjaGFuZ2VGb250LCBzZXRGb250IH0gZnJvbSAnLi4vbW9kdWxlcy9mb250cy5qcyc7XHJcbmltcG9ydCB0aGVtZU1vZGUgZnJvbSAnLi4vbW9kdWxlcy90aGVtZXMuanMnO1xyXG5cclxuY29uc3QgbXlUYXNrcyA9IG5ldyBUYXNrKCk7XHJcbm15VGFza3MuZGlzcGxheVRhc2tzKCk7XHJcblxyXG5jb25zdCBuZXdDbGVhciA9IG5ldyBDbGVhcigpO1xyXG5cclxuLyogQ3JlYXRlcyBhIG5ldyBsaW5rIGVsZW1lbnQgYW5kIGFkZGVkIGl0IHRvIHRoZSBoZWFkICovXHJcbmNvbnN0IEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG5JbWFnZS5ocmVmID0gd2ViSWNvbjtcclxuSW1hZ2UucmVsID0gJ2ljb24nO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoSW1hZ2UpO1xyXG5cclxuLyogQ2hhcmdlIHRoZSB0aGVtZSBhbmQgdGhlIGZvbnQgc2VsZWN0ZWQgKi9cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzZXRUaGVtZSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2V0Rm9udCk7XHJcbnRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xyXG4gIC8qIElmIHRoZSBjb2RlIG9mIHRoZSBrZXl3b3JkIGlzIDEzIChlbnRlcikgdGhlbiBjYWxscyB0aGUgZnVuY3Rpb24gKi9cclxuICBpZiAoZXZlbnQuY2hhckNvZGUgPT09IDEzICYmIHRhc2tJbnB1dC52YWx1ZSAhPT0gJycpIHtcclxuICAgIGFkZFRhc2soKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZW50ZXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGlmICh0YXNrSW5wdXQudmFsdWUgIT09ICcnKSB7XHJcbiAgICBhZGRUYXNrKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG5ld0NsZWFyLmNsZWFyQnV0dG9uKCk7XHJcbn0pO1xyXG5cclxuZGFya01vZGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGFya01vZGUpO1xyXG5cclxuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUZvbnQpO1xyXG5cclxuc2VsZWN0VGhlbWUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhlbWVNb2RlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=