/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function displayDate(){
    var today = new Date();
    let month = today.getMonth() + 1
    let day = today.getDate()
    let year = today.getFullYear()
    month = checkTime(month)
    day = checkTime(day)
    document.getElementById('date').innerHTML =  month + "-" + day + "-" + year;
}

