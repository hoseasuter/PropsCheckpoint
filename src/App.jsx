// src/App.jsx
import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          FIFA Player Cards
        </h1>
        <PlayersList />
      </div>
    </div>
  );
}

export default App;
