let name = prompt("Enter your name :)");
title.innerText += `Hello ${name}, Welcome to LetsUpgrade Community :)`;   

const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000);

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

