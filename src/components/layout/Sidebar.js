export function Sidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = "app-sidebar";
    sidebar.className = "hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-blue-700 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0";
    
    const innerDiv = document.createElement('div');
    innerDiv.className = "px-6";
    sidebar.appendChild(innerDiv);

    const brandLink = document.createElement('a');
    brandLink.className = "flex-none text-xl font-semibold text-white";
    brandLink.href = "#";
    brandLink.setAttribute('aria-label', 'Brand');
    brandLink.textContent = 'To Do';
    innerDiv.appendChild(brandLink);

    const nav = document.createElement('nav');
    nav.className = "hs-accordion-group p-6 w-full flex flex-col flex-wrap";
    nav.setAttribute('data-hs-accordion-always-open', '');
    innerDiv.appendChild(nav);

    const ul = document.createElement('ul');
    ul.className = "space-y-1.5";
    nav.appendChild(ul);

    function createListItem(text) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = "flex items-center gap-x-3 py-2 px-2.5 bg-blue-600 text-sm text-white rounded-md";
        a.textContent = text;
        li.appendChild(a);
        return li;
    }

    ul.appendChild(createListItem('Inbox'));
    ul.appendChild(createListItem('Today'));
    ul.appendChild(createListItem('Upcoming'));
    ul.appendChild(createListItem('Filters and Labels'));

    const projectDiv = document.createElement('div');
    projectDiv.id = "projects";
    ul.appendChild(projectDiv);

    const projectUl = document.createElement('ul');
    projectUl.className = "pt-2 pl-2";
    projectDiv.appendChild(projectUl);

    function createProjectListItem(text) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white hover:text-white rounded-md hover:bg-blue-600";
        a.href = "javascript:;";
        a.textContent = text;
        li.appendChild(a);
        return li;
    }

    projectUl.appendChild(createProjectListItem('Link 1'));
    projectUl.appendChild(createProjectListItem('Link 2'));
    projectUl.appendChild(createProjectListItem('Link 3'));

    return sidebar;
}
