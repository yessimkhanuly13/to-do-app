class Todo {
    constructor(title, duedate, description, priority){
        this.title = title;
        this.duedate = duedate;
        this.description = description;
        this.priority = priority;
    }
}

const createForm = (title, date) =>{
    const todo = new Todo(title, date);
    
    const form = `
        <div class="form">
            ${todo.title}<br>
            ${todo.date}<br>
            ${todo.body}<br>
            <button>Edit</button>
            <button>Remove</button>
        </div>
    `
    return form;
}

export default createForm;