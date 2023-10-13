const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#weather-description');

const apiKey = '2c7980475c08ffbafe5117afe00a84e';
const latitude = 5.36;
const longitude = 4.00;

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeatherData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

apiFetch();

function displayWeatherData(data) {
    const temperature = (data.main.temp - 273.15).toFixed(2) + '°C'; // Convert temperature to Celsius and round to 2 decimal places
    const iconCode = data.weather[0].icon;
    const description = data.weather[0].description;

    currentTemp.textContent = `Temperature: ${temperature}`;
    weatherDescription.textContent = `Condition: ${description}`;

    // Set the image source with the appropriate URL
    weatherIcon.src = `https://openweathermap.org/img/w/${iconCode}.png`;
    weatherIcon.alt = "Weather Icon";
}
