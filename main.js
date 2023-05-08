/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n\r\n\r\nconst projects = [];\r\n\r\n// project.addTask(\"do lunch\", \"go to store buy somethind, do something\", \"01.02.2023\", \"high\");\r\n// project.addTask(\"do dinner\", \"go to store buy mkdsm, do something\", \"22.02.2023\", \"medium\");\r\n\r\n\r\n(0,_template__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nconst project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Inbox');\r\n\r\nconst add = document.querySelector('.add');\r\nadd.addEventListener('click', ()=>{\r\n    const inp = document.querySelector('#title');\r\n    const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(inp.value);\r\n    projects.push(project);\r\n    console.log(projects);\r\n    const task = document.querySelector('.task');\r\n    task.style.display = 'flex';\r\n})\r\n\r\n\r\nconst taskAdd = document.querySelector('#task-add');\r\ntaskAdd.addEventListener('click', ()=>{\r\n    const title = document.querySelector('#title-task');\r\n    const descr = document.querySelector('#descr');\r\n    const date = document.querySelector('#date');\r\n    const priority = document.querySelector('#priority');\r\n\r\n    project.addTask(title.value, descr.value, date.value, priority.value);\r\n    console.log(project);\r\n})\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\r\n\r\nclass Project {\r\n    constructor(title){\r\n        this.title = title;\r\n        this.tasks = [];\r\n    }\r\n\r\n    addTask(title, description, date, priority){\r\n        const task = new _todo__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, date, priority);\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    removeTask(task){\r\n        const index = this.tasks.indexOf(task);\r\n        if(index > -1){\r\n            this.tasks.splice(index, 1);\r\n        }\r\n    }\r\n\r\n    getTasks(){\r\n        return this.tasks;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-app/./src/project.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst temp = () =>{\r\n    const Header = (()=>{\r\n        const header = document.createElement('div');\r\n        header.classList.add('header');\r\n\r\n        const h1 = document.createElement('h1');\r\n        h1.textContent = \"To Do List\";\r\n        header.appendChild(h1);\r\n\r\n        const div = document.createElement('div');\r\n        div.classList.add('body');\r\n        \r\n        document.body.appendChild(header);\r\n        document.body.appendChild(div);\r\n    })();\r\n\r\n    const Body = (()=>{\r\n        const body = `\r\n                <div class=\"proj\">\r\n                    <label for=\"title\">Title of Project</label>\r\n                    <input type=\"text\" id=\"title\"></input>\r\n                    <button class=\"add\">Add Project</button>\r\n                </div>\r\n        `\r\n        document.querySelector('.body').innerHTML += body;\r\n    })();\r\n\r\n    const Tasks = (()=>{\r\n        const task = `\r\n                <div class=\"task\">\r\n                <label for=\"title\">Title</label>\r\n                    <input type=\"text\" id=\"title-task\"></input>\r\n                    <label for=\"decr\">Description</label>\r\n                    <input type=\"text\" id=\"descr\"></input>\r\n                    <label for=\"title\">Date</label>\r\n                    <input type=\"date\" id=\"date\"></input>\r\n                    <select name=\"priority\" id=\"priority\">\r\n                        <option value=\"low\">Low</option>\r\n                        <option value=\"mid\">Mid</option>\r\n                        <option value=\"high\">High</option>\r\n                    </select>\r\n                    <button id=\"task-add\">Add Task</button>\r\n                </div>\r\n        `\r\n        document.querySelector('.body').innerHTML += task;\r\n    })();\r\n\r\n\r\n    return {\r\n        Header,\r\n        Body,\r\n        Tasks\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (temp);\n\n//# sourceURL=webpack://to-do-app/./src/template.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor (title, description, date, priority){\r\n        this.title = title;\r\n        this.description = description;\r\n        this.date = date;\r\n        this.priority = priority;\r\n        this.completed = false;\r\n    }\r\n\r\n    getTitle(){\r\n        return this.title;\r\n    }\r\n\r\n    setTitle(title){\r\n        this.title = title;\r\n\r\n    }\r\n\r\n    getDescription(){\r\n        return this.description;\r\n    }\r\n\r\n    setDesctiption(description){\r\n        this.description = description;\r\n    }\r\n\r\n    getDate(){\r\n        return this.date;\r\n    }\r\n\r\n    setDate(date){\r\n        this.date = date;\r\n    }\r\n\r\n    markAsCompleted(){\r\n        this.comleted = true;\r\n    }\r\n\r\n    isCompleted(){\r\n        return this.comleted;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://to-do-app/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;