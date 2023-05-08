import { Task } from "./todo";

export class Project {
    constructor(title){
        this.title = title;
        this.tasks = [];
    }

    addTask(title, description, date, priority){
        const task = new Task(title, description, date, priority);
        this.tasks.push(task);
    }

    removeTask(task){
        const index = this.tasks.indexOf(task);
        if(index > -1){
            this.tasks.splice(index, 1);
        }
    }

    getTasks(){
        return this.tasks;
    }
}

