export default function getCalendarMatrix(date) {
    
    const calendar = [];
    
    const preDate = new Date(date);
    preDate.setMonth(preDate.getMonth() - 1);

    const daysOfMonth = 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
    const preDaysOfMont = 32 - new Date(preDate.getFullYear(), preDate.getMonth(), 32).getDate();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    for(let i = firstDay - 2; i >= 0; i--) {
        calendar.push(-1*(preDaysOfMont - i));
    }
    
    for(let i = 1; i <= daysOfMonth; i++) {
        calendar.push(i);
    }

    let i = 1;
    while(calendar.length < 35) {
        calendar.push(-1 * i);
        i++;
    }

    if(calendar.length > 35) {
        while(calendar.length < 42) {
            calendar.push(-1 * i);
            i++;
        }
    }

    return calendar.map((_, i, curArr) => curArr.slice(i * 7, i* 7 + 7)).filter(week => week.length);
    

}
