'use strict';

const CANVAS = document.getElementById('game');
const CTX = CANVAS.getContext('2d');
const WIDTH = CANVAS.width;
const HEIGHT = CANVAS.height;

let debug = true;

let secondsPassed;
let oldTimeStamp;
let fps;
let gameState = 0;

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
        CTX.font = '15px Arial';
        CTX.fillStyle = 'white';
        CTX.textAlign = 'left';
        CTX.fillText(`fps=${fps}, gameState=${gameState}`, 2, 15);
    }
}

CANVAS.addEventListener('keypress', (e) => {
    if (e.code === 'Digit1' && debug === false) {
        debug = true;
    } else {
        debug = false;
    }
});
