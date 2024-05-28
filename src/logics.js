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

function showDefault(){
    const defaultProject = new GenerateProject('default');
    defaultProject.todo.push(new GenerateToDo('Title', 'Description', 'Due Date', 'Priority', 'Notes'));
    projectsList.push(defaultProject);
    defaultProject.setChecked(true);
    drawProjectsDom(projectsList);
    drawTodoDom(projectsList[0].todo);
    newProjectBtnFunc();
};

const newTodoBtnFunc = (function (projects){
    
    newTodoBtn.addEventListener('click', () => { 
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
        titleInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
        priorityInput.value = '';
        notesInput.value = '';
    });

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
    })
}
   
export {showDefault}