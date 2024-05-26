import GenerateToDo from "./generateToDo";

export default (function(){
    let todos = []
    const newTodoBtn = document.querySelector('.new-todo');
    newTodoBtn.addEventListener('click', () => {
        const form = document.querySelector('form');
        if (form.hidden === true){
            form.hidden = false;
        }else {
            form.hidden = true;
        }

        const addTodoBtn = document.querySelector('.add-todo-btn');
        const titleInput = document.querySelector('.title');
        const descriptionInput = document.querySelector('.desc');
        const dateInput = document.querySelector('.date');
        const priorityInput = document.querySelector('.priority');
        const notesInput = document.querySelector('.notes');

        addTodoBtn.addEventListener('click', () => {
            todos.push(new GenerateToDo(
                titleInput.value, 
                descriptionInput.value, 
                dateInput.value, 
                priorityInput.value, 
                notesInput.value)
            );
            console.log(todos);
        });
    })
})();