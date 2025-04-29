# 📝 Custom Note Service (Frontend Mini Project)

A simple React-based note-taking application that allows users to add and view notes with data persisted in localStorage. Built as part of a 2-hour frontend assignment challenge.

---

## 🚀 Setup & Run Instructions

1. Clone the repo  
   `git clone https://github.com/yourusername/custom-note-app.git`

2. Navigate into the project folder  
   `cd Notes_APP`

3. Install dependencies  
   `npm install`

4. Start the development server  
   `npm run dev` or `npm start`

---

## 🎯 Project Overview

This application allows users to:

- Add new notes (with title and content)
- View a list of all saved notes
- Persist notes using localStorage (no backend)
- Switch between "Add Note" and "View Notes" views
- See loading and error feedback when interacting with storage

---

## 🧠 "Why?" Design Decisions

### 📦 Storage Strategy
- **Used `localStorage`** for client-side persistence—ideal for a no-backend setup.
- **Key name:** `"Notes_App"` was chosen to namespace data and avoid conflicts in localStorage.
- **Utility abstraction (`storage.js`)** used to separate concerns and keep storage logic clean and reusable.

### 🧱 Component Design
- **AddNote.jsx**: Handles controlled inputs and form submission.
- **NotesList.jsx**: Fetches and displays saved notes.
- **Nav.jsx**: Renders toggle buttons to switch between views.
- **App.jsx**: Manages navigation state and conditionally renders views.

### ⚛️ State Management
- `useState` used in `AddNote` for form inputs  
  `// Why I chose useState + this submit handler: keeps input reactive and simple to manage.`
- `useEffect` in `NotesList` to load stored notes on mount  
  `// Why useEffect to sync storage → state: ensures localStorage syncs only once when needed.`

### 🎨 Styling
- **Tailwind CSS** was used for rapid styling without writing custom CSS classes.
- Utility classes improved layout speed and ensured responsive UI with minimal effort.

### 🧭 Navigation
- **Tab-based navigation** using `useState` in `App.jsx`  
  `// Why this nav approach for simplicity: avoids routing complexity; ideal for a 2-view app.`

---

## ⚠️ Error & Loading Handling
- **"Saving…" spinner shown during localStorage write**  
  `// Why show spinner here: provides user feedback during data save.`
- **Error banner if storage write fails (e.g., quota exceeded)**  
  `// Why display error banner: alerts users of any critical failure.`

---

## 📁 Folder Structure

src/ ├── components/ │ ├── AddNote.jsx │ ├── NotesList.jsx │ └── Nav.jsx ├── utils/ │ └── storage.js ├── App.jsx └── index.js


---

## 📄 .env & .gitignore

- **.env.example** (optional): For any feature flags (not required here).
- **.gitignore**: Standard Node/React ignores (node_modules, .env, etc.)

---

## 🌐 Live Demo

Check the deployed version here: [Live Site](https://deployment-link.netlify.app)

---

## 🧑‍💻 Author

Developed by Harshit Jain(https://github.com/HarshGit) as part of a frontend job application.


