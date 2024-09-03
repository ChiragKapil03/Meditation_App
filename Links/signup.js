let userName = document.getElementById('userName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let createBtn = document.getElementById('createButton');

createBtn.addEventListener('click', () => {

    if (localStorage.getItem('emailId') !== email.value) {

        localStorage.setItem("userName", userName.value);
        localStorage.setItem("emailId", email.value);
        localStorage.setItem("password", password.value);
        
        alert('Account Created');
        setTimeout(() => {
            window.location.href = "./login.html";
        }, 1000);
    } else {
        alert('Already a user');
    }
});