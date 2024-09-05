let name = document.getElementById('name');
let logInBtn = document.getElementById('logIn');
let firstLetter = document.getElementById('firstLetter');

if (localStorage.getItem('userName')) {
    logInBtn.style.display = "none";
    name.textContent = `Hi ${localStorage.getItem('userName').toLocaleUpperCase()} 👋`;
    firstLetter.textContent = `${localStorage.getItem('userName').charAt(0).toLocaleUpperCase()}`;
}

let btn = document.getElementById("button");
let text = document.getElementById("text-area");
let notes_container = document.getElementById("notes_container");
let color = document.getElementById("color");
color.value = '#00ffa1';
let color_font = document.getElementById("color-text"); // Text color input
color_font.value = '#000000'; // Default to black for the text color
let message = document.getElementById("message");

function addNotes() {
    if (text.value === "") {
        alert("Please enter some text");
        return;
    }

    let note = {
        text: text.value,
        bgColor: color.value,
        fontColor: color_font.value, // Store chosen text color
        timestamp: getCurrentDateTime()
    };

    let notes = getStoredNotes();
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));

    displayNotes();

    text.value = "";
}

function getStoredNotes() {
    let storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
}

function displayNotes() {
    notes_container.innerHTML = ""; // Clear container before rendering
    let notes = getStoredNotes();

    if (notes.length === 0) {
        message.innerText = "You haven't added any note yet.";
    } else {
        message.innerText = "";
        notes.forEach((note, index) => {
            let div = document.createElement("div");
            let p = document.createElement("p");
            let cross_btn = document.createElement("button");
            let dateTime = document.createElement("div");
            let contDiv = document.createElement('div');
            
            dateTime.textContent = note.timestamp;
            dateTime.style.fontSize = '10px';
            div.appendChild(contDiv);
            contDiv.appendChild(p);
            contDiv.appendChild(cross_btn);
            contDiv.style.cssText = `display :flex; justify-content: space-between;`;
            div.appendChild(dateTime);
            div.style.cssText = `
                display :flex;
                flex-direction: column;
                justify-content: space-between;
                min-width: 150px;
                min-height: 150px;
                border-radius: 5px;
                padding: 5px;
                box-shadow: 2px 2px 4px gray;
                background-color: ${note.bgColor};
            `;
            div.style.overflowWrap = 'break-word';

            p.innerText = note.text;
            p.style.color = note.fontColor; // Apply the stored text color

            cross_btn.innerText = 'X';
            cross_btn.style.cssText = `width:20px; height:20px; border: 0px; font-weight:800; background-color: ${note.bgColor}; color: ${note.fontColor};`;
            cross_btn.addEventListener('mouseover', function () {
                cross_btn.style.boxShadow = '1px 1px 2px rgba(0, 0, 0, 0.3)';
                cross_btn.style.cursor = 'pointer';
            });
            cross_btn.addEventListener('mouseout', function () {
                cross_btn.style.boxShadow = 'none';
            });
            cross_btn.addEventListener("click", function () {
                deleteNote(index);
            });

            notes_container.appendChild(div);
            notes_container.style.cssText = `display:flex; gap:20px; padding:20px; flex-wrap: wrap;`;
        });
    }
}

function deleteNote(index) {
    let notes = getStoredNotes();
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

function getCurrentDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    return `${date} ${time}`;
}

// Load notes on page load
window.onload = function () {
    displayNotes();
};

btn.addEventListener("click", addNotes);