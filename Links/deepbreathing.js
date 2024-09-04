const breathText = document.getElementById('breath-text');
const circle = document.querySelector('.circle');

let cycleTime = 10000; // Total cycle time in ms
let breatheInTime = (cycleTime / 5) * 2;
let holdTime = cycleTime / 5;

function breatheAnimation() {
    breathText.innerText = 'Breathe In!';
    setTimeout(() => {
        breathText.innerText = 'Hold';
        setTimeout(() => {
            breathText.innerText = 'Breathe Out!';
        }, holdTime);
    }, breatheInTime);
}

setInterval(breatheAnimation, cycleTime);

// Initialize first cycle
breatheAnimation();

document.querySelector('.close-button').addEventListener('click', () => {
    window.location.href ="./relax.html";
});