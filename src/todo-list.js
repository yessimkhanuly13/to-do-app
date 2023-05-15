class TodoList{

    constructor(){
        this.projects = [];
    }

    addProject(project){
        this.projects.push(project)
    }

    removeProject(project){
        const index = this.projects.indexOf(project);
        if(index !== -1 ){
            this.projects.splice(index, 1);
        }
    }

    getProjects(){
        return this.projects;
    }
    
    getProjectByName(name){
        return this.projects.find(project=>project.name === name );
    }
    
    getAllTasks(){
        let allTasks = [];
        this.projects.forEach(project => {
            allTasks = allTasks.concat(project.getTasks())
        });
        return allTasks;
    }

    getCompletedTasks(){
        let allCompletedTasks = [];
        this.projects.forEach(project =>{
            allCompletedTasks = allCompletedTasks.concat(project.getCompletedTasks());
        });

        return allCompletedTasks;
    }

    getIncompletedTasks(){
        let allIncompletedTasks = [];
        this.projects.forEach(project =>{
            allIncompletedTasks = allIncompletedTasks.concat(project.getIncompletedTasks());
        })
        return allIncompletedTasks;
    }

}

export default TodoList;