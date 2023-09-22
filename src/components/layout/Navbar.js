import toggleIcon from "../../assets/svg/toggle-icon.svg";

const NavbarModule = (function () {
  return {
    init: function () {
      const navbarDiv = document.createElement("nav");
      navbarDiv.className =
        "bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50";

      const flexDiv = document.createElement("div");
      flexDiv.className = "flex flex-wrap justify-between items-center";
      navbarDiv.appendChild(flexDiv);

      const startDiv = document.createElement("div");
      startDiv.className = "flex justify-start items-center";
      flexDiv.appendChild(startDiv);

      const toggleButton = document.createElement("button");
      toggleButton.innerHTML = toggleIcon;
      toggleButton.dataset.drawerTarget = "drawer-navigation";
      toggleButton.dataset.drawerToggle = "drawer-navigation";
      toggleButton.setAttribute("aria-controls", "drawer-navigation");
      toggleButton.className =
        "p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
      startDiv.appendChild(toggleButton);

      const brandLink = document.createElement("a");
      brandLink.href = "#";
      brandLink.className = "flex items-center justify-between mr-4";
      startDiv.appendChild(brandLink);

      const brandText = document.createElement("span");
      brandText.className =
        "self-center text-2xl font-semibold whitespace-nowrap dark:text-white";
      brandText.textContent = "To Do";
      brandLink.appendChild(brandText);

      const endDiv = document.createElement("div");
      endDiv.className = "flex items-center lg:order-2";
      flexDiv.appendChild(endDiv);

      return navbarDiv;
    },
  };
})();
export default NavbarModule;
