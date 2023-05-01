import { LoremIpsum, loremIpsum } from "lorem-ipsum";

function articleHeader(t) {
    let text = document.createElement('h1');
    text.className = "article-header";
    text.textContent = t;
    return text;
}

function headerBody() {
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 8,
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
    });
    let text = document.createElement('p');
    text.textContent = lorem.generateParagraphs(1);
    return text;
}

function newContainer(t) {
    let container = document.createElement('div');
    container.className = "wrapper"
    container.appendChild(articleHeader(t));
    container.appendChild(headerBody());
    return container;
}

export {newContainer};