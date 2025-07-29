//h1 element of the timer 

//the timer identity
let timer_display = document.getElementById("timer");
//
// log identity 
let log_display = document.getElementById("log_output");
// title bar 
let title_bar = document.getElementById("live_title");

// a button that that the input and display the timer from the user
const timer_button = document.getElementById("button_timer")
const log_button = document.getElementById("log_timer");
let running_timer;

timer_button.onclick = ()=> {
    clearInterval(running_timer);
    let user_value = document.getElementById("input_timer").value;
    // only take value more than 0 and less then 60
    if (user_value > 0 && user_value <= 60) {
        title_bar.innerHTML = timer_display.innerHTML = `${user_value}:00`;
        
        // saperate the minute into hours and minutes and seconds HH:MM:SS
        // convert total user input from minutes into second instead. --todo
        let totalSec = user_value * 60;

    running_timer = setInterval(()=>{
        let minutes = Math.floor(totalSec / 60);
        let seconds = totalSec % 60;
        // display the timer into the title bar and the main display 
       title_bar.innerHTML = timer_display.innerHTML = `${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`
        totalSec--
        if (totalSec < 0){clearInterval(running_timer);}
    },1000)
}
}
//adeed clickable button for looging in timer
// using lastItem as a key to obtain the last item from localStorage. 
let storeLocal = []; 
let i = localStorage.getItem("lastItem");
if (i == null){
    i = 0;
}
log_button.onclick = () => {
    i++ 
    let log_output = timer_display.innerHTML;
    localStorage.setItem(i,log_output);
    //added in element of H2 below the button to log in the timer
    addElement();

    function addElement(){
        const newP = document.createElement("p");
        const newDisplay = document.createTextNode(`timestamp ${i}: ${localStorage.getItem(i)}`)
        newP.appendChild(newDisplay);
        document.body.insertBefore(newP,log_display);
    }
storeLocal.push(i);
localStorage.setItem("lastItem",i);
}