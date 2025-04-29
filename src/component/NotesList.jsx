import { useEffect, useState } from "react";
import { getNotes } from "../utils/storage";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);
  // Why useEffect to sync storage → state: ensures localStorage data is fetched on mount.

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Your Notes</h2>
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul className="space-y-2">
          {notes.map((note, index) => (
            <li key={index} className="bg-gray-100 p-3 rounded">
              <h3 className="font-semibold">{note.title}</h3>
              <p className="text-sm text-gray-600">
                {note.content.substring(0, 80)}...
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;
