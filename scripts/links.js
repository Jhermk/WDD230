const baseURL = "https://jhermk.github.io/wdd230/";
const linksURL = "/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const learningActivitiesList = document.getElementById('learning-activities-list');

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        const weekLinks = week.links.map(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url.startsWith('http') ? link.url : `${baseURL}${link.url}`;
            linkElement.textContent = link.title;
            return linkElement;
        });

        weekItem.appendChild(document.createTextNode(`${week.week}: `));

        for (let i = 0; i < weekLinks.length; i++) {
            weekItem.appendChild(weekLinks[i]);
            if (i < weekLinks.length - 1) {
                weekItem.appendChild(document.createTextNode(' | '));
            }
        }

        learningActivitiesList.appendChild(weekItem);
    });
}

getLinks();