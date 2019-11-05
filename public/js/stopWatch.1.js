var startTimerButton = document.querySelector('.startTimer');
var pauseTimerButton = document.querySelector('.pauseTimer');
var timerDisplay = document.querySelector('.timer');
var timerDisplay2 = document.querySelector('.timer2');
var timerDisplay3 = document.querySelector('.timer3');

var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;
//second
var startTime2;
var updatedTime2;
var difference2;
var tInterval2;
var savedTime2;
var paused2 = 0;
var running2 = 0;
//thrid timer
var startTime3;
var updatedTime3;
var difference3;
var tInterval3;
var savedTime3;
var paused3 = 1;
var running3 = 0;

window.addEventListener('beforeunload', (event) => {
  event.returnValue = `Are you sure you want to leave?`;

});




function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    //timerDisplay.style.background = "#FF0000";
    timerDisplay.style.cursor = "auto";
    timerDisplay.style.color = "red";
    startTimerButton.classList.add('lighter');
    pauseTimerButton.classList.remove('lighter');
    startTimerButton.style.cursor = "auto";
    pauseTimerButton.style.cursor = "pointer";
    if(!running3){

      clearInterval(tInterval3);
      savedTime3 = 0;
      difference3 = 0;
      paused3 = 0;
      running3 = 1;
      timerDisplay3.innerHTML = '00:00:00';
      //timerDisplay2.style.background = "#A90000";
      timerDisplay3.style.color = "red";
      timerDisplay3.style.cursor = "pointer";

      startTime3 = new Date().getTime();
      tInterval3 = setInterval(getShowTime3, 1);
    }
    if (!difference2){
    // if timer never started, don't allow start button to do anything to the second timer
    }
    else if (!paused2) {
    clearInterval(tInterval2);
    savedTime2 = difference2;
    paused2 = 1;
    running2 = 0;
    //timerDisplay2.style.background = "#A90000";
    timerDisplay2.style.color = "black";
    timerDisplay2.style.cursor = "pointer";
    }
  }
}

function pauseTimer(){
  if(!paused3){

    clearInterval(tInterval3);
    savedTime3 = 0;
    difference3 = 0;
    paused3 = 1;
    running3 = 0;
    timerDisplay3.innerHTML = '00:00:00';
    //timerDisplay2.style.background = "#A90000";
    timerDisplay3.style.color = "CornflowerBlue";
    timerDisplay3.style.cursor = "pointer";

    startTime3 = new Date().getTime();
    tInterval3 = setInterval(getShowTime3, 1);

  }

  if (!difference){
    // if timer never started, don't allow pause button to do anything
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    //timerDisplay.style.background = "#A90000";
    timerDisplay.style.color = "black";
    timerDisplay.style.cursor = "pointer";
    startTimerButton.classList.remove('lighter');
    pauseTimerButton.classList.add('lighter');
    startTimerButton.style.cursor = "pointer";
    pauseTimerButton.style.cursor = "auto";
    if(!running2){
      startTime2 = new Date().getTime();
      tInterval2 = setInterval(getShowTime2, 1);
      paused2 = 0;
      running2 = 1;
      //timerDisplay2.style.background = "#FF0000";
      timerDisplay2.style.cursor = "auto";
      timerDisplay2.style.color = "CornflowerBlue";
    }

  }

}

// reset button was created, but in the end i decided not to use it - so it is not used
function resetTimer(){
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;

  timerDisplay.innerHTML = '00:00:00';
  //timerDisplay.style.background = "#A90000";
  timerDisplay.style.color = "black";
  timerDisplay.style.cursor = "pointer";
  //second

  clearInterval(tInterval2);
  savedTime2 = 0;
  difference2 = 0;
  paused2 = 0;
  running2 = 0;

  timerDisplay2.innerHTML = '00:00:00';
  //timerDisplay2.style.background = "#A90000";
  timerDisplay2.style.color = "black";
  timerDisplay2.style.cursor = "pointer";

  //third

  clearInterval(tInterval3);
  savedTime3 = 0;
  difference3 = 0;
  paused3 = 0;
  running3 = 0;

  timerDisplay3.innerHTML = '00:00:00';
  //timerDisplay2.style.background = "#A90000";
  timerDisplay3.style.color = "black";
  timerDisplay3.style.cursor = "pointer";


}

function getShowTime(){
  updatedTime = new Date().getTime();


  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;

  } else {
    difference =  updatedTime - startTime;

  }
  // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds;

}

function getShowTime2(){

  updatedTime2 = new Date().getTime();

  if (savedTime2){
    difference2 = (updatedTime2 - startTime2) + savedTime2;

  } else {
    difference2 =  updatedTime2 - startTime2;

  }

  var hours2 = Math.floor((difference2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((difference2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((difference2 % (1000 * 60)) / 1000);
  var milliseconds2 = Math.floor((difference2 % (1000 * 60)) / 100);

  hours2 = (hours2 < 10) ? "0" + hours2 : hours2;
  minutes2 = (minutes2 < 10) ? "0" + minutes2 : minutes2;
  seconds2 = (seconds2 < 10) ? "0" + seconds2 : seconds2;
  milliseconds2 = (milliseconds2 < 100) ? (milliseconds2 < 10) ? "00" + milliseconds2 : "0" + milliseconds2 : milliseconds2;
  timerDisplay2.innerHTML = hours2 + ':' + minutes2 + ':' + seconds2;
}

function getShowTime3(){

  updatedTime3 = new Date().getTime();

  if (savedTime3){
    difference3 = (updatedTime3 - startTime3) + savedTime3;

  } else {
    difference3 =  updatedTime3 - startTime3;

  }

  var hours3 = Math.floor((difference3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((difference3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((difference3 % (1000 * 60)) / 1000);
  var milliseconds3 = Math.floor((difference3 % (1000 * 60)) / 100);

  hours3 = (hours3 < 10) ? "0" + hours3 : hours3;
  minutes3 = (minutes3 < 10) ? "0" + minutes3 : minutes3;
  seconds3 = (seconds3 < 10) ? "0" + seconds3 : seconds3;
  milliseconds3 = (milliseconds3 < 100) ? (milliseconds3 < 10) ? "00" + milliseconds3 : "0" + milliseconds3 : milliseconds3;
  timerDisplay3.innerHTML = hours3 + ':' + minutes3 + ':' + seconds3;
}