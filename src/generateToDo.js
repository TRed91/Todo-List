export default class GenerateToDo{
    constructor (title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
    checked = false;

    getChecked(){checked};
    setChecked(bool){checked = bool};

    assignToProject(project){
        project.push(this);
    }
}