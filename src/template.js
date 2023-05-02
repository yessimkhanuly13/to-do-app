import createForm from "./todo.js";



const temp = () =>{
    const div = document.createElement('div');
    div.classList.add('container');

    div.innerHTML = `
        <h1>TO DO LIST</h1>
        <input type="text" id="title"></input>
        <input type="text" id="body"></input>
        <input type="date" id="date"></input>
    `
    const btn = document.createElement('button');
    btn.classList.add('add');
    btn.addEventListener('click', ()=>{
        const title = document.querySelector('#title');
        const date = document.querySelector('#date');

        const form = document.createElement('div');
        form.innerHTML += createForm(title.value, date.value);

        div.appendChild(form);
    });
    btn.textContent = 'ADD';
    div.appendChild(btn);
    document.body.appendChild(div);
}

export default temp;