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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-list */ \"./src/todo-list.js\");\n\r\n\r\n\r\n\r\nconst addTask = document.querySelector('#addTask');\r\nconst addProject = document.querySelector('#addProject');\r\nconst projectInput = document.querySelector('#projectInput'); \r\nconst todoList = new _todo_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst boxProj = document.querySelector('.project-list');\r\nconst inpDate = document.querySelector('#inpDate');\r\nconst inpDesc = document.querySelector('#inpDesc');\r\nconst inpTitle = document.querySelector('#inpTitle');\r\nconst selectPriority = document.querySelector('#selectPriority');\r\nconst selectProject = document.querySelector('#selectProject');\r\nconst boxTask = document.querySelector('.task-list');\r\n\r\nconst inbox = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Inbox\");\r\ntodoList.addProject(inbox);\r\nboxProj.innerHTML += `<li>${inbox.title}</li>`;\r\n\r\n\r\nfunction handleAddProject(){\r\n    const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectInput.value);\r\n    todoList.addProject(project);\r\n    const proj = `<li>${project.title}</li>`;\r\n    const option = `<option value=\"${project.title}\">${project.title}</option>`;\r\n    selectProject.innerHTML += option;\r\n    boxProj.innerHTML += proj;\r\n}\r\n\r\nfunction handleAddTask(){\r\n    const task = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](inpTitle.value, inpDesc.value, inpDate.value, selectPriority.value);\r\n    // const taskTemp = `<div class=\"task-temp\">\r\n    //     <input type=\"checkbox\" id=\"checkbox\"></input>\r\n    //     <label for=\"checkbox\">${task.title}</label>\r\n    //     <li>${task.description}</li>\r\n    //     <li>${task.date}</li>\r\n    // </div>`;\r\n    // boxTask.innerHTML += taskTemp;\r\n    const project = todoList.getProjectByName(selectProject.value);\r\n    project.addTask(task);\r\n}\r\n\r\n// function renderTodoList(){\r\n\r\n// }\r\n\r\nboxProj.addEventListener('click', (e)=>{\r\n   const project = todoList.getProjectByName(e.target.outerText);\r\n   console.log(project.getTasks())\r\n})\r\naddProject.addEventListener('click', handleAddProject);\r\naddTask.addEventListener('click', handleAddTask);\r\n\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\r\n    constructor(title){\r\n        this.title = title;\r\n        this.tasks = [];\r\n    }\r\n\r\n    addTask(task){\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    removeTask(task){\r\n        const index = this.tasks.indexOf(task);\r\n        if(index > -1){\r\n            this.tasks.splice(index, 1);\r\n        }\r\n    }\r\n\r\n    getCompletedTasks() {\r\n        return this.tasks.filter(task => task.completed);\r\n    }\r\n\r\n    getIncompleteTasks(){\r\n        return this.tasks.filter(task=>!task.completed)\r\n    }\r\n\r\n    getTasks(){\r\n        return this.tasks;\r\n    }\r\n\r\n    editTitle(title){\r\n        this.title = title;\r\n    }\r\n\r\n    getTitle(){\r\n        return this.title;\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\r\n\n\n//# sourceURL=webpack://to-do-app/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\r\n    constructor (title, description, date, priority){\r\n        this.title = title;\r\n        this.description = description;\r\n        this.date = date;\r\n        this.priority = priority;\r\n        this.completed = false;\r\n    }\r\n\r\n    editTitle(title){\r\n        this.title = title;\r\n    }\r\n\r\n    editDecription(description){\r\n        this.description = description;\r\n    }\r\n\r\n\r\n    getTitle(){\r\n        return this.title;\r\n    }\r\n\r\n    setTitle(title){\r\n        this.title = title;\r\n\r\n    }\r\n\r\n    getDescription(){\r\n        return this.description;\r\n    }\r\n\r\n    setDesctiption(description){\r\n        this.description = description;\r\n    }\r\n\r\n    getDate(){\r\n        return this.date;\r\n    }\r\n\r\n    setDate(date){\r\n        this.date = date;\r\n    }\r\n\r\n    markAsCompleted(){\r\n        this.completed = true;\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to-do-app/./src/task.js?");

/***/ }),

/***/ "./src/todo-list.js":
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TodoList{\r\n\r\n    constructor(){\r\n        this.projects = [];\r\n    }\r\n\r\n    addProject(project){\r\n        this.projects.push(project)\r\n    }\r\n\r\n    removeProject(project){\r\n        const index = this.projects.indexOf(project);\r\n        if(index !== -1 ){\r\n            this.projects.splice(index, 1);\r\n        }\r\n    }\r\n\r\n    getProjects(){\r\n        return this.projects;\r\n    }\r\n    \r\n    getProjectByName(name){\r\n        return this.projects.find(project=>project.title === name );\r\n    }\r\n    \r\n    getAllTasks(){\r\n        let allTasks = [];\r\n        this.projects.forEach(project => {\r\n            allTasks = allTasks.concat(project.getTasks())\r\n        });\r\n        return allTasks;\r\n    }\r\n\r\n    getCompletedTasks(){\r\n        let allCompletedTasks = [];\r\n        this.projects.forEach(project =>{\r\n            allCompletedTasks = allCompletedTasks.concat(project.getCompletedTasks());\r\n        });\r\n\r\n        return allCompletedTasks;\r\n    }\r\n\r\n    getIncompletedTasks(){\r\n        let allIncompletedTasks = [];\r\n        this.projects.forEach(project =>{\r\n            allIncompletedTasks = allIncompletedTasks.concat(project.getIncompletedTasks());\r\n        })\r\n        return allIncompletedTasks;\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n\n//# sourceURL=webpack://to-do-app/./src/todo-list.js?");

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