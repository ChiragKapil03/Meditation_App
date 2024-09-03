let userName = document.getElementById('userName');
let password = document.getElementById('password');
let forgotPass = document.getElementById('forgotPass');
let loginBtn = document.getElementById('loginBtn');


loginBtn.addEventListener('click', () =>{
    if(localStorage.getItem('userName')!==userName.value || localStorage.getItem('password')!==password.value){
        userName.value="";
        password.value="";
        alert('Invalid UserName or Password')
    }
    if(localStorage.getItem('password')===password.value && localStorage.getItem('userName')===userName.value){
        window.location.href = "../index.html";
    }
})

forgotPass.addEventListener('click',()=>{
    localStorage.clear('userName');
    localStorage.clear('password');
    localStorage.clear('emailId');
    alert('Create Account Again');
    window.location.href = "./signup.html";
})