import title from "./homepage-exclusive.js/title.js";
import { newContainer } from "./article.js";

export default function showHome() {
    let div = document.createElement('div');
    div.id = 'mid';

    div.appendChild(title("Niko & Klonoa's Coffee Tavern"));
    div.appendChild(newContainer("Get ready to say 'WAHOO!' when you taste our brew!"));
    div.appendChild(newContainer("Our Story!"));
    div.appendChild(newContainer("Come check us out!"));

    return div;
}