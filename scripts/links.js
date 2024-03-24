const baseURL = "https://terralshrewsbury.github.io/wdd230/";
const linksURL = "https://terralshrewsbury.github.io/wdd230/data/links.json";
let cards = document.getElementById('cards');


const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        let card = document.createElement('section');
        card.classList.add('weeklesson');
        let lessonweek = document.createElement('h4');
        let title = document.createElement('span');

        lessonweek.textContent = `Lesson W${lesson.lesson}:`;

        lesson.links.forEach((link, index, array) => {
            let linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            title.appendChild(linkElement);

            if (index < lesson.links.length - 1) {
                let separator = document.createTextNode(' | ');
                title.appendChild(separator);
            }
        });

        card.appendChild(lessonweek);
        card.appendChild(title);

        cards.appendChild(card);
    });
};


async function getLinks() {
    const response= await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.lessons);
}

getLinks();
