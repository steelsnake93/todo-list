import TodoListComponent from "./TodoListComponent";
import showNotification  from './Notification'

const TodoComponent = (function () {
    let todos = [];
    const todoListComponent = TodoListComponent();

    function handleSubmit(event) {
        event.preventDefault();
        const todoText = event.target.elements.todoInput.value.trim();
        if (todoText) {
            todos.push({ text: todoText, completed: false });
            todoListComponent.render(todos);
            event.target.elements.todoInput.value = "";
        }
        showNotification('Task added successfully!');
    }
    return {
        init: function () {
            const todoDiv = document.createElement("div");
            todoDiv.id = "todo-component";
            const addTodoDiv = document.createElement("div");
            addTodoDiv.className =
                "border-gray-300 dark:border-gray-600 h-auto mb-4 max-w-lg mx-auto";
            todoDiv.appendChild(addTodoDiv);

            const innerDiv = document.createElement("div");
            addTodoDiv.appendChild(innerDiv);

            const flexDiv = document.createElement("div");
            flexDiv.className = "my-8";
            innerDiv.appendChild(flexDiv);

            const todoForm = document.createElement("form");
            todoForm.className = "flex mt-4";
            todoForm.addEventListener("submit", handleSubmit);
            flexDiv.appendChild(todoForm);

            const todoInput = document.createElement("input");
            todoInput.type = "text";
            todoInput.name = "todoInput";
            todoInput.placeholder = "I want to...";
            todoInput.className =
                "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker";
            todoForm.appendChild(todoInput);

            const addButton = document.createElement("input");
            addButton.type = "submit";
            addButton.className =
            "text-white bg-blue-700 hover:bg-blue-700 focus:outline-none font-medium rounded-md text-md px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700";
            addButton.value = "Add Task";
            todoForm.appendChild(addButton);

            todoDiv.appendChild(todoListComponent.getElement());
            
            return todoDiv;
        },
    };
})();

export default TodoComponent;
