const requestURL = 'https://jhermk.github.io/wdd230/chamber/data/members.json';

const list = document.querySelector('#list');
const table = document.querySelector('.table');
const grid = document.querySelector('#grid');
const cards = document.querySelector('.cards');
const displayItems = document.querySelector('.displayItems');

async function getData(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();
        const businesses = data['businesses'];

        businesses.forEach(business => {
            displayCards(business);
        });

        list.addEventListener('click', () => {
            table.innerHTML = '';
            cards.innerHTML = '';
            businesses.forEach(business => {
                displayTable(business);
            });
        });

        grid.addEventListener('click', () => {
            table.innerHTML = '';
            cards.innerHTML = '';
            businesses.forEach(business => {
                displayCards(business);
            });
        });
    }
}

getData(requestURL);

function displayCards(business) {
    let card = document.createElement('section');

    // Business Image
    let image = document.createElement('img');
    image.setAttribute('src', business.logo);
    image.setAttribute('alt', `${business.name} Logo`);
    card.appendChild(image);

    // Business Name
    let h2 = document.createElement('h2');
    h2.textContent = business.name;
    card.appendChild(h2);

    // Business Type
    let type = document.createElement('p');
    type.textContent = business.type;
    card.appendChild(type);

    // Business Address
    let address = document.createElement('p');
    address.textContent = `${business.location.address1}, ${business.location.city}, ${business.location.state} ${business.location.zip_code}`;
    card.appendChild(address);

    // Business Phone
    let phone = document.createElement('p');
    phone.textContent = business.phone;
    card.appendChild(phone);

    // Business Website
    let website = document.createElement('a');
    website.setAttribute('href', business.website);
    website.textContent = 'Website';
    card.appendChild(website);

    // Membership Level
    let membershipLevel = document.createElement('p');
    membershipLevel.textContent = `Membership Level: ${business.membership_level}`;
    card.appendChild(membershipLevel);

    // Other Information
    if (business.other_information) {
        if (typeof business.other_information === 'string') {
            let otherInfo = document.createElement('p');
            otherInfo.textContent = business.other_information;
            card.appendChild(otherInfo);
        } else {
            // Handle an object of information
            let otherInfo = document.createElement('ul');
            for (const key in business.other_information) {
                let li = document.createElement('li');
                li.textContent = `${key}: ${business.other_information[key]}`;
                otherInfo.appendChild(li);
            }
            card.appendChild(otherInfo);
        }
    }

    // Append card to the DOM (the card view).
    document.querySelector('div.cards').appendChild(card);
}

function displayTable(business) {
    let tableRow = document.createElement('tr');

    // Business Name
    let name = document.createElement('td');
    name.textContent = business.name;
    tableRow.appendChild(name);

    // Business Type
    let type = document.createElement('td');
    type.textContent = business.type;
    tableRow.appendChild(type);

    // Business Address
    let address = document.createElement('td');
    address.textContent = `${business.location.address1}, ${business.location.city}, ${business.location.state} ${business.location.zip_code}`;
    tableRow.appendChild(address);

    // Business Phone
    let phone = document.createElement('td');
    phone.textContent = business.phone;
    tableRow.appendChild(phone);

    // Business Website
    let website = document.createElement('td');
    website.innerHTML = `<a href="${business.website}">Website</a>`;
    tableRow.appendChild(website);

    // Membership Level
    let membershipLevel = document.createElement('td');
    membershipLevel.textContent = business.membership_level;
    tableRow.appendChild(membershipLevel);

    // Other Information
    let otherInfo = document.createElement('td');
    if (business.other_information) {
        if (typeof business.other_information === 'string') {
            otherInfo.textContent = business.other_information;
        } else {
            // Handle an object of information
            let ul = document.createElement('ul');
            for (const key in business.other_information) {
                let li = document.createElement('li');
                li.textContent = `${key}: ${business.other_information[key]}`;
                ul.appendChild(li);
            }
            otherInfo.appendChild(ul);
        }
    } else {
        otherInfo.textContent = 'N/A';
    }
    tableRow.appendChild(otherInfo);

    document.querySelector('table').appendChild(tableRow);
}
