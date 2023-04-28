import title from "./homepage-exclusive.js/title.js";

export default function showHome() {
    let div = document.createElement('div');
    div.id = 'mid';

    div.appendChild(title("Lucky & Klonoa's Coffee Tavern"));

    return div;
}