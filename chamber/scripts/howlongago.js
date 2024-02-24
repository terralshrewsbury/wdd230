function calculateDaysDifference(currentDate, storedDate) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((currentDate - storedDate) / oneDay));
    return diffDays;
}
function displayMessage() {
    const currentDate = new Date();
    const storedDate = localStorage.getItem('lastVisit');

    if (storedDate) {
      const diffDays = calculateDaysDifference(currentDate, new Date(storedDate));

        let message = '';
        if (diffDays === 1) {
            message = "1 day";
        } else {
            message = `${diffDays} days`;
        }
        document.querySelector('.howlongago').textContent = message;
    }
    localStorage.setItem('lastVisit', currentDate.toISOString());
}
window.onload = displayMessage;