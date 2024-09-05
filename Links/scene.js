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

// Function to update scenes and handle video play/pause
function updateScene() {
    // Loop through each scene
    scenes.forEach((scene, index) => {
        const video = scene.querySelector('video');
        if (index === currentSceneIndex) {
            scene.style.display = 'flex'; // Show current scene
            video.currentTime = 0; // Reset video time to 0
            // video.play(); // 
        } else {
            scene.style.display = 'none'; // Hide other scenes
            video.pause(); // Pause video on hidden scenes
        }
    });


    prevButton.disabled = (currentSceneIndex === 0);
    nextButton.disabled = (currentSceneIndex === scenes.length - 1);

  
    prevPreview.textContent = (currentSceneIndex > 0) ? `Scene ${currentSceneIndex}` : '';
    nextPreview.textContent = (currentSceneIndex < scenes.length - 1) ? `Scene ${currentSceneIndex + 2}` : '';


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