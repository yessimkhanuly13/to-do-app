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
const addTaskImg = document.querySelector('#addTaskImg');
const toggle = document.querySelector('#toggle');
const allTasks = document.querySelector('#all-tasks');
const cancelBtn = document.querySelector('#cancelTask');

const inbox = new Project("Inbox");
todoList.addProject(inbox);
boxProj.innerHTML += `<li><a href="#">${inbox.title}</a></li>`;


function handleAddProject(){
    if(projectInput.value === ''){
        alert('Fill the input');
        return;
    }

    const project = new Project(projectInput.value);
    todoList.addProject(project);
    const proj = `<li><a href="#">${project.title}</a></li>`;
    const option = `<option value="${project.title}">${project.title}</option>`;
    selectProject.innerHTML += option;
    boxProj.innerHTML += proj;
    projectInput.value = '';
}

function handleAddTask(){
    if(inpTitle.value === '' || selectPriority.value === '' || inpDate.value === '' || inpDesc.value === '' ){
        alert('Fill the all inputs');
        return;
    }
    const task = new Task(inpTitle.value, inpDesc.value, inpDate.value, selectPriority.value, selectProject.value);
    const project = todoList.getProjectByName(selectProject.value);
    addTaskImg.style.display = 'flex';
    const taskDiv = document.querySelector('.task');
    taskDiv.style.display = 'none';
    project.addTask(task);
    renderTasks(project);
    inpTitle.value = '';
    selectPriority.value = '';
    inpDate.value = '';
    inpDesc.value = '';

}

function renderTasks(project){
    boxTask.innerHTML = `<div class="task-header">
        <h3 class="task-h">${project.title}</h3>
        <button class="all-completed">Completed</button>
        <button class="all-incompleted">Incompleted</button>
    </div>`;
    project.getTasks().forEach(element => {
        let temp;
        if(element.completed === false){  
            temp = `
                <div class="todos" id="${project.title}">
                    <span class="list">${element.getTitle()}</span>
                    <span class="list">${element.getDescription()}</span>
                    <span class="list">${element.getDate()}</span>
                    <span class="list">${element.getPriority()}</span>
                    <button class="complete" id=${element.title} >Complete</button>
                    <button class="delete" id=${element.title}>Delete</button>
                </div>
            `;
        }else{
            temp = `
                <div class="todos" id="${project.title}">
                    <span class="list completed">${element.getTitle()}</span>
                    <span class="list completed">${element.getDescription()}</span>
                    <span class="list completed">${element.getDate()}</span>
                    <span class="list completed">${element.getPriority()}</span>
                    <button class="complete" id=${element.title} >Complete</button>
                    <button class="delete" id=${element.title}>Delete</button>
                </div>
            `;
        }
        boxTask.innerHTML += temp;
    });
}

function renderAllTasks(){
    boxTask.innerHTML = `<div class="task-header">
        <h3 class="task-h">All tasks</h3>
        <button class="all-completed">Completed</button>
        <button class="all-incompleted">Incompleted</button>
    </div>`;
    todoList.getAllTasks().forEach((element)=>{
        let temp;
            if(element.completed === false){
                temp = `
                    <div class="todos" id="${element.getProject()}">
                    <span class="list">${element.title}</span>
                    <span class="list">${element.desc}</span>
                    <span class="list">${element.date}</span>
                    <span class="list">${element.priority}</span>
                    <span class="list">${element.getProject()}</span>
                    <button class="complete" id=${element.title}>Complete</button>
                    <button class="delete" id=${element.title}>Delete</button>
                    </div>
                `;  
            }else{
                temp = `
                    <div class="todos" id="${element.getProject()}">
                    <span class="list completed">${element.title}</span>
                    <span class="list completed">${element.desc}</span>
                    <span class="list completed">${element.date}</span>
                    <span class="list completed">${element.priority}</span>
                    <span class="list completed">${element.getProject()}</span>
                    <button class="complete" id=${element.title}>Complete</button>
                    <button class="delete" id=${element.title}>Delete</button>
                    </div>
                `;
            }
        boxTask.innerHTML += temp;
    })
}

boxProj.addEventListener('click', (e)=>{
   const project = todoList.getProjectByName(e.target.outerText);
   renderTasks(project);
//    project.getTasks().forEach(element => {
//         const tempTask = `<li class="tasks">${element.title}</li>`;
//         boxTask += tempTask;
//    });
})

addProject.addEventListener('click', handleAddProject);
addTask.addEventListener('click', handleAddTask);

addTaskImg.addEventListener('click', (e)=>{
    const task = document.querySelector('.task')
    task.style.display = 'flex';
    addTaskImg.style.display = 'none';
})

allTasks.addEventListener('click', renderAllTasks);

cancelBtn.addEventListener('click', ()=>{
    const task = document.querySelector('.task');
    addTaskImg.style.display = 'flex';
    task.style.display = 'none';
    inpTitle.value = '';
    selectPriority.value = '';
    inpDate.value = '';
    inpDesc.value = '';
})

boxTask.addEventListener('click', (e)=>{
    const item = e.target;
    if(item.classList[0] === 'delete'){
        const project = todoList.getProjectByName(item.parentElement.id); 
        const task = project.getTaskByName(item.id);
        project.removeTask(task);
        renderTasks(project)
    }else if(item.classList[0] === 'complete'){
        const project = todoList.getProjectByName(item.parentElement.id); 
        const task = project.getTaskByName(item.id);
        task.markAsCompleted();
        console.log(task)
        renderTasks(project)
    }
    console.log(e.target)
})