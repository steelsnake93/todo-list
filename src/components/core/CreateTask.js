import showNotification  from './Notification'

function createTask(taskText) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task flex items-center my-2";

  const completitionCheckbox = document.createElement("input");
  completitionCheckbox.type = "checkbox";
  completitionCheckbox.className = "completition-checkbox mr-2";

  completitionCheckbox.addEventListener('change', function () {
    if (completitionCheckbox.checked) {
      taskInput.style.textDecoration = "line-through";
    } else {
      taskInput.style.textDecoration = "none";
    }
  });

  taskDiv.appendChild(completitionCheckbox);

  const contentDiv = document.createElement("div");
  contentDiv.className = "content w-full mx-2";

  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.className = "text w-full p-2 rounded-md";
  taskInput.value = taskText;
  taskInput.readOnly = true;
  contentDiv.appendChild(taskInput);

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions flex";

  const editButton = document.createElement("button");
  editButton.className =
    "edit text-white bg-blue-700 hover:bg-blue-700 focus:outline-none font-medium mx-1 rounded-md text-md px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700";
  editButton.textContent = "Edit";

  editButton.addEventListener('click', function () {
    if (taskInput.readOnly) {
      taskInput.readOnly = false;
      editButton.textContent = "Save";
      showNotification('Editing task. Click "Save" when done.');
    } else {
      taskInput.readOnly = true;
      editButton.textContent = "Edit";
      showNotification('Task edited successfully!');
    }
  });

  actionsDiv.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.className =
    "delete text-white bg-red-700 hover:bg-red-700 focus:outline-none font-medium mx-1 rounded-md text-md px-2 py-1 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-700";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener('click', function () {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (confirmed) {
      taskDiv.remove();
    }
    showNotification('Task deleted successfully!');
  });

  actionsDiv.appendChild(deleteButton);

  taskDiv.appendChild(contentDiv);
  taskDiv.appendChild(actionsDiv);

  return taskDiv;
}

export default createTask;
