import { removeContent } from "./content-remove.js";
import { showBiography } from "./about-exclusive/descriptor.js";
import { newHeader } from "./cat-header.js";
import { showHours } from "./about-exclusive/display-hours.js";
import title from "./homepage-exclusive.js/title.js";

function showAbout() {
    let main = document.querySelector('#mid');
    removeContent(main);

    main.appendChild(title("ABOUT US"))

    let header = document.createElement('h1');
    header.textContent = "ABOUT";
    header.classList.add("title");
    main.appendChild(newHeader("WHO ARE WE?"));

    main.appendChild(showBiography('niko'));
    main.appendChild(showBiography('klonoa'));

    main.appendChild(newHeader("WHEN ARE WE OPEN?"));
    main.appendChild(showHours());
}

export { showAbout };