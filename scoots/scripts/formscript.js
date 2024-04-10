document.addEventListener('DOMContentLoaded', function() {
    const rentalNumberInput = document.getElementById('rentalNumber');
    const rentalNumber = generateRentalNumber();
    rentalNumberInput.value = rentalNumber;
});

document.getElementById('period').addEventListener('click',() =>{
    const halfOption = document.querySelector('#period option[value="half"]');
    const start = document.getElementById('startdates').value;
    const end = document.getElementById('enddates').value;

    if (start === end){
        halfOption.disabled = false;
    }else{
        halfOption.disabled = true;
    }
})

function generateRentalNumber(){
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random()*(max - min + 1))+ min;
}

function getUserCountry() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const countryCode = data.country_calling_code;
            const phoneInput = document.getElementById('phone');
            phoneInput.value = countryCode + ' ' + phoneInput.value;
        })
        .catch(error => console.error('Error fetching user country:', error));
}

window.addEventListener('load', getUserCountry);

document.getElementById('country').addEventListener('input', () => {
    const country = document.getElementById('country');
    const inputValue = country.value.toLowerCase();
    
    if (inputValue === 'us' || 
        inputValue === 'usa' || 
        inputValue === 'united states' || 
        inputValue === 'united states of america') {
        
        if (!document.getElementById('stateInput')) {
            const additionalInput = document.createElement('input');
            additionalInput.type = 'text';
            additionalInput.placeholder = 'State';
            additionalInput.name = 'state';
            additionalInput.id = 'stateInput'; // Add an id to identify the input field
            country.insertAdjacentElement('afterend', additionalInput);
        }
    } else {
        // If the input value doesn't match, remove the additional input field if it exists
        const additionalInput = document.getElementById('stateInput');
        if (additionalInput) {
            additionalInput.remove();
        }
    }
});

document.getElementById('yes').addEventListener('change', () => {
    const cruiseYes = document.getElementById('yes');
    const cruiseLabel = document.querySelector('label[for="yes"]');
    
    if (cruiseYes.checked) {
        const additionalInput = document.createElement('input');
        additionalInput.type = 'text';
        additionalInput.placeholder = 'Cruise Liner';
        additionalInput.id = 'cruiselineInput';
        additionalInput.name= 'cruiseLiner';
        additionalInput.required = true; 
        cruiseLabel.insertAdjacentElement('afterend', additionalInput);
        
        const additionalInputship = document.createElement('input');
        additionalInputship.type = 'text';
        additionalInputship.placeholder = 'Ship Name';
        additionalInputship.id = 'ShipsName';
        additionalInputship.name = 'shipsName';
        additionalInputship.required = true; 
        additionalInput.insertAdjacentElement('afterend', additionalInputship);
    } 
});

document.getElementById('no').addEventListener('change', () => {
    const additionalInput = document.getElementById('cruiselineInput');
        const additionalInputship = document.getElementById('ShipsName');
        if (additionalInput) {
            additionalInput.remove();
        }
        if (additionalInputship) {
            additionalInputship.remove();
        }
});

document.getElementById('rentalForm').addEventListener('submit', function(event) { 

    const formData = new FormData(this);
    const queryParams = new URLSearchParams(formData).toString();

    const redirectURL = 'thankyou.html?' + queryParams;

    window.location.href = redirectURL;
});

