const requestURL = '/wdd230/chamber/data/members.json';

// Function to create a member advertisement
function createMemberAd(member) {
    const adContainer = document.createElement('div');
    adContainer.className = 'ad-container';

    const logoImg = document.createElement('img');
    logoImg.src = member.logo;
    logoImg.alt = member.name + ' Logo';
    logoImg.className = 'ad-logo';

    const adInfo = document.createElement('div');
    adInfo.className = 'ad-info';

    const adTitle = document.createElement('h2');
    adTitle.textContent = member.name;

    const adType = document.createElement('p');
    adType.textContent = member.type;

    const adWebsite = document.createElement('a');
    adWebsite.href = member.website;
    adWebsite.textContent = 'Visit Website';

    adInfo.appendChild(adTitle);
    adInfo.appendChild(adType);
    adInfo.appendChild(adWebsite);

    adContainer.appendChild(logoImg);
    adContainer.appendChild(adInfo);

    return adContainer;
}

// Fetch JSON data from the provided URL
fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        const jsonData = data; // JSON data retrieved from the URL

        // Filter and display silver and gold members
        const spotlightAdsContainer = document.getElementById('spotlightAds');
        jsonData.businesses.forEach((member) => {
            if (member.membership_level === 'Silver' || member.membership_level === 'Gold') {
                const ad = createMemberAd(member);
                spotlightAdsContainer.appendChild(ad);
            }
        });
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
