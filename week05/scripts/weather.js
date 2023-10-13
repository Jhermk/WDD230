// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = '2c7980475c08ffbafe5117afe00a84ee';
const lat = '49.75';
const lon = '6.63';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data); // Uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const temperature = data.main.temp; // Temperature in Kelvin
    const iconCode = data.weather[0].icon;
    const description = data.weather[0].description;

    // Convert temperature to Fahrenheit
    const fahrenheit = (temperature - 273.15) * 9 / 5 + 32;

    currentTemp.innerHTML = `${Math.round(fahrenheit)}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description;
}
