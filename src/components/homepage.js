import title from "./homepage-exclusive.js/title.js";
import { newContainer } from "./article.js";
import { removeContent } from "./content-remove.js";

export default function showHome() {
    let main = document.querySelector('#mid');

    removeContent(main);

    main.appendChild(title("Niko & Klonoa's Coffee Tavern"));
    main.appendChild(newContainer("Get ready to say 'WAHOO!' when you taste our brew!"));
    main.appendChild(newContainer("Our Story!"));
    main.appendChild(newContainer("Come check us out!"));

    return main;
}