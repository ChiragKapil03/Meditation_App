let name = document.getElementById('name');
let logInBtn = document.getElementById('logIn');
let firstLetter = document.getElementById('firstLetter');
let body = document.getElementsByClassName('main')[0];
let loader = document.getElementById('loader');

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