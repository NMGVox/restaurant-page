function showFooter() {
    let div = document.createElement('div');

    div.classList.add('foot');
    div.textContent = "Website designed by: ";
    div.appendChild(createLink());
    return div;
}

function createLink() {
    let link = document.createElement('a');
    link.href = 'https://github.com/NMGVox';
    link.title="Github Link";
    let text = document.createTextNode("NMGVox"); 
    link.appendChild(text);
    return link;
}

export {showFooter};