import "./style.css";
import displayNav from "./components/navbar.js";
import showHome from "./components/homepage.js";
import { showFooter } from './components/footer.js';
import { showMenu } from "./components/menu.js";
import { showAbout } from "./components/about.js";

function showDefault() {
    document.querySelector('body').appendChild(displayNav());

    let div = document.createElement('div');
    div.id = 'mid';
    document.querySelector('body').appendChild(div);
    document.querySelector('body').appendChild(showHome());
    document.querySelector('body').appendChild(showFooter());

    document.querySelector('#Menu').addEventListener('pointerdown', showMenu);
    document.querySelector('#Home').addEventListener('pointerdown', showHome);
    document.querySelector('#About').addEventListener('pointerdown', showAbout);
}
//document.querySelector('body').appendChild(showHome());

window.addEventListener('load', showDefault);

