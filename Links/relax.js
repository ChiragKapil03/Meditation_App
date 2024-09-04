let name = document.getElementById('name');
let logInBtn = document.getElementById('logIn');
let firstLetter = document.getElementById('firstLetter');
let loader = document.getElementById('loader');
let body = document.getElementById('container');
let deepBreathingBtn = document.getElementById('dbBegin');
let tech478Btn = document.getElementById('Begin478');


setTimeout(() => {
    body.style.display="none";
    setTimeout(() => {
        body.style.display="flex";
        loader.style.display='none';
    }, 3500);
}, 0);
  
if(localStorage.getItem('userName')){
    logInBtn.style.display="none";
    name.textContent =`Hi ${localStorage.getItem('userName').toLocaleUpperCase()} 👋`;
    firstLetter.textContent = `${localStorage.getItem('userName').charAt(0).toLocaleUpperCase()}`;
}

deepBreathingBtn.addEventListener('click',()=>{
    window.location.href ="./deepbreathing.html";
})
tech478Btn.addEventListener('click',()=>{
    window.location.href ="./tech478.html";
})
