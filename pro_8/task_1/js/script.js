
var timer = document.getElementById("timer");
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");

var intervalId = null;
var sec = 0;
var min = 0;
var hr = 0;

function start() {
    if (intervalId == null) {
        intervalId = setInterval(update, 1000);
    }
}

function stop() {
    if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function reset() {
    sec = 0;
    min = 0;
    hr = 0;

    render();
}

function update() {
    sec++;

    if (sec == 60) {
        min++;
        sec = 0;
    }

    if (min == 60) {
        hr++;
        min = 0;
    }

    render();
}

function render() {

    var secStr = sec.toString().padStart(2, "0");
    var minStr = min.toString().padStart(2, "0");
    var hrStr = hr.toString().padStart(2, "0");
    timer.innerHTML = hrStr + ":" + minStr + ":" + secStr;
}
