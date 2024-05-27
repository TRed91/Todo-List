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
        projectInput.setAttribute('index', `${projectsList.indexOf(e)}`)

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
        const deleteToDo = document.createElement('button');
    
        todoDiv.appendChild(todoTitle);
        todoDiv.appendChild(todoDescription);
        todoDiv.appendChild(todoDate);
        todoDiv.appendChild(todoPriority);
        todoDiv.appendChild(todoNotes);
        todoDiv.appendChild(deleteToDo);

        todoDiv.setAttribute('class', 'todo-element');
        deleteToDo.setAttribute('class', 'delete-todo');

        todoTitle.innerHTML = element.title;
        todoDescription.innerHTML = element.description;
        todoDate.textContent = element.dueDate;
        todoPriority.innerHTML = element.priority;
        todoNotes.innerHTML = element.notes;
        deleteToDo.innerHTML = 'Delete';

        deleteToDo.addEventListener('click', () => {
            todos.splice(todos.indexOf(element), 1);
            drawTodoDom(todos);
        })

        todoContainer.appendChild(todoDiv);
    });
}

export {drawProjectsDom, drawTodoDom};