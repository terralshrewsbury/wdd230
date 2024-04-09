const url = 'data/prices.json';

function inputPrice(data){
    const priceBody = document.getElementById('price_body');
    
    data.rentalType.forEach(function(item){
        let row= document.createElement('tr');
        
        let rentalType= document.createElement('td');
        rentalType.textContent = item.type;
        row.appendChild(rentalType);

        let maxPerson = document.createElement('td');
        maxPerson.textContent = item.max;
        row.appendChild(maxPerson);

        let halfDayRes= document.createElement('td');
        halfDayRes.textContent = item.halfRes;
        row.appendChild(halfDayRes);

        let fullDayRes= document.createElement('td');
        fullDayRes.textContent = item.fullRes;
        row.appendChild(fullDayRes);

        let halfWalk = document.createElement('td');
        halfWalk.textContent = item.halfWalk;
        row.appendChild(halfWalk);

        let fullWalk =document.createElement('td');
        fullWalk.textContent = item.fullWalk;
        row.appendChild(fullWalk);

        priceBody.appendChild(row);
    });
}
async function getPrice() {
    try{
        const response = await fetch(url);
        const data= await response.json();
        inputPrice(data);
    } catch (error) {
        console.error('Error fetching price data:',error);
    }
}
getPrice();