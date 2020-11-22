document.getElementById('fontsize').onchange = fontsize;
document.getElementById('animation').onchange = animation;
document.getElementById('start').onclick = startAnimation;
document.getElementById('stop').onclick = stopAnimation;
document.getElementById('turbo').onclick = turboSpeed;

let animationArray = [];
let animationIntervalID;
let speed = 250;

toggleButtons("initial");


function turboSpeed() {

    if (this.checked === true) {
        clearInterval(animationIntervalID);
        speed = 50;
        startAnimation();
    } else {
        clearInterval(animationIntervalID);
        speed = 250;
        startAnimation();
    }
}

function startAnimation() {
    toggleButtons('start');
    const textArea = document.getElementById("text");
    let i = 0;
    animationIntervalID = setInterval(function () {
        if (i < animationArray.length) {
            textArea.textContent = animationArray[i];
        } else {
            i = 0;
            textArea.textContent = animationArray[i];
        }
        i++;
    }, speed);
}

function stopAnimation() {
    toggleButtons('stop');
    clearInterval(animationIntervalID);
}

function fontsize() {
    const size = this.value;
    const textArea = document.getElementById("text");
    textArea.style.fontSize = parseInt(size) + 'pt';
}
function animation() {
    const target = this.value;
    const textArea = document.getElementById("text");
    if (target !== "Blank") {
        animationArray = ANIMATIONS[target].split("=====\n");
        toggleButtons('stop');
    } else {
        toggleButtons("initial");
    }

}

function toggleButtons(clickedButton) {
    const stop = document.getElementById("stop");
    const start = document.getElementById("start");

    if (clickedButton === 'start') {
        stop.disabled = false;
        start.disabled = true;
    } else if (clickedButton == 'stop') {
        start.disabled = false;
        stop.disabled = true;
    } else {
        start.disabled = true;
        stop.disabled = true;
    }
}

