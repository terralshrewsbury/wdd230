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

const dateOne= document.querySelector('#dateOne');
const dayOne = document.querySelector('#dayOne');
const iconOne = document.querySelector('#iconOne');
const captionDescOne = document.querySelector('figcaptionOne')
const url1 = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.14&lon=-112.05&appid=fba900f6dceb561f0f3c8c86d43c6b7f&units=imperial';

const dateTwo= document.querySelector('#dateTwo');
const dayTwo = document.querySelector('#dayTwo');
const iconTwo = document.querySelector('#iconTwo');
const captionDescTwo = document.querySelector('figcaptionTwo')
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.14&lon=-112.05&appid=fba900f6dceb561f0f3c8c86d43c6b7f&units=imperial';

const dateThree= document.querySelector('#dateThree');
const dayThree = document.querySelector('#dayThree');
const iconThree = document.querySelector('#iconThree');
const captionDescThree = document.querySelector('figcaptionThree')
const url3 = 'https://api.openweathermap.org/data/2.5/forecast?lat=41.14&lon=-112.05&appid=fba900f6dceb561f0f3c8c86d43c6b7f&units=imperial';


function displayResultsThree(data) {
    function formatDate(dateText) {
        const utcDate = new Date(dateText);
        const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
        return localDate.toLocaleDateString('en-US');
    }
    dateOne.innerHTML = formatDate(data.list[5].dt_txt);
    dateTwo.innerHTML = formatDate(data.list[13].dt_txt);
    dateThree.innerHTML = formatDate(data.list[21].dt_txt);

    dayOne.innerHTML = `${data.list[5].main.temp}&deg;F`;
    dayTwo.innerHTML = `${data.list[13].main.temp}&deg;F`;
    dayThree.innerHTML = `${data.list[21].main.temp}&deg;F`;

    const iconOneSrc = `https://openweathermap.org/img/w/${data.list[5].weather[0].icon}.png`;
    const iconTwoSrc = `https://openweathermap.org/img/w/${data.list[13].weather[0].icon}.png`;
    const iconThreeSrc = `https://openweathermap.org/img/w/${data.list[21].weather[0].icon}.png`;
    
    let descOne = data.list[5].weather[0].description;
    let descTwo = data.list[13].weather[0].description;
    let descThree = data.list[21].weather[0].description;

    iconOne.setAttribute('src', iconOneSrc);
    iconTwo.setAttribute('src', iconTwoSrc);
    iconThree.setAttribute('src', iconThreeSrc);

    iconOne.setAttribute('alt', descOne);
    iconTwo.setAttribute('alt', descTwo);
    iconThree.setAttribute('alt', descThree);

    captionDescOne.textContent = `${descOne}`;
    captionDescTwo.textContent = `${descTwo}`;
    captionDescThree.textContent = `${descThree}`;
}

async function apiFetchThree() {
    try{
        const response = await fetch(url3);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            displayResultsThree(data);
        }else {
            throw Error (await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}
apiFetchThree();

