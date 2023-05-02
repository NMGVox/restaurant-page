export function newItem(item) {
    let container = document.createElement('div');
    container.className = "item-container";
    let image = new Image;
    image.src = item.src;
    image.classList.add('item-image');
    let itemName = document.createElement('h2');
    itemName.className = "item-name";
    itemName.textContent = item.name;

    container.appendChild(image);
    container.appendChild(itemName);
    return container;
} 