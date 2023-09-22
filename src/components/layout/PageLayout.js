import NavbarModule from './Navbar';
import SidebarModule from './Sidebar';
import MainContentModule from './MainContent';

const PageLayoutModule = (function () {
    return {
        init: function () {
            const pageLayoutDiv = document.createElement("div");
            pageLayoutDiv.className = "bg-gray-50 dark:bg-gray-300";

            const navbar = NavbarModule.init();
            pageLayoutDiv.appendChild(navbar);

            const sidebar = SidebarModule.init();
            pageLayoutDiv.appendChild(sidebar);

            const mainContent = MainContentModule.init();
            pageLayoutDiv.appendChild(mainContent);

            return pageLayoutDiv;
        }
    };
})();
export default PageLayoutModule;
