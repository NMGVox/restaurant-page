import { removeContent } from "./content-remove.js";

function showAbout() {
    removeContent(document.querySelector('#mid'));
}

export { showAbout };