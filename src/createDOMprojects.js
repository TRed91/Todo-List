export default function DOMProjects(projectsList){
    
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

        projectLabel.innerHTML = e.name;
        projectDiv.appendChild(projectInput);
        projectDiv.appendChild(projectLabel);
        projects.appendChild(projectDiv);
    });  
};