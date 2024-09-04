let name = document.getElementById('name');
let logInBtn = document.getElementById('logIn');
let firstLetter = document.getElementById('firstLetter');
let body = document.getElementsByClassName('main')[0];
let loader = document.getElementById('loader');
let songType = document.getElementById('select');
let All = document.getElementsByClassName('all');
let instrumental = document.getElementsByClassName('instrumental');
let natureMelodies = document.getElementsByClassName('natureMelodies');
let lofi = document.getElementsByClassName('lofi');
let motivating = document.getElementsByClassName('motivating');
let ambient = document.getElementsByClassName('ambient');

setTimeout(() => {
    body.style.display="none";
    setTimeout(() => {
        body.style.display="block";
        loader.style.display='none';
    }, 3500);
}, 0);

if(localStorage.getItem('userName')){
    logInBtn.style.display="none";
    name.textContent =`Hi ${localStorage.getItem('userName').toLocaleUpperCase()} 👋`;
    firstLetter.textContent = `${localStorage.getItem('userName').charAt(0).toLocaleUpperCase()}`;
}

songType.addEventListener('input',()=>{
    const selectedValue = songType.value;

    for (let i = 0; i < All.length; i++) {
        All[i].style.display = "none";
    }

    switch (selectedValue) {
        case "all":
            for (let i = 0; i < All.length; i++) {
                All[i].style.display = "block";
            }
            break;
        case "instrumental":
            for (let i = 0; i < instrumental.length; i++) {
                instrumental[i].style.display = "block";
            }
            break;
        case "natureMelodies":
            for (let i = 0; i < natureMelodies.length; i++) {
                natureMelodies[i].style.display = "block";
            }
            break;
        case "lofi":
            for (let i = 0; i < lofi.length; i++) {
                lofi[i].style.display = "block";
            }
            break;
        case "motivating":
            for (let i = 0; i < motivating.length; i++) {
                motivating[i].style.display = "block";
            }
            break;
        case "ambient":
            for (let i = 0; i < ambient.length; i++) {
                ambient[i].style.display = "block";
            }
            break;
        default:
            break;
    }
})