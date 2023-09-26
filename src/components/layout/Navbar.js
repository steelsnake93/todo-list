
const NavbarModule = (function() {
  function createSVGElement(tag, attributes) {
      const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
      for (const key in attributes) {
          el.setAttributeNS(null, key, attributes[key]);
      }
      return el;
  }

  return {
      init: function() {
          const navbarDiv = document.createElement("nav");
          navbarDiv.className = "bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50";
          
          const flexDiv = document.createElement("div");
          flexDiv.className = "flex flex-wrap justify-between items-center";
          navbarDiv.appendChild(flexDiv);

          const startDiv = document.createElement("div");
          startDiv.className = "flex justify-start items-center";
          flexDiv.appendChild(startDiv);

          const toggleButton = document.createElement("button");
          toggleButton.dataset.drawerTarget = "drawer-navigation";
          toggleButton.dataset.drawerToggle = "drawer-navigation";
          toggleButton.setAttribute("aria-controls", "drawer-navigation");
          toggleButton.className = "p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
          startDiv.appendChild(toggleButton);

          // SVG for the button
          const svgElem = createSVGElement("svg", {
              "aria-hidden": "true",
              "class": "w-6 h-6",
              "fill": "currentColor",
              "viewBox": "0 0 20 20"
          });
          const pathElem = createSVGElement("path", {
              "fill-rule": "evenodd",
              "d": "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
              "clip-rule": "evenodd"
          });
          svgElem.appendChild(pathElem);
          toggleButton.appendChild(svgElem);

          const brandLink = document.createElement("a");
          brandLink.href = "#";
          brandLink.className = "flex items-center justify-between mr-4";
          startDiv.appendChild(brandLink);

          const brandText = document.createElement("span");
          brandText.className = "self-center text-2xl font-semibold whitespace-nowrap dark:text-white";
          brandText.textContent = "To Do";
          brandLink.appendChild(brandText);

          // Add the end div (currently empty but can be populated later)
          const endDiv = document.createElement("div");
          endDiv.className = "flex items-center lg:order-2";
          flexDiv.appendChild(endDiv);

          return navbarDiv;
      }
  };
})();
export default NavbarModule;
