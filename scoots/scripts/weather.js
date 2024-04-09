const todaystemp=document.querySelector('#todaystemp');
const humitity=document.querySelector('#todayshumi');
const todaysIcon = document.querySelector('#todaysIcon')
const caption=document.querySelector('#todayscaption');
const high=document.querySelector('#hightemp');

const nextdate=document.querySelector('#nextdate');
const nexttemp= document.querySelector('#nexttemp');
const nextIcon = document.querySelector('#nextIcon');
const nextcaption= document.querySelector('#nextcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&appid=fba900f6dceb561f0f3c8c86d43c6b7f&units=imperial';
const nexturl= 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&appid=fba900f6dceb561f0f3c8c86d43c6b7f&units=imperial';

function displayResults(data) {
    todaystemp.innerHTML = `The current temperature is: ${data.main.temp}&deg;F`;
    humitity.innerHTML = `The humidity is: ${data.main.humidity}%`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    todaysIcon.setAttribute('src', iconSrc);
    todaysIcon.setAttribute('alt',desc);
    caption.textContent = `${desc}`;
    high.innerHTML = `${data.main.temp_max}&deg;F`;
}

function displaynextResults(nextdata){
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1); 
    targetDate.setHours(15, 0, 0, 0);
    nextdata.list.forEach(item =>{ 
        const itemDate = new Date(item.dt_txt);
        if (itemDate.getTime() === targetDate.getTime()){
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            nextdate.innerHTML = itemDate.toLocaleDateString(undefined, dateOptions);
            nexttemp.innerHTML = `The temperature at 3:00 p.m. will be: ${item.main.temp}&deg;F`;
            const nexticonSrc = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
            let nextdesc = item.weather[0].description;
            nextIcon.setAttribute('src', nexticonSrc);
            nextIcon.setAttribute('alt', nextdesc);
            nextcaption.textContent= nextdesc;
        }
    });
}





async function apiFetch() {
    try{
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }else {
            throw Error (await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}

apiFetch();

async function apinextFetch() {
    try{
        const response = await fetch(nexturl);
        if(response.ok) {
            const nextdata = await response.json();
            // console.log(nextdata);
            displaynextResults(nextdata);
        }else {
            throw Error (await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}
apinextFetch();

