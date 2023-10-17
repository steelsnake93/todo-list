function renderTaskList(tasks) {
    const taskListSection = document.createElement("section");
    taskListSection.className = "task-list";

    const heading = document.createElement("h2");
    heading.textContent = "Tasks";
    taskListSection.appendChild(heading);

    const tasksDiv = document.createElement("div");
    tasksDiv.id = "tasks";

    for (let taskText of tasks) {
        const taskDiv = createTask(taskText);
        tasksDiv.appendChild(taskDiv);
    }

    taskListSection.appendChild(tasksDiv);
}
