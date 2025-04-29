import { useState } from "react";
import { saveNote } from "../utils/storage";

const AddNote = ({ onNoteAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      saveNote({ title, content });
      onNoteAdded();
      setTitle("");
      setContent("");
    } catch (err) {
      setError(err.message);
      console.log(err.message); // Why display error banner
    }
    setLoading(false); // Why show spinner here
  };

  // Why I chose useState + this submit handler: keeps input reactive and simple to manage.
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Add Note</h2>
      {error && <div className="bg-red-100 text-red-700 p-2 mb-2">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border p-2 mb-2 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full border p-2 mb-2 rounded"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Saving..." : "Add Note"}
        </button>
      </form>
    </div>
  );
};

export default AddNote;
