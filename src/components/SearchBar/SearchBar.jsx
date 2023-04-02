import React, { useState } from "react";

const SearchBar = ({ getVideos }) => {
  const [inputText, setInputText] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    getVideos(inputText);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for videos here..."
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

// let inputHandler = (e) => {
//   const lowerCase = e.target.value.toLowerCase();
//   setInputText(lowerCase);
// };
