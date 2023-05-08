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
                <label for="title">Title of Project</label>
                <input type="text" id="title"></input>
                <button class="add">Add Project</button>
        `
        document.querySelector('.body').innerHTML = body;
    })();


    return {
        Header,
        Body
    }
}

export default temp;