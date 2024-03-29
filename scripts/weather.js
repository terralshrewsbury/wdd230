const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.14&lon=-112.05&appid=fba900f6dceb561f0f3c8c86d43c6b7f&units=imperial';


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

async function apiFetch() {
    try{
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else {
            throw Error (await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}
apiFetch();

