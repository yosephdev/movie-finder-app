import React, { useState } from "react";
import "./Search.css";

const Search = ({ fetchData, BASE_URL, API_KEY }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const SEARCH_API = `${BASE_URL}search/movie?api_key=${API_KEY}&query=`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchTerm.trim(); // Trim the input to remove leading/trailing spaces
    if (query) {
      fetchData(`${SEARCH_API}${query}`);
      setSearchTerm("");
    }
  };

  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search for a movie..."
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default Search;
