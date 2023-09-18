# Todo List
A simple and customizable todo list application.

This is a todo list app created using webpack. It allows users to create projects and separate lists of todos. Each todo item has a title, description, due date, and priority. Users can also include notes or a checklist for each todo.

## Installation
    1. Clone the repository to your local machine
    2. Run `npm install` to install all dependencies
    3. Run `npm start` to start the app

## Usage
- To create a new project, click on the "New Project" button and enter the project name.
- To add a new todo, click on the project you want to add it to, and then click on the "New Todo" button. Fill out the necessary information and click "Save".
- To edit a todo, click on the todo item and make the necessary changes. Click "Save" to update the information.
- To delete a todo, click on the todo item and click the "Delete" button.
- To view all projects and their respective todos, click on the "Projects" tab in the top navigation.
## Libraries Used
- <a href="https://date-fns.org/">date-fns</a> for formatting and manipulating dates and times.
## Persistence
The app uses the Web Storage API (localStorage) to persist data. Projects and todos are saved to localStorage every time a new project or todo is created. When the app is first loaded, it looks for the saved data in localStorage.

## Separation of Concerns
The app separates application logic (i.e. creating new todos, setting todos as complete, changing todo priority, etc.) from the DOM-related stuff, keeping all of those things in separate modules.

## Inspiration
For inspiration, check out the following great todo apps:
- <a href="https://todoist.com/">Todoist</a>
- <a href="https://culturedcode.com/things/">Things</a>
- <a href="https://www.any.do/">any.do</a>

## Future Improvements
- Add the ability to mark a todo as complete
- Add the ability to search for a specific todo
- Add the ability to sort todos by due date or priority
- Improve the styling of the app
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
- <a href="https://choosealicense.com/licenses/mit/">MIT</a>