import createTask from "./CreateTask";

function TodoListComponent() {
  const todoListSection = document.createElement("section");
  todoListSection.className =
    "task-list p-4 h-auto pt-20 max-w-lg mb-4 mx-auto";

  const todoListContainer = document.createElement("div");
  todoListContainer.className = "mt-8 p-4 shadow rounded-lg";
  todoListSection.appendChild(todoListContainer);

  const heading = document.createElement("h2");
  heading.className = "text-gray-500 text-lg font-semibold pb-4";
  heading.textContent = "Today";
  todoListContainer.appendChild(heading);

  const divider = document.createElement("div");
  divider.className = "bg-gradient-to-r from-blue-300 to-blue-500 h-px mb-6";
  todoListContainer.appendChild(divider);

  const tasksDiv = document.createElement("div");
  tasksDiv.id = "tasks";
  todoListContainer.appendChild(tasksDiv);

  return {
    render: function (todos) {
      tasksDiv.innerHTML = "";
      for (let todo of todos) {
        const taskDiv = createTask(todo.text);
        tasksDiv.appendChild(taskDiv);
      }
    },
    getElement: function () {
      return todoListSection;
    },
  };
}

export default TodoListComponent;
