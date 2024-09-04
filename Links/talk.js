let name = document.getElementById('name');
let logInBtn = document.getElementById('logIn');
let firstLetter = document.getElementById('firstLetter');

if(localStorage.getItem('userName')){
    logInBtn.style.display="none";
    name.textContent =`Hi ${localStorage.getItem('userName').toLocaleUpperCase()} 👋`;
    firstLetter.textContent = `${localStorage.getItem('userName').charAt(0).toLocaleUpperCase()}`;
}