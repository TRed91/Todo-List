class GenerateToDo{
    constructor (title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

class GenerateProject{
    constructor(name){
        this.name = name
    }

    todo = [];
    checked = false;

    getChecked(){return this.checked}

    setChecked(bool){return this.checked = bool}
}

export {GenerateToDo, GenerateProject}