const date = new Date();
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function getFirstDay(month) { //returns the index of the first day of the month, 0-6
    return new Date(date.getFullYear(), month, 1).getDay()
}

function getLastDate(month) { //returns the last date of the month, 28-31
    return new Date(date.getFullYear(), month, 0).getDate()
}

document.querySelector('.date p').innerHTML=date.toDateString()

const renderCalendar = () =>{
    let days = "" //reinitializes the days string to blank

    document.querySelector('.date h1').innerHTML= months[date.getMonth()] //displays the selected month in the header
    
    for(let i = getFirstDay(date.getMonth()); i > 0; i--){ //prepends the month with up to the last 6 days of the previous month
        days += `<div class = "prev-date">${getLastDate(date.getMonth()) - i + 1}</div>`;
    }
    
    for(let i = 1; i <= getLastDate(date.getMonth()+1); i++){ //gets the days of the month
        if(i === date.getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()){//highlights the current day
            days += `<div class = "this-date">${i}</div>`
        } else{
        days += `<div>${i}</div>`;
        }
    }
    
    for(let i = 0; i < 7-getFirstDay(date.getMonth()+1); i++){//appends up to the first 6 days of the next month
        days += `<div class = "next-date">${i}</div>`
    }

    document.querySelector('.days').innerHTML = days;
}

document.querySelector('.prev').addEventListener('click', () => { //clicking the < makes it go back a month
    date.setMonth(date.getMonth()-1);
    renderCalendar();
})
document.querySelector('.next').addEventListener('click', () => { //clicking the > makes it go forward a month
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})

renderCalendar()