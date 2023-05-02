import { newItem } from "./display-item";
import { newHeader } from "../cat-header"; 

function newCat (items, title) {
    let div = document.createElement('div');
    div.classList.add('cat-container');

    div.appendChild(newHeader(title));

    let grid = document.createElement('div');
    grid.classList.add("item-grid");

    items.forEach(item => {
        grid.appendChild(newItem(item));
    });
    
    div.appendChild(grid);
    return div;
}

export { newCat };