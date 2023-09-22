const SidebarModule = (function () {
    function createListItem(text, additionalClasses = "") {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = `flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${additionalClasses}`;
        a.href = "javascript:;";
        a.textContent = text;
        li.appendChild(a);
        return li;
    }

    return {
        init: function () {
            const sidebarDiv = document.createElement("aside");
            sidebarDiv.className =
                "fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700";

            const innerDiv = document.createElement("div");
            innerDiv.className =
                "overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800";
            sidebarDiv.appendChild(innerDiv);

            const primaryNav = document.createElement("ul");
            primaryNav.className = "space-y-2";
            innerDiv.appendChild(primaryNav);

            primaryNav.appendChild(createListItem("Today", "bg-blue-600"));
            primaryNav.appendChild(createListItem("Inbox", "bg-blue-600"));
            primaryNav.appendChild(createListItem("Upcoming", "bg-blue-600"));
            primaryNav.appendChild(
                createListItem("Filters and Labels", "bg-blue-600")
            );

            const projectsDiv = document.createElement("div");
            projectsDiv.id = "projects";
            innerDiv.appendChild(projectsDiv);

            const projectsList = document.createElement("ul");
            projectsList.className =
                "pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-500";
            projectsDiv.appendChild(projectsList);

            projectsList.appendChild(createListItem("Project 1"));
            projectsList.appendChild(createListItem("Project 2"));
            projectsList.appendChild(createListItem("Project 3"));

            return sidebarDiv;
        },
    };
})();
export default SidebarModule;
