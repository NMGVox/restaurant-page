import { removeContent } from "./content-remove.js";
import { newCat } from "./menu-exlusive/menu-category.js";
import { drinks, food, dessert } from "./menu-exlusive/menu-items.js";

function showMenu() {
    let main = document.querySelector('#mid')
    removeContent(main);
    
    let header = document.createElement('h1');
    header.textContent = "MENU";
    header.classList.add("title");
    main.appendChild(header);

    main.appendChild(newCat(drinks, "DRINKS"));
    main.appendChild(newCat(food, "FOOD"));
    main.appendChild(newCat(dessert, "DESSERT"));
}

export {showMenu};