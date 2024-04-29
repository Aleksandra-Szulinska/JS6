const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function loadNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
}

function saveNotes() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

loadNotes();

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Delete-Note-IMG.png";
    img.className = "delete-note";
    notesContainer.appendChild(inputBox).appendChild(img);

    img.addEventListener("click", () => {
        img.parentNode.remove();
        saveNotes();
    });

    saveNotes();
});

notesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-note")) {
        event.target.parentNode.remove();
        saveNotes();
    }
});
