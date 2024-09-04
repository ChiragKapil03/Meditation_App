const breathText = document.getElementById('breath-text');
const countdown = document.getElementById('countdown');

let breatheInTime = 4;  // Duration for "Breathe In"
let holdTime = 7;       // Duration for "Hold"
let breatheOutTime = 8;  // Duration for "Breathe Out"

function updateCountdown(timeLeft) {
    countdown.innerText = `${timeLeft}s`;
}

function startPhase(phaseTime, phaseText, nextPhaseCallback) {
    breathText.innerText = phaseText;
    updateCountdown(phaseTime);
    
    let interval = setInterval(() => {
        phaseTime--;
        updateCountdown(phaseTime);
        if (phaseTime <= 0) {
            clearInterval(interval);
            nextPhaseCallback();
        }
    }, 1000);
}

function breatheAnimation() {
    startPhase(breatheInTime, 'Breathe In!', () => {
        startPhase(holdTime, 'Hold', () => {
            startPhase(breatheOutTime, 'Breathe Out!', breatheAnimation);
        });
    });
}

breatheAnimation();

document.querySelector('.close-button').addEventListener('click', () => {
    window.location.href = "./relax.html";
});