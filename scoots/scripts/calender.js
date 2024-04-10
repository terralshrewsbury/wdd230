document.addEventListener('DOMContentLoaded', function() {
    const calendarMonth = document.getElementById('calendarMonth');
    const calendarBody = document.querySelector('#calendar tbody');
    const startInput = document.getElementById('startdates');
    const endInput = document.getElementById('enddates');
    let startDate = null;
    let endDate = null;

    function createCalendar() {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentMonthlong = today.toLocaleString('default', { month: 'long' });
        const currentYear = today.getFullYear();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        let dayCount = 1;
        let html = '';
        calendarMonth.textContent = `${currentMonthlong}`

        for (let i = 0; i < 6; i++) {
            html += '<tr>';
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                    html += '<td></td>';
                } else if (dayCount <= daysInMonth) {
                    const date = new Date(currentYear, currentMonth, dayCount);
                    const formattedDate = formatDate(date);
                    html += `<td id="${formattedDate}">${dayCount}</td>`;
                    dayCount++;
                } else {
                    html += '<td></td>';
                }
            }
            html += '</tr>';
            if (dayCount > daysInMonth) {
                break;
            }
        }

        calendarBody.innerHTML = html;

        const calendarCells = calendarBody.querySelectorAll('td');
        calendarCells.forEach(cell => {
            cell.addEventListener('click', () => {
                const selectedDate = cell.id;
                if (!startDate) {
                    startDate = selectedDate;
                    startInput.value = startDate;
                    cell.classList.add('selected');
                } else if (!endDate) {
                    endDate = selectedDate;
                    endInput.value = endDate;
                    highlightDates(startDate, endDate);
                } else {
                    resetSelection();
                    startDate = selectedDate;
                    startInput.value = startDate;
                    cell.classList.add('selected');
                }
            });
        });
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${month}-${day}`;
    }

    function highlightDates(startDate, endDate) {
        const calendarCells = calendarBody.querySelectorAll('td');
        calendarCells.forEach(cell => {
            const date = cell.id;
            if (date >= startDate && date <= endDate) {
                cell.classList.add('selected');
            }
        });
    }

    function resetSelection() {
        startDate = null;
        endDate = null;
        startInput.value = '';
        endInput.value = '';
        const calendarCells = calendarBody.querySelectorAll('td');
        calendarCells.forEach(cell => {
            cell.classList.remove('selected');
        });
    }

    document.getElementById('clearDates').addEventListener('click', function(event) {
        event.preventDefault();
        resetSelection();
    });
    
createCalendar();
});
