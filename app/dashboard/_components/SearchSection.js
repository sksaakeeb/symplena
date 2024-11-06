import React from "react";

function SerachSection({ onSearchInput }) {
  return (
    <div className="p-10 shadow-md">
      <h2>Browse Diseases</h2>
      <p>What you would like to create today?</p>

      <div>
        <input
          type="text"
          placeholder="Search..."
          className=""
          onChange={(event) => onSearchInput(event.target.value)}
        />
      </div>
    </div>
  );
}

export default SerachSection;
