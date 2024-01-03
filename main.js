let days = document.querySelector("#Days")
let hours = document.querySelector("#Hours")
let minutes = document.querySelector("#Minutes")
let second = document.querySelector("#Second")

let currentYear = new Date().getFullYear();

let timeRamadan = new Date ('March 10 2024 00:00:00');
function countdowntime() {
    let currentTime= new Date();
    let diff =timeRamadan.getTime()-currentTime.getTime() ;
    let d= Math.floor(diff/1000/60/60/24)
    let h= Math.floor(diff/1000/60/60) % 24;
    let m= Math.floor(diff/1000/60) %60;
    let s= Math.floor(diff/1000)%60;


    days.innerHTML=d;
   hours.innerHTML=h;
   minutes.innerHTML=m;
    second.innerHTML=s;
}

setInterval(countdowntime,1000);



// let time= new Date().getTime()
// console.log(time)