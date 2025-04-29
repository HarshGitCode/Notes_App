const Nav = ({ currentTab, setTab }) => {
    // Why this nav approach for simplicity: avoids routing complexity; ideal for a 2-view app.
    return (
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${currentTab === "add" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("add")}
        >
          Add Note
        </button>
        <button
          className={`px-4 py-2 rounded ${currentTab === "view" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("view")}
        >
          View Notes
        </button>
      </div>
    );
  };
  
  export default Nav;
  