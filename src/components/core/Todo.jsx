export function Todo() {
  const container = document.createElement("div");
  container.className = "p-4 bg-white rounded-md shadow-lg mx-auto max-w-2xl";

  const actionRow = document.createElement("div");
  actionRow.className = "flex justify-around items-center space-x-4 mb-4";
  container.appendChild(actionRow);

  // Title input
  const titleInput = createInput("Enter a new task...");
  titleInput.className += " flex-grow";
  actionRow.appendChild(titleInput);

  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  addButton.className =
    "px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:bg-indigo-700";
  actionRow.appendChild(addButton);
  const rowContainer = document.createElement("div");
  rowContainer.className = "flex space-x-4 items-center";
  container.appendChild(rowContainer);

  // Due Date
  const dueDateWrapper = document.createElement("div");
  dueDateWrapper.className = "flex-1";
  const dueDateInput = createInput("Due Date", "date");
  dueDateWrapper.appendChild(dueDateInput);
  rowContainer.appendChild(dueDateWrapper);

  // Priority
  const priorityWrapper = document.createElement("div");
  priorityWrapper.className = "flex-1";
  const prioritySelectWrapper = createPrioritySelect();
  priorityWrapper.appendChild(prioritySelectWrapper);
  rowContainer.appendChild(priorityWrapper);

  // Checklist
  const checklistWrapper = document.createElement("div");
  checklistWrapper.className = "flex-1";
  const checklistItem = createChecklistItem("Default");
  checklistWrapper.appendChild(checklistItem);
  rowContainer.appendChild(checklistWrapper);

  function createInput(placeholder, type = "text") {
    const input = document.createElement("input");
    input.type = type;
    input.className =
      "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
    input.placeholder = placeholder;
    return input;
  }

  function createPrioritySelect() {
    const wrapper = document.createElement("div");
    wrapper.className = "mx-auto max-w-xs";
    const select = document.createElement("select");
    select.className =
      "block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50";
    ["Option01", "Option02", "Option03"].forEach((optionText) => {
      const option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      select.appendChild(option);
    });
    wrapper.appendChild(select);
    return createLabeledElement("Priority", select);
  }

  function createChecklistItem(text) {
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center space-x-2";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.className =
      "h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400";
    const label = document.createElement("label");
    label.className = "text-sm font-medium text-gray-700";
    label.textContent = text;
    wrapper.appendChild(input);
    wrapper.appendChild(label);
    return createLabeledElement("Checklist", wrapper);
  }

  function createLabeledElement(labelText, element) {
    const wrapper = document.createElement("div");
    wrapper.className = "mb-4";
    const label = document.createElement("label");
    label.className = "block text-gray-700 text-sm font-bold mb-2 ";
    label.textContent = labelText;
    wrapper.appendChild(label);
    wrapper.appendChild(element);
    return wrapper;
  }

  const todoList = document.createElement("ul");
  todoList.className = "mt-4";
  container.appendChild(todoList);

  addButton.addEventListener("click", () => {
    const todoItem = document.createElement("li");
    todoItem.className = "border-t border-gray-200 py-2";
    todoItem.innerHTML = `
    <p class="text-red-500">Checklist: ${
      checklistWrapper.querySelector("input").checked
        ? "Checked"
        : "Not Checked"
    }</p>
    <strong class="text-xl">${titleInput.value}</strong>
    <p class="text-sm text-blue-500">Due Date: ${dueDateInput.value}</p>
    <p class="text-sm text-green-500">Priority: ${
      prioritySelectWrapper.querySelector("select").value
    }</p>
    `;
    todoList.appendChild(todoItem);

    // Clear input fields
    titleInput.value = "";
    dueDateInput.value = "";
    prioritySelectWrapper.querySelector("select").value = "Option01";
    checklistWrapper.querySelector("input").checked = false;
  });

  return container;
}
