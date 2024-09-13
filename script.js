let name = document.getElementById('name');
let logInBtn = document.getElementById('logIn');
let quoteChange = document.getElementById('quoteChange');
let firstLetter = document.getElementById('firstLetter');



let quoteChangeArr = ['हर दिन एक नई शुरुआत है।', 'आपकी आत्मा में अनंत शक्ति है', 'ध्यान एक यात्रा है', 'शांत रहें, धैर्यवान रहें', 'आपका अंतर्मन ही आपकी सबसे बड़ी शक्ति है'];
let currentIndex1 = 1;
function getRandomQuote(){
    const nextQuote = quoteChangeArr[currentIndex1];
    currentIndex1 = (currentIndex1 + 1) % quoteChangeArr.length;
    return nextQuote;
}



if(localStorage.getItem('userName')){
    logInBtn.style.display="none";
    name.textContent =`Hi ${localStorage.getItem('userName').toLocaleUpperCase()} 👋`;
    firstLetter.textContent = `${localStorage.getItem('userName').charAt(0).toLocaleUpperCase()}`;
}


setInterval(() => {
    quoteChange.innerText = `${getRandomQuote()}`
    quoteChange.classList.remove('animate__animated', 'animate__zoomIn');
    void quoteChange.offsetWidth; 
    quoteChange.classList.add('animate__animated', 'animate__zoomIn');
}, 3000);

if(!localStorage.getItem('userName')){
    setTimeout(() => {
        alert("Log in or sign up to monitor your daily progress! 👉👉👉")
    }, 3000);

}