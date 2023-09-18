import './styles.css';
import Header from './components/Header';
import Drawer from './components/Drawer';

const header = Header();
const drawer = Drawer();

document.body.appendChild(header);
document.body.appendChild(drawer);