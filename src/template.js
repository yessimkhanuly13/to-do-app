const temp = () =>{
    const Header = (()=>{
        const header = document.createElement('div');
        header.classList.add('header');

        const h1 = document.createElement('h1');
        h1.textContent = "To Do List";
        header.appendChild(h1);

        const div = document.createElement('div');
        div.classList.add('body');
        
        document.body.appendChild(header);
        document.body.appendChild(div);
    })();

    const Body = (()=>{
        const body = `
                <div class="proj">
                    <label for="title">Title of Project</label>
                    <input type="text" id="title"></input>
                    <button class="add">Add Project</button>
                </div>
        `
        document.querySelector('.body').innerHTML += body;
    })();

    const Tasks = (()=>{
        const task = `
                <div class="task">
                <label for="title">Title</label>
                    <input type="text" id="title-task"></input>
                    <label for="decr">Description</label>
                    <input type="text" id="descr"></input>
                    <label for="title">Date</label>
                    <input type="date" id="date"></input>
                    <select name="priority" id="priority">
                        <option value="low">Low</option>
                        <option value="mid">Mid</option>
                        <option value="high">High</option>
                    </select>
                    <button id="task-add">Add Task</button>
                </div>
        `
        document.querySelector('.body').innerHTML += task;
    })();


    return {
        Header,
        Body,
        Tasks
    }
}

export default temp;