function navItem(text) {
    let item = document.createElement('div');
    item.textContent = text;
    item.classList.add("navItem");

    return item;
}

export {navItem}