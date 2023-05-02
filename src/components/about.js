import { removeContent } from "./content-remove.js";
import { showBiography } from "./about-exclusive/descriptor.js";

function showAbout() {
    let main = document.querySelector('#mid');
    removeContent(main);

    let header = document.createElement('h1');
    header.textContent = "ABOUT";
    header.classList.add("title");
    main.appendChild(header);

    main.appendChild(showBiography('niko'));
    main.appendChild(showBiography('klonoa'));
}

export { showAbout };