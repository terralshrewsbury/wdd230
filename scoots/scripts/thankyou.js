const urlParams = new URLSearchParams(window.location.search);

const startdate = urlParams.get('startdates');
const enddate = urlParams.get('enddates');
const period = urlParams.get('period');
const vehicle = urlParams.get('vehicle');
const rentalNumber = urlParams.get('rentalNumber');
const phone = urlParams.get('phone');
const firstName = urlParams.get('firstName');
const lastName = urlParams.get('lastName');
const licence = urlParams.get('licence');
const email = urlParams.get('email');
const country = urlParams.get('country');
const stateAbbreviation = urlParams.get('state');
const cruise = urlParams.get('cruise');
const cruiseLiner = urlParams.get('cruiseLiner');
const shipsName = urlParams.get('shipsName');
const message = urlParams.get('message');

document.getElementById('name').textContent = `Name: ${firstName} ${lastName}`;
document.getElementById('licence').textContent = `Licence Number: ${licence}`;
document.getElementById('period').textContent = `Duration of rental: ${period} day`;
document.getElementById('vehicle').textContent = `Your vehicle choice: ${vehicle}`;
document.getElementById('rentalNumber').textContent = `Your Rental Number: ${rentalNumber}`;
document.getElementById('phone').textContent = `Phone Number: ${phone}`;
document.getElementById('email').textContent = `Email Address: ${email}`;
document.getElementById('country').textContent = `Country of Residence: ${country}`;

if (cruise === 'on') {
    if(cruiseLiner === null){
        null
    }else {
    const additionalInput = document.createElement('p');
    additionalInput.textContent = `Cruise Liner: ${cruiseLiner}\nShip Name: ${shipsName}`;
    document.getElementById('cruise').insertAdjacentElement('afterend', additionalInput);
    }
}

if (message === ''){
    null
}else{
    document.getElementById('message').textContent = `Message: ${message}`;
}

if (country.toLowerCase().trim() === 'us' || 
    country.toLowerCase().trim() === 'usa' || 
    country.toLowerCase().trim() === 'united states' || 
    country.toLowerCase().trim() === 'united states of america') {
    const stateParagraph = document.createElement('p');
    stateParagraph.textContent = `State: ${stateAbbreviation}`;
    document.getElementById('country').insertAdjacentElement('afterend', stateParagraph);
}

if (startdate === enddate) {
    document.getElementById('dates').textContent = `Date: ${startdate}`;
} else {
    document.getElementById('dates').textContent = `Date: ${startdate} - ${enddate}`;
    duration = document.getElementById('period');
    duration.remove();
}


