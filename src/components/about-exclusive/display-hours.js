import { hours } from "./hours-info";

function showHours() {
    let div = document.createElement('div');
    div.classList.add('wrapper', 'about-wrap');

    let list = document.createElement('ul');
    hours.forEach(h => {
        let date = document.createElement('li');
        date.textContent = h;
        date.classList.add('schedule-item');
        list.appendChild(date);
    });

    div.appendChild(list);

    return div;
}

export { showHours };