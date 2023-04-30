import "./style.css";
import displayNav from "./components/navbar.js";
import showHome from "./components/homepage.js";

function showDefault() {
    document.querySelector('body').appendChild(displayNav());
    document.querySelector('body').appendChild(showHome());
}
//document.querySelector('body').appendChild(showHome());

window.addEventListener('load', showDefault);