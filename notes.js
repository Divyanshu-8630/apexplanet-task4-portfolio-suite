const noteTitle = document.getElementById("noteTitle");
const noteText = document.getElementById("noteText");
const saveNoteBtn = document.getElementById("saveNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const noteMessage = document.getElementById("noteMessage");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  notesContainer.innerHTML = "";

  if (notes.length === 0) {
    notesContainer.innerHTML = "<p>No notes saved yet.</p>";
    return;
  }

  notes.forEach((note, index) => {
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");

    noteCard.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.text}</p>
      <div class="note-actions">
        <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
      </div>
    `;

    notesContainer.appendChild(noteCard);
  });
}

function saveNote() {
  const title = noteTitle.value.trim();
  const text = noteText.value.trim();

  if (title === "" || text === "") {
    noteMessage.style.color = "#dc2626";
    noteMessage.textContent = "Please fill in both title and note.";
    return;
  }

  notes.push({ title, text });
  localStorage.setItem("notes", JSON.stringify(notes));

  noteTitle.value = "";
  noteText.value = "";
  noteMessage.style.color = "#16a34a";
  noteMessage.textContent = "Note saved successfully.";

  displayNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

saveNoteBtn.addEventListener("click", saveNote);

displayNotes();
