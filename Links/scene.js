let name = document.getElementById('name');
let logInBtn = document.getElementById('logIn');
let firstLetter = document.getElementById('firstLetter');
let loader = document.getElementById('loader');
let body = document.getElementsByClassName('main')[0];

if(localStorage.getItem('userName')){
    logInBtn.style.display="none";
    name.textContent =`Hi ${localStorage.getItem('userName').toLocaleUpperCase()} 👋`;
    firstLetter.textContent = `${localStorage.getItem('userName').charAt(0).toLocaleUpperCase()}`;
}

setTimeout(() => {
    body.style.display="none";
    setTimeout(() => {
        body.style.display="block";
        loader.style.display='none';
    }, 3500);
}, 0);



let currentSceneIndex = 0;
const scenes = document.querySelectorAll('.scene');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const prevPreview = document.getElementById('prev-preview');
const nextPreview = document.getElementById('next-preview');

// Function to update the scene based on the current scene index
function updateScene() {
    scenes.forEach((scene, index) => {
        scene.style.display = (index === currentSceneIndex) ? 'flex' : 'none';
    });

    // Disable/enable buttons
    prevButton.disabled = (currentSceneIndex === 0);
    nextButton.disabled = (currentSceneIndex === scenes.length - 1);

    // Update preview boxes
    prevPreview.textContent = (currentSceneIndex > 0) ? `Scene ${currentSceneIndex}` : '';
    nextPreview.textContent = (currentSceneIndex < scenes.length - 1) ? `Scene ${currentSceneIndex + 2}` : '';

    // Update preview colors
    prevPreview.style.backgroundColor = (currentSceneIndex > 0) ? '#ddd' : '#ccc';
    nextPreview.style.backgroundColor = (currentSceneIndex < scenes.length - 1) ? '#ddd' : '#ccc';
}

// Initialize the first scene
updateScene();

// Event listener for Previous button
prevButton.addEventListener('click', () => {
    if (currentSceneIndex > 0) {
        currentSceneIndex--;
        updateScene();
    }
});

// Event listener for Next button
nextButton.addEventListener('click', () => {
    if (currentSceneIndex < scenes.length - 1) {
        currentSceneIndex++;
        updateScene();
    }
});