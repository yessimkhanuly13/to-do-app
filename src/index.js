import Task from "./task";
import Project from "./project";
import TodoList from "./todo-list";

const addTask = document.querySelector('#addTask');
const addProject = document.querySelector('#addProject');
const projectInput = document.querySelector('#projectInput'); 
const todoList = new TodoList();
const boxProj = document.querySelector('.project-list');
const inpDate = document.querySelector('#inpDate');
const inpDesc = document.querySelector('#inpDesc');
const inpTitle = document.querySelector('#inpTitle');
const selectPriority = document.querySelector('#selectPriority');

addProject.addEventListener('click', ()=>{
    const project = new Project(projectInput.value);
    todoList.addProject(project);
    const proj = document.createElement("li");
    proj.innerText = `${project.title}`;
    boxProj.appendChild(proj);
    console.log(project)
    console.log(todoList)
})
// project.addTask("do lunch", "go to store buy somethind, do something", "01.02.2023", "high");
// project.addTask("do dinner", "go to store buy mkdsm, do something", "22.02.2023", "medium");

// (title, description, date, priority){

addTask.addEventListener('click', ()=>{
    const task = new Task(inpTitle.value, inpDesc.value, inpDate.value, selectPriority.value);
    console.log(task);
    console.log(selectPriority.value);
})

