const inputTemp = document.getElementById("currentTemp");
const inputWindSpeed = document.getElementById("windSpeed");
const windChillElement = document.getElementById("windChill");
const button = document.getElementById("windChillButton");

const addItem = () => {
    const print = document.createElement("p");

    const temperature = parseFloat(inputTemp.value);
    const windSpeed = parseFloat(inputWindSpeed.value);

    if (temperature < 50 && windSpeed > 3) {
        chill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        print.innerHTML = `The wind chill is: ${chill.toFixed(2)} &deg;F`;
    } else {
        print.textContent = "I am sorry, please enter a temperature below 50 and/or a wind speed above 3.";
    }

    windChillElement.innerHTML = ''; // Clear previous content
    windChillElement.appendChild(print);
};

button.addEventListener("click", addItem);
