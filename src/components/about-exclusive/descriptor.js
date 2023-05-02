import nikobio from '../../data/niko.txt';
import klobio from '../../data/klonoa.txt';
import nikoportrait from '../../images/niko.png';
import klonoaportrait from '../../images/klonoa.png';

let info = {
    "niko" : {
        name: "Niko",
        bio: nikobio,
        picture: nikoportrait
    },
    "klonoa" : {
        name: "Klonoa",
        bio: klobio,
        picture: klonoaportrait
    },
};

function showBiography (name) {
    let div = document.createElement('div');
    div.classList.add('wrapper', 'about-wrap');

    let title = document.createElement('h2');
    title.textContent = info[name].name;
    title.classList = "bio-name"
    div.appendChild(title);

    let portrait = new Image;
    portrait.classList.add('portrait');
    portrait.src = info[name].picture;
    div.appendChild(portrait);

    let bio = document.createElement('p');
    bio.textContent = info[name].bio;
    bio.classList.add('biography');
    div.appendChild(bio);

    return div;
}

export { showBiography }