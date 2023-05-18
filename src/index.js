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
const selectProject = document.querySelector('#selectProject');

const inbox = new Project("Inbox");
todoList.addProject(inbox);

addProject.addEventListener('click', ()=>{
    const project = new Project(projectInput.value);
    todoList.addProject(project);
    const proj = document.createElement("li");
    const option = `<option value="${project.title}">${project.title}</option>`;
    selectProject.innerHTML += option;
    proj.innerText = `${project.title}`;
    boxProj.appendChild(proj);
})

addTask.addEventListener('click', ()=>{
    const task = new Task(inpTitle.value, inpDesc.value, inpDate.value, selectPriority.value);
    // todoList.getProjectByName(selectProject.value);
    const project = todoList.getProjectByName(selectProject.value);
    project.addTask(task);
})

