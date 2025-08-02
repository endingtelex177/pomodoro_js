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
let i = localStorage.getItem("lastItem");
if (i == null){
    i = 1;
}

log_button.onclick = () => {
    let log_storage = timer_display.innerHTML;
    //added in element of div below the button to log in the timer
    addElement();
    //display output of log time but only will log if the timer is running
    function addElement(){
        const newP = document.createElement('p');
            if (log_storage == "00:00") {
                log_display.textContent = `Timer need to be running!`;
            } else {
            localStorage.setItem(i,log_storage);
            newP.textContent = `timestamp ${i}: ${localStorage.getItem(i)}`;
            log_display.appendChild(newP);
            //each added new element have its own ID 
            newP.setAttribute("id",`id${i}`);
            localStorage.setItem("lastItem",i);
            i++ 
            }
    }
}
localStorage.clear();