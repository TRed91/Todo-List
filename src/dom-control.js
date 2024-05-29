import { editBtnPressed } from "./logics";

function drawProjectsDom(projectsList){
    
    const projects = document.querySelector('.projects');
    while (projects.firstChild){
        projects.removeChild(projects.firstChild);
    }

    projectsList.forEach(e => {
        const projectDiv = document.createElement('div');
        const projectLabel = document.createElement('label');
        const projectInput = document.createElement('input');

        projectLabel.setAttribute('for', `${e.name}`);
        projectInput.setAttribute('type', 'radio');
        projectInput.setAttribute('value', `${e.name}`);
        projectInput.setAttribute('name', 'project');
        projectInput.setAttribute('class', 'project');
        projectInput.setAttribute('id', `${e.name}`);
        projectInput.setAttribute('index', `${projectsList.indexOf(e)}`);

        projectLabel.innerHTML = e.name;

        projectDiv.appendChild(projectInput);
        projectDiv.appendChild(projectLabel);

        projects.appendChild(projectDiv);
        projectInput.checked = true;
        
    });  
};

function drawTodoDom(todos){
    const todoContainer = document.querySelector('.todo-container');

    while (todoContainer.firstChild){
        todoContainer.removeChild(todoContainer.firstChild);
    }

    todos.forEach(element => {
        const todoDiv = document.createElement('div');

        const todoTitle = document.createElement('h3');
        const todoDescription = document.createElement('div');
        const todoDate = document.createElement('div');
        const todoPriority = document.createElement('div');
        const todoNotes = document.createElement('p');
        const buttonDiv = document.createElement('div')
        const deleteToDo = document.createElement('button');
        const editToDo = document.createElement('button')
    
        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDescription);
        todoDiv.appendChild(todoDate);
        todoDiv.appendChild(todoPriority);
        todoDiv.appendChild(todoNotes);
        todoDiv.appendChild(buttonDiv);
        buttonDiv.appendChild(editToDo);
        buttonDiv.appendChild(deleteToDo);

        todoDiv.setAttribute('class', 'todo-element');
        buttonDiv.setAttribute('class', 'todo-button-container')
        deleteToDo.setAttribute('class', 'delete-todo');
        editToDo.setAttribute('class', 'edit-todo');
        editToDo.setAttribute('index', `${todos.indexOf(element)}`)

        switch (element.getPriority()){
            case 'High Priority':
                todoPriority.setAttribute('class', 'high');
                break;
            case 'Medium Priority':
                todoPriority.setAttribute('class', 'medium');
                break;
            case 'Low Priority':
                todoPriority.setAttribute('class', 'low');
        }

        todoTitle.innerHTML = element.title;
        todoDescription.innerHTML = element.description;
        todoDate.textContent = element.dueDate;
        todoPriority.innerHTML = element.priority;
        todoNotes.innerHTML = element.notes;
        deleteToDo.innerHTML = 'Delete';
        editToDo.innerHTML = 'Edit';

        deleteToDo.addEventListener('click', () => {
            todos.splice(todos.indexOf(element), 1);
            drawTodoDom(todos);
        })

        editToDo.addEventListener('click', () => {
            let index = editToDo.getAttribute('index');
            editBtnPressed(element, index);
        })

        todoContainer.appendChild(todoDiv);
    });
}

export {drawProjectsDom, drawTodoDom};