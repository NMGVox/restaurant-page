function newHeader(text) {
    let header = document.createElement('h1');
    header.textContent = text;
    header.classList.add('menu-head');
    return header;
}

export { newHeader }