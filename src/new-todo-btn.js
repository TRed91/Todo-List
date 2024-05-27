import GenerateToDo from "./generateToDo";
import createTodoDom from "./createDOMtodo";

export default function newTodoBtn(projects){
    
    const newTodoBtn = document.querySelector('.new-todo');
    newTodoBtn.addEventListener('click', () => {
        const form = document.querySelector('form');
        if (form.hidden === true){
            form.hidden = false;
        }else {
            form.hidden = true;
        }
    });

    const addTodoBtn = document.querySelector('.add-todo-btn');
    const titleInput = document.querySelector('.title');
    const descriptionInput = document.querySelector('.desc');
    const dateInput = document.querySelector('.date');
    const priorityInput = document.querySelector('.priority');
    const notesInput = document.querySelector('.notes');
    const projectsDOM = document.querySelectorAll('.project');

    addTodoBtn.addEventListener('click', () => {
        for (let item of projectsDOM){
            if (item.checked) {
                let i = item.getAttribute("index");
                projects[i].todo.push(new GenerateToDo(
                    titleInput.value, 
                    descriptionInput.value, 
                    dateInput.value, 
                    priorityInput.value, 
                    notesInput.value
                ));
                createTodoDom(projects[i].todo);
            }
        }        
    });

    projectsDOM.forEach(e => {
        let i = e.getAttribute("index");
        e.addEventListener('click', () => {
            createTodoDom(projects[i].todo);
        })
    });
};