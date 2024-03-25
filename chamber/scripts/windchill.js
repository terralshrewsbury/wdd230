// 

const inputWindSpeed = document.getElementById("windSpeed");
const windChillElement = document.getElementById("windChill");
const button = document.getElementById("windChillButton");

const addItem = async () => {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.14&lon=-112.05&appid=fba900f6dceb561f0f3c8c86d43c6b7f&units=imperial');
        if (!response.ok) {
            throw new Error('Unable to fetch data');
        }
        const data = await response.json();
        const temperature = data.main.temp;

        const windSpeed = data.wind.speed;

        const print = document.createElement("p");

        if (temperature < 50 && windSpeed > 3) {
            const chill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            print.innerHTML = `Right now the wind chill is: ${chill.toFixed(2)} &deg;F`;
        } else {
            print.textContent = "I am sorry, please enter a temperature below 50 and/or a wind speed above 3.";
        }

        windChillElement.innerHTML = ''; // Clear previous content
        windChillElement.appendChild(print);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

button.addEventListener("click", addItem);
button.addEventListener("keydown", (event) => (event.key === "Enter") && addItem());
