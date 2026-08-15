let scoreStoreH = document.getElementById("score-h");
let scoreStoreG = document.getElementById("score-G");
let foulsCounterH = document.getElementById("foul-counter-H");
let foulsCounterG = document.getElementById("foul-counter-G");
let alert = document.getElementById("alert");
let timeDisplay = document.getElementById("timee-Display");
let pointCounterH = 0;
let foulCounterH = 0;
let pointCounterG = 0;
let foulCounterG = 0;
let time = 600;
let interval;

function pointPlus1() {
  pointCounterH += 1;
  scoreStoreH.innerText = pointCounterH;
}
function pointPlus2() {
  pointCounterH += 2;
  scoreStoreH.innerText = pointCounterH;
}
function pointPlus3() {
  pointCounterH += 3;
  scoreStoreH.innerText = pointCounterH;
}

function pointPlus1G() {
  pointCounterG += 1;
  scoreStoreG.innerText = pointCounterG;
}
function pointPlus2G() {
  pointCounterG += 2;
  scoreStoreG.innerText = pointCounterG;
}
function pointPlus3G() {
  pointCounterG += 3;
  scoreStoreG.innerText = pointCounterG;
}

function foulIncrement() {
  foulCounterH += 1;
  foulsCounterH.innerText = foulCounterH;
}
function foulDecrement() {
  foulCounterH -= 1;
  foulsCounterH.innerText = foulCounterH;
}

function foulIncrementG() {
  foulCounterG += 1;
  foulsCounterG.innerText = foulCounterG;
}
function foulDecrementG() {
  foulCounterG -= 1;
  foulsCounterG.innerText = foulCounterG;
}

function timer() {
  interval = setInterval(function () {
    time--;
    let min = Math.floor(time / 60);
    let sec = time % 60;
    timeDisplay.innerHTML = min + ":" + sec;
    if (time <= 0) {
      clearInterval(interval);
      timeDisplay.innerHTML = "00:00";
      alert.innerHTML = "Time out!";
    }
  }, 1000);
}

function pause() {
  clearInterval(interval);
}

function restart() {
  clearTimeout(interval);
  timeDisplay.innerHTML = "10:00";
  time = 600;
  scoreStoreH.innerText = 0;
  scoreStoreG.innerText = 0;
  foulsCounterH.innerText = 0;
  foulsCounterG.innerText = 0;
  alert.innerHTML = "";
}
