export default function Drawer() {
  const drawerDiv = document.createElement("div");
  drawerDiv.className =
    "bg-gray-200 w-3/12 md:w-4/12 lg:w-3/10 h-full fixed left-0 overflow-y-auto transition-transform transform translate-x-0 md:translate-x-0 lg:translate-x-0";

    drawerDiv.innerText = 'Drawer';
    return drawerDiv;
}
