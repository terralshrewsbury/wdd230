function generateCalendar(){
    const calendarBody = document.getElementById('calendar-body');
    let html = '';
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const totalDays = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < 6; i++) {
        html += '<tr>';
        for (let j = 0; j < 7; j++) {
            const dayIndex = i * 7 + j;
            const dayNumber = dayIndex - firstDayOfWeek + 1;
                if (dayNumber > 0 && dayNumber <= totalDays) {
                html += `<td>${dayNumber}</td>`;
                } else {
                html += '<td>&nbsp;</td>';
                }
            }
            html += '</tr>';
    }
    calendarBody.innerHTML = html;
}
generateCalendar();