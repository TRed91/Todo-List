export default function createTodoDom(todos){
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

        todoDiv.setAttribute('class', 'todo-element')

        todoTitle.innerHTML = element.title;
        todoDescription.innerHTML = element.description;
        todoDate.textContent = element.dueDate;
        todoPriority.innerHTML = element.priority;
        todoNotes.innerHTML = element.notes;
        deleteToDo.innerHTML = 'Delete'

        todoContainer.appendChild(todoDiv);
    });
}



