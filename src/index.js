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
const boxTask = document.querySelector('.task-list');

const inbox = new Project("Inbox");
todoList.addProject(inbox);
boxProj.innerHTML += `<li>${inbox.title}</li>`;


function handleAddProject(){
    const project = new Project(projectInput.value);
    todoList.addProject(project);
    const proj = `<li>${project.title}</li>`;
    const option = `<option value="${project.title}">${project.title}</option>`;
    selectProject.innerHTML += option;
    boxProj.innerHTML += proj;
}

function handleAddTask(){
    const task = new Task(inpTitle.value, inpDesc.value, inpDate.value, selectPriority.value);
    // const taskTemp = `<div class="task-temp">
    //     <input type="checkbox" id="checkbox"></input>
    //     <label for="checkbox">${task.title}</label>
    //     <li>${task.description}</li>
    //     <li>${task.date}</li>
    // </div>`;
    // boxTask.innerHTML += taskTemp;
    const project = todoList.getProjectByName(selectProject.value);
    project.addTask(task);
}

boxProj.addEventListener('click', (e)=>{
   const project = todoList.getProjectByName(e.target.outerText);
   console.log(project.getTasks())
})
addProject.addEventListener('click', handleAddProject);
addTask.addEventListener('click', handleAddTask);
