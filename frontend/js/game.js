'use strict';

const CANVAS = document.getElementById('game');
const CTX = CANVAS.getContext('2d');
const WIDTH = CANVAS.width;
const HEIGHT = CANVAS.height;

let debug = false;

let secondsPassed;
let oldTimeStamp;
let fps;

window.onload = init();

function init() {
    // Request first frame
    window.requestAnimationFrame(loop);
}

function loop(timeStamp) {
    // Calculate frames per seconds
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    fps = Math.round(1 / secondsPassed);

    draw(fps);
    window.requestAnimationFrame(loop);
}

function draw() {
    CTX.clearRect(0, 0, WIDTH, HEIGHT); // Reset canvas frame
    if (debug) {
        CTX.font = '30px Arial';
        CTX.fillStyle = 'white';
        CTX.textAlign = 'left';
        CTX.fillText(`fps=${fps}`, 5, 30);
    }
}

CANVAS.addEventListener('keypress', (e) => {
    if(e.code === 'Digit1' && debug === false) {
        debug = true;
    } else {
        debug = false;
    }
});
