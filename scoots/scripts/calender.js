document.addEventListener('DOMContentLoaded', function() {
    const calendarMonth = document.getElementById('calendarMonth');
    const calendarBody = document.querySelector('#calendar tbody');
    const startInput = document.getElementById('startdates');
    const endInput = document.getElementById('enddates');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    let startDate = null;
    let endDate = null;
    let currentDisplayedMonth = new Date().getMonth();

    function createCalendar(month, year) {
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let dayCount = 1;
        let html = '';
        const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
        calendarMonth.textContent = `${monthName}`;

        for (let i = 0; i < 6; i++) {
            html += '<tr>';
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                    html += '<td></td>';
                } else if (dayCount <= daysInMonth) {
                    const date = new Date(year, month, dayCount);
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
        addCellEventListeners();
    }

    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${month}-${day}`;
    }

    function addCellEventListeners() {
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

    function updateCalendar() {
        const today = new Date();
        const currentYear = today.getFullYear();
        createCalendar(currentDisplayedMonth, currentYear);
    }

    prevMonthBtn.addEventListener('click', function() {
        currentDisplayedMonth--;
        if (currentDisplayedMonth < 0) {
            currentDisplayedMonth = 11;
        }
        updateCalendar();
    });

    nextMonthBtn.addEventListener('click', function() {
        currentDisplayedMonth++;
        if (currentDisplayedMonth > 11) {
            currentDisplayedMonth = 0;
        }
        updateCalendar();
    });

    document.getElementById('clearDates').addEventListener('click', function(event) {
        event.preventDefault();
        resetSelection();
    });

    updateCalendar();
});
