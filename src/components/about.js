import { removeContent } from "./content-remove.js";

function showAbout() {
    removeContent(document.querySelector('#mid'));

    let header = document.createElement('h1');
    header.textContent = "ABOUT";
    header.classList.add("title");
    main.appendChild(header);

    
}

export { showAbout };