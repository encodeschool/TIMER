let[second, minutes, hours] = [0,0,0];
let display = document.querySelector('.displayTime');
let timer = null;

function stopWatch() {
    second++;
    if (second == 60) {
        second = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = second < 10 ? "0" + second : second;

    display.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [second, minutes, hours] = [0,0,0];
    display.innerHTML = "00:00:00";
}