export default function DOMProjects(projectsList){
    
    const projects = document.querySelector('.projects');
    while (projects.firstChild){
        projects.removeChild(projects.firstChild);
    }

    projectsList.forEach(e => {
        const project = document.createElement('li');
        project.innerHTML = e;
        projects.appendChild(project);
    });  
};