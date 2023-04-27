import { navItem } from './navitem.js';

export default function displayNav() {
    let navbar = document.createElement('div');
    navbar.className = "navbar";

    navbar.appendChild(navItem("Home"));
    navbar.appendChild(navItem("Menu"));
    navbar.appendChild(navItem("About"));

    return navbar;
}