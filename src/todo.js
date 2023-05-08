export class Task {
    constructor (title, description, date, priority){
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.completed = false;
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
        this.comleted = true;
    }

    isCompleted(){
        return this.comleted;
    }

}