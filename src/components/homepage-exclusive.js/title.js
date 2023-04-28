export default function title(text) {
    let title = document.createElement('h1');
    title.className = 'title';

    title.textContent = text;

    return title;
}