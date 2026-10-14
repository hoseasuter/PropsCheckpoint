// src/Player.jsx
import React from "react";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  // Inline styling objects
  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "1rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    border: "1px solid #f3f4f6",
  };

  const badgeStyle = {
    backgroundColor: "#eef2ff",
    color: "#4f46e5",
    fontWeight: "600",
  };

  return (
    <div
      style={cardStyle}
      className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <div className="h-48 w-full overflow-hidden bg-gray-200">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <span
              style={badgeStyle}
              className="text-xs px-2.5 py-1 rounded-full"
            >
              #{jerseyNumber}
            </span>
          </div>
          <p className="text-sm font-medium text-indigo-600 mb-4">{team}</p>
        </div>

        <div className="border-t border-gray-100 pt-3 flex justify-between text-sm text-gray-600">
          <span>
            Nationality:{" "}
            <strong className="text-gray-800">{nationality}</strong>
          </span>
          <span>
            Age: <strong className="text-gray-800">{age}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

// Default props for each attribute
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: "N/A",
  imageUrl:
    "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=600&auto=format&fit=crop&q=80",
};

export default Player;
