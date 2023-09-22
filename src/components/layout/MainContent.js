const MainContentModule = (function () {
    return {
        init: function () {
            const mainContentDiv = document.createElement("main");
            mainContentDiv.className = "p-4 md:ml-64 h-auto pt-20";

            const sampleHeading = document.createElement("h1");
            sampleHeading.className = "text-xl font-semibold mb-4";
            sampleHeading.textContent = "Today's Tasks";
            mainContentDiv.appendChild(sampleHeading);

            const tasksList = document.createElement("ul");
            mainContentDiv.appendChild(tasksList);

            const sampleTasks = ["Task 1", "Task 2", "Task 3"];
            sampleTasks.forEach(task => {
                const li = document.createElement("li");
                li.textContent = task;
                tasksList.appendChild(li);
            });
            return mainContentDiv;
        }
    };
})();
export default MainContentModule;
