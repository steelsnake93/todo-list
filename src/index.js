import "./styles.css";
import PageLayoutModule from './components/layout/PageLayout';

document.addEventListener("DOMContentLoaded", () => {
    const layout = PageLayoutModule.init();
    document.body.appendChild(layout);
});
