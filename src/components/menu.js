import { removeContent } from "./content-remove.js";
import { newCat } from "./menu-exlusive/menu-category.js";
import { drinks, food, dessert } from "./menu-exlusive/menu-items.js";

function showMenu() {
    let main = document.querySelector('#mid')
    removeContent(main);
    main.appendChild(newCat(drinks, "Drinks"));
    main.appendChild(newCat(food, "Food"));
    main.appendChild(newCat(dessert, "Dessert"));
}

export {showMenu};