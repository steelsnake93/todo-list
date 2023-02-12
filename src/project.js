// Define a Project classes
export class Projects {
    constructor(projectName) {
        this.projectName = projectName;
        this.todos = [];
    };

    addTodoToProject(todo) {
        this.todos.push(todo);
    };

    removeTodoFromProject(todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    };
};