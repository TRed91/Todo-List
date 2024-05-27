import './style.css';
import DOMProjects from './createDOMprojects';
import GenerateToDo from './generateToDo';
import newTodoBtn from './new-todo-btn';

const createProject = (function(){
    const projectsList = [{
        name: 'Default',
        todo: [new GenerateToDo('Title', 'description', 'due Date', 'priority', 'notes'),]
    },];
    console.log(projectsList);
    const createProjectBtn = document.querySelector('.create-project');
    createProjectBtn.addEventListener('click', () => {
        const projectName = {
            name: prompt('Enter project name: '),
            todo: []
        }
        projectsList.push(projectName);
        DOMProjects(projectsList);
        newTodoBtn(projectsList);
        console.log(projectsList);
    })
    return {projectsList};
})();


