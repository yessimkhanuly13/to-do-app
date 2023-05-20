export class Task {
    constructor (title, description, date, priority, project){
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.completed = false;
        this.project = project;
    }

    editTitle(title){
        this.title = title;
    }

    editDecription(description){
        this.description = description;
    }


    getTitle(){
        return this.title;
    }

    setTitle(title){
        this.title = title;

    }

    getDescription(){
        return this.description;
    }

    setDesctiption(description){
        this.description = description;
    }

    getDate(){
        return this.date;
    }

    setDate(date){
        this.date = date;
    }

    markAsCompleted(){
        this.completed = true;
    }

    getPriority(){
        return this.priority;
    }

    getProject(){
        return this.project;
    }

}

export default Task;