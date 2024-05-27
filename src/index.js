import './style.css';
import DOMProjects from './create-project-btn';
import GenerateToDo from "./generateToDo";
import './new-todo-btn';

const createProject = (function(){
    const projectsList = [];
    const createProjectBtn = document.querySelector('.create-project');
    createProjectBtn.addEventListener('click', () => {
    const projectName = prompt('Enter project name: ');
    projectsList.push(projectName);
    DOMProjects(projectsList);
    })
    return {projectsList};
})();

