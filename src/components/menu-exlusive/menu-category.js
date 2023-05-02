import { newItem } from "./display-item";

function newCat (items, title) {
    let div = document.createElement('div');
    div.classList.add('cat-container');
    let header = document.createElement('h1');
    header.className = 'menu-head';
    header.textContent = title;
    div.appendChild(header);
    let grid = document.createElement('div');
    grid.classList.add("item-grid");
    items.forEach(item => {
        grid.appendChild(newItem(item));
    });
    div.appendChild(grid);
    return div;
}

export { newCat };