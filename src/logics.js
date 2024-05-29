import {GenerateToDo, GenerateProject} from "./generateToDo";
import {drawProjectsDom, drawTodoDom} from './dom-control';

const createProjectBtn = document.querySelector('.create-project');
const projectNameInput = document.querySelector('.project-name-input');

const addTodoBtn = document.querySelector('.add-todo-btn');
const titleInput = document.querySelector('.title');
const descriptionInput = document.querySelector('.desc');
const dateInput = document.querySelector('.date');
const priorityInput = document.querySelector('.priority');
const notesInput = document.querySelector('.notes');

const newTodoBtn = document.querySelector('.new-todo');
const form = document.querySelector('form');

let projectsList = [];
let indexRef;

function showDefault(){
    const defaultProject = new GenerateProject('default');
    defaultProject.todo.push(new GenerateToDo('Title', 'Description', `${new Date()}`, 'Priority', 'Notes'));
    projectsList.push(defaultProject);
    defaultProject.setChecked(true);
    drawProjectsDom(projectsList);
    drawTodoDom(projectsList[0].todo);
    newProjectBtnFunc();
};

const newTodoBtnFunc = (function (){
    
    newTodoBtn.addEventListener('click', () => { 

        titleInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
        priorityInput.value = '';
        notesInput.value = ''; 

        confirmTodoBtn.disabled = true;
        addTodoBtn.disabled = false;

        if (form.hidden === true){
            form.hidden = false;
        }else {
            form.hidden = true;
        }
    });

    addTodoBtn.addEventListener('click', () => {

        form.hidden = true;

        for (let item of projectsList){
            if (item.getChecked() === true) {
                item.todo.push(new GenerateToDo(
                    titleInput.value, 
                    descriptionInput.value, 
                    dateInput.value, 
                    priorityInput.value, 
                    notesInput.value
                ));
                drawTodoDom(item.todo);  
            }
        }
        
    });

    cancelBtn.addEventListener('click', () => {
        form.hidden = true;
    });

    confirmTodoBtn.addEventListener('click', () => {
        let selectedTodo = getActiveProject().todo[indexRef];
        selectedTodo.editTodo(
            titleInput.value, 
            descriptionInput.value,
            dateInput.value,
            priorityInput.value,
            notesInput.value
        )
        drawTodoDom(projectsList[projectsList.indexOf(getActiveProject())].todo);
        form.hidden = true;
    });

    deleteProject.addEventListener('click', () => {
        const active = projectsList.indexOf(getActiveProject());
        if (active !== 0){
            projectsList.splice(active, 1);
            projectsList[projectsList.length - 1].setChecked(true);
            console.log(projectsList)
            drawProjectsDom(projectsList);
            drawTodoDom(projectsList[projectsList.length -1].todo);

            updateSidebarListeners();
        }        
    })

})();

function newProjectBtnFunc(){
    createProjectBtn.addEventListener('click', () => {
        
        let projectName;

        if (projectNameInput.value !== '' && projectNameInput.value !== undefined){
            projectName = new GenerateProject(projectNameInput.value);
        
            projectsList.push(projectName);
            drawProjectsDom(projectsList);
            projectNameInput.value = '';
            for (let project of projectsList){
                project.setChecked(false);
            }
            projectName.setChecked(true);
            drawTodoDom(projectName.todo)

            updateSidebarListeners();
        }
    })
}

function editBtnPressed(element, index){
    console.log(element)
    console.log(projectsList)
    form.hidden = false;
    confirmTodoBtn.disabled = false;
    addTodoBtn.disabled = true;

    titleInput.value = element.title;
    descriptionInput.value = element.description;
    dateInput.value = element.dueDate;
    priorityInput.value = element.priority;
    notesInput.value = element.notes;
    indexRef = index;
}


function getActiveProject(){
    for (let item of projectsList){
        if (item.getChecked() === true) {
            return item
        }
    }
}

function updateSidebarListeners(){
    const projectsDOM = document.querySelectorAll('.project');
    projectsDOM.forEach(e => {
        let i = e.getAttribute("index");
        e.addEventListener('click', () => {
                   
            for (let project of projectsList){
                project.setChecked(false);
            }
            projectsList[i].setChecked(true);
            drawTodoDom(projectsList[i].todo);
        })
    });
}

export {showDefault, editBtnPressed}