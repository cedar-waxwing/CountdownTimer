//interval is 1000 milliseconds (1 second). Function executes every second.
//25 minutes in seconds is 1500 seconds

let project = setInterval(countdownTimer, 1000);

// Total number of minutes in seconds. 25 * 60. Global variable aka outside of the function. 
let total = 1500;

// remember -- % is remainder of x and y, while / is quotient of x and y
function countdownTimer() {
//Referencing html to display the timer
    let display = document.getElementById("RachelsTimer");
    //let audio = new Audio("https://www.youtube.com/embed/QqRLVFRe9AU");
    //originally I used parseInt for both to ensure they were #s not strings, but Math.floor allows me to just take the minutes and leave the remainder to the seconds.
    let minutes = Math.floor(total / 60);
    let seconds = (Math.floor((total%60) % 60)).toString().padStart(2,'0');
    if (total >= 0) {
        display.innerHTML = minutes + ":" + seconds;
        total = total - 1;
    }
    else if (total == 0) {
         clearInterval(countdownTimer);
         //audio.play();
         //return is included to indicate that the function is ended.
         return;
    }
}

//I used this to try to get the button to load last, but it hasn't worked as of yet.
//var btn = document.createElement("Button");
//btn.innerHTML = "What's happening?";
//document.body.appendChild(btn);