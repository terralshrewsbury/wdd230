const visitsDisplay = document.querySelector(".visits");
let numVisits=Number(window.localStorage.getItem('numbVisits')) || 0;
if (numVisits !== 0){
    visitsDisplay.textContent = numVisits;
}else{
    visitsDisplay.textContent = 'This is your first visit! Welcome! 😊'
}
numVisits++;
localStorage.setItem('numbVisits',numVisits);
