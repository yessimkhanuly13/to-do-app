class Project {
    constructor(title){
        this.title = title;
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(task){
        const index = this.tasks.indexOf(task);
        if(index > -1){
            this.tasks.splice(index, 1);
        }
    }

    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    getIncompleteTasks(){
        return this.tasks.filter(task=>!task.completed)
    }

    getTasks(){
        return this.tasks;
    }

    editTitle(title){
        this.title = title;
    }

}

export default Project;

