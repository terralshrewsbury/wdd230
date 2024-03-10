const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

const url = 'data/members.json';
const cards = document.querySelector('article');

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let company = document.createElement("h2");
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let image = document.createElement("img");
        let website = document.createElement("a");


        company.textContent = member.name;
        address.textContent = member.address;
        phoneNumber.textContent = member.phoneNumber;
        website.textContent=member.website;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.name} logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        website.setAttribute('href',member.website);
        website.setAttribute('target', '_blank');

        card.appendChild(image);
        card.appendChild(company);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website)
    

        cards.appendChild(card);
    });
}

async function getMemberData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

getMemberData();
