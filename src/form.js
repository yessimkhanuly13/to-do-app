class Todo {
    constructor(title, date){
        this.title = title;
        this.date = date;
    }

    edit(title, date){
        this.title = title;
        this.date = date;
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