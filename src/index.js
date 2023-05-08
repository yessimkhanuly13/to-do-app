import { Project } from "./project";
import temp from "./template"
const projects = [];

// project.addTask("do lunch", "go to store buy somethind, do something", "01.02.2023", "high");
// project.addTask("do dinner", "go to store buy mkdsm, do something", "22.02.2023", "medium");


temp();


const add = document.querySelector('.add');
add.addEventListener('click', ()=>{
    const inp = document.querySelector('#title');
    const project = new Project(inp.value);
    projects.push(project);
    console.log(projects);

})
