import { removeContent } from "./content-remove.js";

function showMenu() {
    removeContent(document.querySelector('#mid'));
}

export {showMenu};