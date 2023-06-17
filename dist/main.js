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
    --background-color: #e065d4;
    --text-color: white;
    --tasks-background: #31aed3;
    --li-active: #8a741d;
    --box-shadow: #6e480e;
    --background-button: #b08e6b;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAMA;IACI,wBAAwB;IACxB,mBAAmB;IACnB,wBAAwB;IACxB,2BAA2B;IAC3B,sBAAsB;IACtB,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI,mCAAmC;IACnC,mBAAmB;IACnB,iCAAiC;IACjC,kBAAkB;IAClB,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,2BAA2B;IAC3B,oBAAoB;IACpB,qBAAqB;IACrB,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,yBAAyB;IACzB,iBAAiB;IACjB,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;IACzC,yCAAyC;IACzC,wBAAwB;IACxB,gCAAgC;AACpC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;IACzB,sCAAsC;IACtC,wBAAwB;AAC5B;;AAEA;IACI,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,eAAe;AACnB;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,yCAAyC;IACzC,cAAc;IACd,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,6BAA6B;IAC7B,sCAAsC;IACtC,wBAAwB;AAC5B;;AAEA;IACI;QACI,YAAY;IAChB;;IAEA;QACI,UAAU;IACd;AACJ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,yCAAyC;IACzC,UAAU;IACV,gBAAgB;IAChB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,yCAAyC;IACzC,gBAAgB;IAChB,0CAA0C;IAC1C,gCAAgC;AACpC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,cAAc;IACd,UAAU;IACV,yCAAyC;IACzC,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,yCAAyC;IACzC,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI;;QAEI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Yuji+Hentaigana+Akebono&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');\r\n\r\n:root {\r\n    --background-color: #fff;\r\n    --text-color: black;\r\n    --tasks-background: #fff;\r\n    --li-active: blanchedalmond;\r\n    --box-shadow: darkgrey;\r\n    --background-button: darkgrey;\r\n    --main-font: yuji hentaigana akebono;\r\n}\r\n\r\n.dark-mode {\r\n    --background-color: rgb(53, 53, 53);\r\n    --text-color: white;\r\n    --tasks-background: rgb(4, 0, 66);\r\n    --li-active: black;\r\n    --box-shadow: rgb(0, 0, 0);\r\n    --background-button: black;\r\n}\r\n\r\n.rose-mode {\r\n    --background-color: #e065d4;\r\n    --text-color: white;\r\n    --tasks-background: #31aed3;\r\n    --li-active: #8a741d;\r\n    --box-shadow: #6e480e;\r\n    --background-button: #b08e6b;\r\n}\r\n\r\n.yellow-mode {\r\n    --background-color: #737303;\r\n    --text-color: white;\r\n    --tasks-background: brown;\r\n    --li-active: #000;\r\n    --box-shadow: black;\r\n    --background-button: #d08702;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: var(--text-color);\r\n    font-style: italic;\r\n}\r\n\r\nbody {\r\n    font-family: var(--main-font), sans-serif;\r\n    background-color: var(--background-color);\r\n    color: var(--text-color);\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\nmain {\r\n    min-height: calc(100vh);\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin: 50px 0;\r\n}\r\n\r\ni:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.line-through {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.animation {\r\n    animation-name: dark-mode;\r\n    animation-timing-function: ease-in-out;\r\n    animation-duration: 0.5s;\r\n}\r\n\r\n.drag {\r\n    opacity: 1;\r\n    border: 1px solid blue;\r\n}\r\n\r\n#light-dark-icon {\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 5%;\r\n    font-size: 30px;\r\n}\r\n\r\n@keyframes dark-mode {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n#tasks-container textarea {\r\n    font-weight: 600;\r\n    width: 55vw;\r\n    max-width: 340px;\r\n    font-family: var(--main-font), sans-serif;\r\n    overflow: auto;\r\n    resize: none;\r\n    outline: none;\r\n    border: none;\r\n    padding-top: 15px;\r\n    background: none;\r\n}\r\n\r\n.background {\r\n    background-color: var(--li-active);\r\n    animation-name: li-background;\r\n    animation-timing-function: ease-in-out;\r\n    animation-duration: 0.5s;\r\n}\r\n\r\n@keyframes li-background {\r\n    from {\r\n        opacity: 0.5;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n#list-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n#tasks-container {\r\n    list-style: none;\r\n    box-shadow: 0 0 5px 3px var(--box-shadow);\r\n    width: 90%;\r\n    max-width: 443px;\r\n    background-color: var(--tasks-background);\r\n}\r\n\r\n.display-containers {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 30px;\r\n    gap: 10px;\r\n    padding: 0 20px;\r\n}\r\n\r\n.selects {\r\n    background-color: var(--background-color);\r\n    border-radius: 5px;\r\n}\r\n\r\n#font option {\r\n    padding: 5px 1px;\r\n}\r\n\r\n.tasks {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 10px 20px;\r\n    border-bottom: 1px solid var(--box-shadow);\r\n}\r\n\r\n.div-check {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n\r\n#clear-button {\r\n    width: 100%;\r\n    padding: 20px 20px;\r\n    border: none;\r\n    font-family: var(--main-font), sans-serif;\r\n    font-weight: 600;\r\n    background-color: var(--background-button);\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n#task {\r\n    border: none;\r\n    outline: none;\r\n    padding: 5px 0;\r\n    width: 90%;\r\n    font-family: var(--main-font), sans-serif;\r\n    font-weight: 600;\r\n    background: none;\r\n}\r\n\r\n#task::placeholder {\r\n    font-family: var(--main-font), sans-serif;\r\n    font-style: italic;\r\n    font-weight: 600;\r\n    font-size: 1.2em;\r\n}\r\n\r\n#clear-button:hover {\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n    background: crimson;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    #tasks-container p,\r\n    textarea {\r\n        font-size: 1.3em;\r\n    }\r\n\r\n    .display-containers label {\r\n        font-size: 1.3em;\r\n    }\r\n\r\n    #task {\r\n        font-size: 1.3em;\r\n    }\r\n\r\n    #task::placeholder {\r\n        font-size: 1.3em;\r\n    }\r\n\r\n    #clear-button {\r\n        font-size: 1.2em;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVB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O0FBQ0Q7QUFDQSw4REFBWSwyQkFBMkIsMkRBQVE7QUFDL0M7QUFDQSx3REFBTSw0QkFBNEIseURBQVU7QUFDNUM7QUFDQSw2REFBVyw0QkFBNEIsMERBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL2NsZWFyLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy9kYXJrLW1vZGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvZm9udHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvdGhlbWVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrQ29uc3RydWN0b3IgZnJvbSAnLi9jb25zdHJ1Y3Rvci5qcyc7XHJcbmltcG9ydCB7IHRhc2tJbnB1dCB9IGZyb20gJy4vZWxlbWVudHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFzaygpIHtcclxuICAvKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIFRhc2sgQ2xhc3MgKi9cclxuICBjb25zdCB0YXNrID0gbmV3IFRhc2tDb25zdHJ1Y3Rvcih0YXNrSW5wdXQudmFsdWUpO1xyXG5cclxuICB0YXNrLnN0b3JhZ2UoKTtcclxuICB0YXNrLmNyZWF0ZVRhc2sodGFzayk7XHJcbiAgLyogRWxpbWluYXRlcyB0aGUgaW5mb3JtYXRpb24gaW4gdGhlIGlucHV0ICovXHJcbiAgdGFza0lucHV0LnZhbHVlID0gJyc7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFza3NDb250YWluZXIgfSBmcm9tICcuL2VsZW1lbnRzLmpzJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrcy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGVhciBleHRlbmRzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudm9pZCA9IDE7XHJcbiAgfVxyXG5cclxuICBjbGVhckJ1dHRvbigpIHtcclxuICAgIHRoaXMudGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigob2JqKSA9PiBvYmouY29tcGxldGVkID09PSBmYWxzZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdGhpcy50YXNrc1tpXS5pbmRleCA9IGk7XHJcbiAgICB9XHJcbiAgICAvKiBBY3R1YWxpemUgdGhlIGxvY2FsIHN0b3JhZ2UgKi9cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcclxuICAgIGNvbnN0IGxpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcclxuICAgIGxpcy5mb3JFYWNoKChsaSkgPT4ge1xyXG4gICAgICB0YXNrc0NvbnRhaW5lci5yZW1vdmVDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuICAgIFRhc2suaW5kZXggPSAwO1xyXG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrcy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrQ29uc3RydWN0b3IgZXh0ZW5kcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbikge1xyXG4gICAgLyogVXNlIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgVGFza0NvbnN0cnVjdG9yIGNsYXNzICovXHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBkYXJrTW9kZUljb24gfSBmcm9tICcuL2VsZW1lbnRzLmpzJztcclxuXHJcbmNvbnN0IGFsbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIGRhcmtNb2RlKCkge1xyXG4gIGNvbnN0IGRhcmtTdGF0dXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJykpIDogeyBzdGF0dXM6ICdkYXknIH07XHJcbiAgYWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3Jvc2UtbW9kZScsICd5ZWxsb3ctbW9kZScpO1xyXG4gIGFsbC5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUnKTtcclxuICBkYXJrTW9kZUljb24uY2xhc3NMaXN0LnRvZ2dsZSgnYW5pbWF0aW9uJyk7XHJcbiAgaWYgKGRhcmtTdGF0dXMuc3RhdHVzID09PSAnZGF5Jykge1xyXG4gICAgLyogQ2hhbmdlIHRoZSBzdGF0dXMgdG8gbmlnaHQgYW5kIHVwZGF0ZSB0aGUgbG9jYWwgc3RvcmFnZSAqL1xyXG4gICAgZGFya1N0YXR1cy5zdGF0dXMgPSAnbmlnaHQnO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgSlNPTi5zdHJpbmdpZnkoZGFya1N0YXR1cykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvKiBDaGFuZ2UgdGhlIHN0YXR1cyB0byBuaWdodCBhbmQgdXBkYXRlIHRoZSBsb2NhbCBzdG9yYWdlICovXHJcbiAgICBkYXJrU3RhdHVzLnN0YXR1cyA9ICdkYXknO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgSlNPTi5zdHJpbmdpZnkoZGFya1N0YXR1cykpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0VGhlbWUoKSB7XHJcbiAgLyogSW5pdGlhbGl6ZSB0aGUgb2JqZWN0IHdpdGggdGhlIGluZm8gaW4gdGhlIGxvY2FsIHN0b3JhZ2UgKi9cclxuICBjb25zdCBkYXJrU3RhdHVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtNb2RlJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrTW9kZScpKSA6IHsgc3RhdHVzOiAnZGF5JyB9O1xyXG4gIGlmIChkYXJrU3RhdHVzLnN0YXR1cyA9PT0gJ2RheScpIHtcclxuICAgIGFsbC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnKTtcclxuICAgIGRhcmtNb2RlSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRpb24nKTtcclxuICB9IGVsc2UgaWYgKGRhcmtTdGF0dXMuc3RhdHVzID09PSAnbmlnaHQnKSB7XHJcbiAgICBhbGwuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XHJcbiAgICBkYXJrTW9kZUljb24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW9uJyk7XHJcbiAgfSBlbHNlIGlmIChkYXJrU3RhdHVzLnN0YXR1cyA9PT0gJ1Jvc2UnKSB7XHJcbiAgICBhbGwuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XHJcbiAgICBhbGwuY2xhc3NMaXN0LmFkZCgncm9zZS1tb2RlJyk7XHJcbiAgfSBlbHNlIGlmIChkYXJrU3RhdHVzLnN0YXR1cyA9PT0gJ1llbGxvdycpIHtcclxuICAgIGFsbC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrLW1vZGUnLCAncm9zZS1tb2RlJyk7XHJcbiAgICBhbGwuY2xhc3NMaXN0LmFkZCgneWVsbG93LW1vZGUnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGRhcmtNb2RlLCBzZXRUaGVtZSB9OyIsImNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdC1jb250YWluZXInKTtcclxuY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MtY29udGFpbmVyJyk7XHJcbmNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrJyk7XHJcbmNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWJ1dHRvbicpO1xyXG5jb25zdCBlbnRlckljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXItaWNvbicpO1xyXG5jb25zdCBjaGVja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuY29uc3QgbGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZScpO1xyXG5jb25zdCBkZXNjcmlwdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xyXG5jb25zdCBkb3RzSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmEtZWxsaXBzaXMtdmVydGljYWwnKTtcclxuY29uc3QgdHJhc2hJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYS10cmFzaC1jYW4nKTtcclxuY29uc3QgZGFya01vZGVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0LWRhcmstaWNvbicpO1xyXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9udCcpO1xyXG5jb25zdCBzZWxlY3RUaGVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZScpO1xyXG5jb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cclxuZXhwb3J0IHtcclxuICBsaXN0Q29udGFpbmVyLCB0YXNrc0NvbnRhaW5lciwgdGFza0lucHV0LCBjbGVhckJ1dHRvbixcclxuICBlbnRlckljb24sIGNoZWNrcywgbGlzLCBkZXNjcmlwdGlvbnMsIGRvdHNJY29ucyxcclxuICB0cmFzaEljb25zLCBkYXJrTW9kZUljb24sIHNlbGVjdCwgcm9vdCxcclxuICBzZWxlY3RUaGVtZSxcclxufTtcclxuIiwiaW1wb3J0IHsgcm9vdCB9IGZyb20gJy4vZWxlbWVudHMuanMnO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlRm9udChldmVudCkge1xyXG4gIGNvbnN0IGZvbnQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tYWluLWZvbnQnLCBldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIC8qIFVwZGF0ZSB0aGUgbG9jYWwgc3RvcmFnZSAqL1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb250JywgSlNPTi5zdHJpbmdpZnkoZm9udCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRGb250KCkge1xyXG4gIGNvbnN0IGZvbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9udCcpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9udCcpKSA6ICd5dWppIGhlbnRhaWdhbmEgYWtlYm9ubyc7XHJcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tYWluLWZvbnQnLCBmb250KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY2hhbmdlRm9udCwgc2V0Rm9udCB9OyIsImltcG9ydCB7IHRhc2tzQ29udGFpbmVyLCBjbGVhckJ1dHRvbiB9IGZyb20gJy4vZWxlbWVudHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgc3RhdGljIGluZGV4ID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRhc2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSA6IFtdO1xyXG4gICAgLyogSW5pdGlhbGl6ZSB0aGUgYXJyYXkgd2l0aCB0aGUgaW5mb3JtYXRpb24gaW4gdGhlIGxvY2FsIHN0b3JhZ2UgKi9cclxuICAgIHRoaXMuaW5kZXggPSBUYXNrLmluZGV4O1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGFzayh0YXNrKSB7XHJcbiAgICAvKiBDcmVhdGUgZWxlbWVudHMgKi9cclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IHBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBjb25zdCBkb3RzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG5cclxuICAgIC8qIEFzc2lnbiBjbGFzc2VzIGFuZCBhdHRyaWJ1dGVzICovXHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCd0YXNrcycsICdyZW1vdmUnKTtcclxuICAgIGxpLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZGl2LWNoZWNrJyk7XHJcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIHBEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBkb3RzSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcpO1xyXG4gICAgZG90c0ljb24uZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1yZWd1bGFyJywgJ2ZhLXRyYXNoLWNhbicsICdoaWRlJyk7XHJcbiAgICB0cmFzaEljb24uaWQgPSBUYXNrLmluZGV4O1xyXG5cclxuICAgIC8qIEFwcGVuZCBlbGVtZW50cyAqL1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwRGVzY3JpcHRpb24pO1xyXG4gICAgbGkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRvdHNJY29uKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKHRyYXNoSWNvbik7XHJcbiAgICB0YXNrc0NvbnRhaW5lci5pbnNlcnRCZWZvcmUobGksIGNsZWFyQnV0dG9uKTtcclxuICAgIFRhc2suaW5kZXggKz0gMTtcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLnRhc2tzW3Rhc2suaW5kZXhdLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgcERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2xpbmUtdGhyb3VnaCcpO1xyXG4gICAgICAgIC8qIEFjdHVhbGl6ZSB0aGUgbG9jYWwgc3RvcmFnZSAqL1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRhc2tzW3Rhc2suaW5kZXhdLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHBEZXNjcmlwdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdsaW5lLXRocm91Z2gnKTtcclxuICAgICAgICAvKiBBY3R1YWxpemUgdGhlIGxvY2FsIHN0b3JhZ2UgKi9cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VTdGF0dXMpO1xyXG5cclxuICAgIGRvdHNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdkcmFnJyk7XHJcbiAgICB9KTtcclxuICAgIGRvdHNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZycpO1xyXG4gICAgfSk7XHJcbiAgICBkb3RzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICB9KTtcclxuICAgIGRvdHNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1JlbW92ZUVkaXQgPSAoKSA9PiB7XHJcbiAgICAgIGRvdHNJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgdHJhc2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgLyogQSBmdW5jdGlvbiB0byBlZGl0IHRoZSB0YXNrcyAqL1xyXG4gICAgICBjb25zdCBlZGl0VGFzayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XHJcbiAgICAgICAgLyogQ2hhbmdlcyB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIHNwZWNpZmljIHRhc2sgKi9cclxuICAgICAgICB0aGlzLnRhc2tzW3Rhc2suaW5kZXhdLmRlc2NyaXB0aW9uID0gcERlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgICAgIC8qIEFjdHVhbGl6ZSB0aGUgbG9jYWwgc3RvcmFnZSAqL1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8qIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSB0YXNrcyAqL1xyXG4gICAgICBjb25zdCByZW1vdmVUYXNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLyogRWxpbWluYXRlcyB0aGUgc2VsZWN0ZWQgdGFzayAqL1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKG9iaikgPT4gb2JqLmluZGV4ICE9PSBOdW1iZXIoZXZlbnQudGFyZ2V0LmlkKSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnRhc2tzW2ldLmluZGV4ID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogQWN0dWFsaXplIHRoZSBsb2NhbCBzdG9yYWdlICovXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xyXG4gICAgICAgIC8qIFJlbW92ZXMgdGhlIGVsZW1lbnQgaW4gdGhlIERPTSAqL1xyXG4gICAgICAgIGNvbnN0IGxpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUnKTtcclxuICAgICAgICBsaXMuZm9yRWFjaCgobGkpID0+IHtcclxuICAgICAgICAgIHRhc2tzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGxpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBUYXNrLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGlkZVJlbW92ZUVkaXQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAvKiBDaGVjayBpZiB0aGUgbGkgZWxlbWVudCBub3QgY29udGFpbnMgdGhlIHRhcmdldCBlbGVtZW50ICovXHJcbiAgICAgICAgaWYgKCFsaS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICBkb3RzSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYmFja2dyb3VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8qIFNhdmUgdGhlIGluZm8gaW4gdGhlIHRleHRhcmVhIGV2ZXJ5IHRpbWUgdGhlIHVzZXIgbW9kaWZpZXMgaXQgKi9cclxuICAgICAgdHJhc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVGFzayk7XHJcbiAgICAgIHBEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGVkaXRUYXNrKTtcclxuXHJcbiAgICAgIC8qIExpc3RlbmVycyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvciB0YXBzICovXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhpZGVSZW1vdmVFZGl0KTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhpZGVSZW1vdmVFZGl0KTtcclxuICAgIH07XHJcblxyXG4gICAgLyogQSBjbGljayBsaXN0ZW5lciB0byBzaG93IHRoZSByZW1vdmUgaWNvbiBhbmQgbW9kaWZ5IHRoZSB0YXNrICovXHJcbiAgICBwRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UmVtb3ZlRWRpdCk7XHJcbiAgfVxyXG5cclxuICBzdG9yYWdlKCkge1xyXG4gICAgLyogQWRkIHRoZSBvYmplY3QgdG8gdGhlIGFycmF5ICovXHJcbiAgICB0aGlzLnRhc2tzLnB1c2goeyBkZXNjcmlwdGlvbjogYCR7dGhpcy5kZXNjcmlwdGlvbn1gLCBjb21wbGV0ZWQ6IGZhbHNlLCBpbmRleDogdGhpcy5pbmRleCB9KTtcclxuXHJcbiAgICAvKiBDcmVhdGUgdGhlIHRhc2tzIGtleSBpbiB0aGUgbG9jYWwgc3RvcmFnZSAqL1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVRhc2tzKCkge1xyXG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlVGFzayh0YXNrKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyByb290IH0gZnJvbSAnLi9lbGVtZW50cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aGVtZU1vZGUoZXZlbnQpIHtcclxuICBjb25zdCB0aGVtZVN0YXR1cyA9IHsgc3RhdHVzOiBldmVudC50YXJnZXQudmFsdWUgfTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya01vZGUnLCBKU09OLnN0cmluZ2lmeSh0aGVtZVN0YXR1cykpO1xyXG4gIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09ICdSb3NlJykge1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd5ZWxsb3ctbW9kZScpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QuYWRkKCdyb3NlLW1vZGUnKTtcclxuICB9XHJcbiAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ1llbGxvdycpIHtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgncm9zZS1tb2RlJyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5hZGQoJ3llbGxvdy1tb2RlJyk7XHJcbiAgfVxyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ZdWppK0hlbnRhaWdhbmErQWtlYm9ubyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLS10ZXh0LWNvbG9yOiBibGFjaztcclxuICAgIC0tdGFza3MtYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC0tbGktYWN0aXZlOiBibGFuY2hlZGFsbW9uZDtcclxuICAgIC0tYm94LXNoYWRvdzogZGFya2dyZXk7XHJcbiAgICAtLWJhY2tncm91bmQtYnV0dG9uOiBkYXJrZ3JleTtcclxuICAgIC0tbWFpbi1mb250OiB5dWppIGhlbnRhaWdhbmEgYWtlYm9ubztcclxufVxyXG5cclxuLmRhcmstbW9kZSB7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYig1MywgNTMsIDUzKTtcclxuICAgIC0tdGV4dC1jb2xvcjogd2hpdGU7XHJcbiAgICAtLXRhc2tzLWJhY2tncm91bmQ6IHJnYig0LCAwLCA2Nik7XHJcbiAgICAtLWxpLWFjdGl2ZTogYmxhY2s7XHJcbiAgICAtLWJveC1zaGFkb3c6IHJnYigwLCAwLCAwKTtcclxuICAgIC0tYmFja2dyb3VuZC1idXR0b246IGJsYWNrO1xyXG59XHJcblxyXG4ucm9zZS1tb2RlIHtcclxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2UwNjVkNDtcclxuICAgIC0tdGV4dC1jb2xvcjogd2hpdGU7XHJcbiAgICAtLXRhc2tzLWJhY2tncm91bmQ6ICMzMWFlZDM7XHJcbiAgICAtLWxpLWFjdGl2ZTogIzhhNzQxZDtcclxuICAgIC0tYm94LXNoYWRvdzogIzZlNDgwZTtcclxuICAgIC0tYmFja2dyb3VuZC1idXR0b246ICNiMDhlNmI7XHJcbn1cclxuXHJcbi55ZWxsb3ctbW9kZSB7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICM3MzczMDM7XHJcbiAgICAtLXRleHQtY29sb3I6IHdoaXRlO1xyXG4gICAgLS10YXNrcy1iYWNrZ3JvdW5kOiBicm93bjtcclxuICAgIC0tbGktYWN0aXZlOiAjMDAwO1xyXG4gICAgLS1ib3gtc2hhZG93OiBibGFjaztcclxuICAgIC0tYmFja2dyb3VuZC1idXR0b246ICNkMDg3MDI7XHJcbn1cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KSwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCk7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNTBweCAwO1xyXG59XHJcblxyXG5pOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmxpbmUtdGhyb3VnaCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLmFuaW1hdGlvbiB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZGFyay1tb2RlO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5kcmFnIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG59XHJcblxyXG4jbGlnaHQtZGFyay1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBkYXJrLW1vZGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuI3Rhc2tzLWNvbnRhaW5lciB0ZXh0YXJlYSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDU1dnc7XHJcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCksIHNhbnMtc2VyaWY7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpLWFjdGl2ZSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbGktYmFja2dyb3VuZDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxpLWJhY2tncm91bmQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4jbGlzdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuI3Rhc2tzLWNvbnRhaW5lciB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2tzLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG4uZGlzcGxheS1jb250YWluZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jZm9udCBvcHRpb24ge1xyXG4gICAgcGFkZGluZzogNXB4IDFweDtcclxufVxyXG5cclxuLnRhc2tzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJveC1zaGFkb3cpO1xyXG59XHJcblxyXG4uZGl2LWNoZWNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbiNjbGVhci1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWJ1dHRvbik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3Rhc2sge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbiN0YXNrOjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4jY2xlYXItYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgYmFja2dyb3VuZDogY3JpbXNvbjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3Rhc2tzLWNvbnRhaW5lciBwLFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRpc3BsYXktY29udGFpbmVycyBsYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIH1cclxuXHJcbiAgICAjdGFzayB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIH1cclxuXHJcbiAgICAjdGFzazo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcblxyXG4gICAgI2NsZWFyLWJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUNBQXlDO0lBQ3pDLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QixzQ0FBc0M7SUFDdEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7O1FBRUksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9WXVqaStIZW50YWlnYW5hK0FrZWJvbm8mZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiBibGFjaztcXHJcXG4gICAgLS10YXNrcy1iYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAtLWxpLWFjdGl2ZTogYmxhbmNoZWRhbG1vbmQ7XFxyXFxuICAgIC0tYm94LXNoYWRvdzogZGFya2dyZXk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1idXR0b246IGRhcmtncmV5O1xcclxcbiAgICAtLW1haW4tZm9udDogeXVqaSBoZW50YWlnYW5hIGFrZWJvbm87XFxyXFxufVxcclxcblxcclxcbi5kYXJrLW1vZGUge1xcclxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYig1MywgNTMsIDUzKTtcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgLS10YXNrcy1iYWNrZ3JvdW5kOiByZ2IoNCwgMCwgNjYpO1xcclxcbiAgICAtLWxpLWFjdGl2ZTogYmxhY2s7XFxyXFxuICAgIC0tYm94LXNoYWRvdzogcmdiKDAsIDAsIDApO1xcclxcbiAgICAtLWJhY2tncm91bmQtYnV0dG9uOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnJvc2UtbW9kZSB7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2UwNjVkNDtcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgLS10YXNrcy1iYWNrZ3JvdW5kOiAjMzFhZWQzO1xcclxcbiAgICAtLWxpLWFjdGl2ZTogIzhhNzQxZDtcXHJcXG4gICAgLS1ib3gtc2hhZG93OiAjNmU0ODBlO1xcclxcbiAgICAtLWJhY2tncm91bmQtYnV0dG9uOiAjYjA4ZTZiO1xcclxcbn1cXHJcXG5cXHJcXG4ueWVsbG93LW1vZGUge1xcclxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICM3MzczMDM7XFxyXFxuICAgIC0tdGV4dC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC0tdGFza3MtYmFja2dyb3VuZDogYnJvd247XFxyXFxuICAgIC0tbGktYWN0aXZlOiAjMDAwO1xcclxcbiAgICAtLWJveC1zaGFkb3c6IGJsYWNrO1xcclxcbiAgICAtLWJhY2tncm91bmQtYnV0dG9uOiAjZDA4NzAyO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmgpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IDA7XFxyXFxufVxcclxcblxcclxcbmk6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmUtdGhyb3VnaCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uYW5pbWF0aW9uIHtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGRhcmstbW9kZTtcXHJcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLmRyYWcge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlnaHQtZGFyay1pY29uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUlO1xcclxcbiAgICBsZWZ0OiA1JTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGRhcmstbW9kZSB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1jb250YWluZXIgdGV4dGFyZWEge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB3aWR0aDogNTV2dztcXHJcXG4gICAgbWF4LXdpZHRoOiAzNDBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCksIHNhbnMtc2VyaWY7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGktYWN0aXZlKTtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxpLWJhY2tncm91bmQ7XFxyXFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbGktYmFja2dyb3VuZCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI2xpc3QtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcy1jb250YWluZXIge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFza3MtYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWNvbnRhaW5lcnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZvbnQgb3B0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogNXB4IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3gtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdi1jaGVjayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCksIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtYnV0dG9uKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiN0YXNrIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCksIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiN0YXNrOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1idXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgICN0YXNrcy1jb250YWluZXIgcCxcXHJcXG4gICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZGlzcGxheS1jb250YWluZXJzIGxhYmVsIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3Rhc2sge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdGFzazo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjY2xlYXItYnV0dG9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBkYXJrTW9kZSwgc2V0VGhlbWUgfSBmcm9tICcuLi9tb2R1bGVzL2RhcmstbW9kZS5qcyc7XHJcbmltcG9ydCB7XHJcbiAgdGFza0lucHV0LCBlbnRlckljb24sIGNsZWFyQnV0dG9uLCBkYXJrTW9kZUljb24sIHNlbGVjdCxcclxuICBzZWxlY3RUaGVtZSxcclxufSBmcm9tICcuLi9tb2R1bGVzL2VsZW1lbnRzLmpzJztcclxuaW1wb3J0IGFkZFRhc2sgZnJvbSAnLi4vbW9kdWxlcy9hZGRUYXNrLmpzJztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi4vbW9kdWxlcy90YXNrcy5qcyc7XHJcbmltcG9ydCBDbGVhciBmcm9tICcuLi9tb2R1bGVzL2NsZWFyLWJ1dHRvbi5qcyc7XHJcbmltcG9ydCB3ZWJJY29uIGZyb20gJy4vYXNzZXRzL2xpc3RhLWRlLWRlc2Vvcy5wbmcnO1xyXG5pbXBvcnQgeyBjaGFuZ2VGb250LCBzZXRGb250IH0gZnJvbSAnLi4vbW9kdWxlcy9mb250cy5qcyc7XHJcbmltcG9ydCB0aGVtZU1vZGUgZnJvbSAnLi4vbW9kdWxlcy90aGVtZXMuanMnO1xyXG5cclxuY29uc3QgbXlUYXNrcyA9IG5ldyBUYXNrKCk7XHJcbm15VGFza3MuZGlzcGxheVRhc2tzKCk7XHJcblxyXG5jb25zdCBuZXdDbGVhciA9IG5ldyBDbGVhcigpO1xyXG5cclxuLyogQ3JlYXRlcyBhIG5ldyBsaW5rIGVsZW1lbnQgYW5kIGFkZGVkIGl0IHRvIHRoZSBoZWFkICovXHJcbmNvbnN0IEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG5JbWFnZS5ocmVmID0gd2ViSWNvbjtcclxuSW1hZ2UucmVsID0gJ2ljb24nO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQoSW1hZ2UpO1xyXG5cclxuLyogQ2hhcmdlIHRoZSB0aGVtZSBhbmQgdGhlIGZvbnQgc2VsZWN0ZWQgKi9cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzZXRUaGVtZSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2V0Rm9udCk7XHJcbnRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xyXG4gIC8qIElmIHRoZSBjb2RlIG9mIHRoZSBrZXl3b3JkIGlzIDEzIChlbnRlcikgdGhlbiBjYWxscyB0aGUgZnVuY3Rpb24gKi9cclxuICBpZiAoZXZlbnQuY2hhckNvZGUgPT09IDEzICYmIHRhc2tJbnB1dC52YWx1ZSAhPT0gJycpIHtcclxuICAgIGFkZFRhc2soKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZW50ZXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGlmICh0YXNrSW5wdXQudmFsdWUgIT09ICcnKSB7XHJcbiAgICBhZGRUYXNrKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG5ld0NsZWFyLmNsZWFyQnV0dG9uKCk7XHJcbn0pO1xyXG5cclxuZGFya01vZGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGFya01vZGUpO1xyXG5cclxuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUZvbnQpO1xyXG5cclxuc2VsZWN0VGhlbWUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhlbWVNb2RlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=