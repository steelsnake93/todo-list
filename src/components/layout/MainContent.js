import TodoComponent from "../core/TodoComponent";

const MainContentModule = (function() {
    return {
        init: function() {
            const mainContentDiv = document.createElement("main");
            mainContentDiv.className = "p-4 md:ml-64 h-screen pt-20";  // Adjust styles as needed

            const todoComponent = TodoComponent.init();
            mainContentDiv.appendChild(todoComponent);

            return mainContentDiv;
        }
    };
})();
export default MainContentModule;
