const STORAGE_KEY = "notes_app";

export const getNotes = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    throw new Error("Failed to read from storage");
  }
};

export const saveNote = (note) => {
  try {
    const notes = getNotes();
    notes.push(note);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    throw new Error("Failed to write to storage");
  }
};
