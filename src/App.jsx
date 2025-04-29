import { useState } from "react";
import AddNote from "./component/AddNote";
import NotesList from "./component/NotesList";
import Nav from "./component/Nav";

function App() {
  const [tab, setTab] = useState("add");
  const [refresh, setRefresh] = useState(false);

  const handleNoteAdded = () => {
    setRefresh(!refresh);
    setTab("view");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Nav currentTab={tab} setTab={setTab} />
      {tab === "add" ? <AddNote onNoteAdded={handleNoteAdded} /> : <NotesList key={refresh} />}
    </div>
  );
}

export default App;
