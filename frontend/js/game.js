'use strict';

const CANVAS = document.getElementById('game');
const CTX = CANVAS.getContext('2d');
const WIDTH = CANVAS.width;
const HEIGHT = CANVAS.height;

let secondsPassed;
let oldTimeStamp;
let fps;

// Draw image test
var enemyImage = new Image();
enemyImage.src = 'frontend/img/bandit.png';

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
    frames++;
    window.requestAnimationFrame(loop);
}

function draw() {
    CTX.clearRect(0, 0, WIDTH, HEIGHT); // Reset canvas frame
    CTX.font = '30px Arial';
    CTX.fillStyle = 'white';
    CTX.textAlign = 'left';
    CTX.fillText(`fps=${fps}`, 5, 30);

    CTX.drawImage(enemyImage, 100, 100);
}
