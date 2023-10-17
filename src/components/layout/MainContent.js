import TodoComponent from "../core/TodoComponent";

const MainContentModule = (function () {
    return {
        init: function () {
            const mainContentDiv = document.createElement("main");
            mainContentDiv.className = "p-4 md:ml-64 h-screen pt-20";

            const header = document.createElement("h2");
            header.textContent = "Add ToDo";
            header.className = "text-center text-2xl font-semibold mb-4 font-bold";
            mainContentDiv.appendChild(header);

            const todoComponent = TodoComponent.init();
            mainContentDiv.appendChild(todoComponent);

            return mainContentDiv;
        },
    };
})();
export default MainContentModule;
