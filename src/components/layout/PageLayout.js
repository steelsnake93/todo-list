import { SidebarToggle } from "./SidebarToggle";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    const sidebarToggleComponent = SidebarToggle();
    const sidebarComponent = Sidebar();
    const contentComponent = MainContent();

    body.appendChild(sidebarToggleComponent);
    body.appendChild(sidebarComponent);
    body.appendChild(contentComponent);
});
