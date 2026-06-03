const apiKey = "733a5588a4bf4e0bfdbcace93808d498";

document.getElementById("search-btn").addEventListener("click", () => {
    const city = document.getElementById("city-input").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    getWeather(city);
});

async function getWeather(city) {
    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Location not found. Try a nearby city.");
        }

        const data = await response.json();

        document.getElementById("city-name").innerText =
            `${data.name}, ${data.sys.country}`;

        document.getElementById("temperature").innerText =
            `${Math.round(data.main.temp)} °C`;

        document.getElementById("description").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            `Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
            `Wind: ${data.wind.speed} km/h`;

    } catch (error) {
        alert(error.message);
    }
}