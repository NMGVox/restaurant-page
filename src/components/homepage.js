import title from "./homepage-exclusive.js/title.js";
import { newContainer } from "./article.js";
import { removeContent } from "./content-remove.js";

export default function showHome() {
    let main = document.querySelector('#mid');

    removeContent(main);

    main.appendChild(title("Niko & Klonoa's Coffee Tavern"));
    main.appendChild(newContainer("GET READY TO SAY 'WAHOO!' WHEN YOU TASTE OUR BREW!"));
    main.appendChild(newContainer("OUR STORY!"));
    main.appendChild(newContainer("COME HANG WITH US!"));

    return main;
}