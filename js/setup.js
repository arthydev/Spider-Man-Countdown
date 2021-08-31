import countdown from "./app.js";

const launchDate = new countdown("16 December 2021 00:00:00 GMT-0300");
console.log("Lançamento : " + launchDate.total)
const times = document.querySelectorAll("[data-time]")

function showTime(){
    times.forEach((time, index) =>{
        time.innerHTML = launchDate.total[index]
    })

}
showTime()
setInterval(showTime, 1000)

