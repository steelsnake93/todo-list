import NavbarModule from "./Navbar";
import SidebarModule from "./Sidebar";
import MainContentModule from "./MainContent";

const PageLayoutModule = (function () {
  return {
    init: function () {
      const pageLayoutDiv = document.createElement("div");
      pageLayoutDiv.className = "bg-gray-50 dark:bg-gray-300";

      const sidebar = SidebarModule.init();
      document.body.appendChild(sidebar);

      const navbar = NavbarModule.init();
      document.body.appendChild(navbar);

      const mainContent = MainContentModule.init();
      pageLayoutDiv.appendChild(mainContent);

      return pageLayoutDiv;
    },
  };
})();
export default PageLayoutModule;
