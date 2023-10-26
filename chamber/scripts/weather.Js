const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');

const apiKey = '2c7980475c08ffbafe5117afe00a84ee';
const lat = '38.58';
const lon = '121.49';

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const dailyForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function getThreeDayForecast() {
    try {
        const currentWeatherData = await apiFetch(currentWeatherUrl);
        const dailyForecastData = await apiFetch(dailyForecastUrl);

        displayResults(currentWeatherData);
        displayThreeDayForecast(dailyForecastData);
    } catch (error) {
        console.log(error);
    }
}

getThreeDayForecast();

function displayResults(data) {
    const temperature = data.main.temp;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;

    // Convert temperature to Fahrenheit
    const fahrenheit = (temperature - 273.15) * 9 / 5 + 32;

    currentTemp.innerHTML = `${Math.round(fahrenheit)}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = description;
}

function displayThreeDayForecast(data) {
    const forecastContainer = document.querySelector('#three-day-forecast-container');

    // Clear any previous data in the container
    forecastContainer.innerHTML = '';

    // Extract and display the three-day forecast data
    for (let i = 0; i < 3; i++) {
        // Ensure the data exists before processing
        if (data.list[i * 8]) {
            const date = new Date(data.list[i * 8].dt * 1000); // Assuming data is in 3-hour intervals
            const temperature = data.list[i * 8].main.temp;
            const description = data.list[i * 8].weather[0].description;

            // Create a div element to display each daily forecast
            const dailyForecastDiv = document.createElement('div');
            dailyForecastDiv.classList.add('daily-forecast-item');

            // Format the date to display in a user-friendly way
            const formattedDate = date.toDateString();

            // Create HTML content for the daily forecast without the icon
            dailyForecastDiv.innerHTML = `
                <div class="daily-date">${formattedDate}</div>
                <div class="daily-temp">${Math.round(temperature - 273.15)}&deg;C</div>
                <div class="daily-description">${description}</div>
            `;

            // Append the daily forecast to the container
            forecastContainer.appendChild(dailyForecastDiv);
        }
    }
}

