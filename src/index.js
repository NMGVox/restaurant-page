import "./style.css";
import displayNav from "./components/navbar.js";
import showHome from "./components/homepage.js";

document.querySelector('body').appendChild(displayNav());
document.querySelector('body').appendChild(showHome());