import React from "react";
import Search from "../Search/Search";
import "./Navbar.css";

const Navbar = ({ fetchData, POPULAR_API, BASE_URL, API_KEY }) => {
  const UPCOMING_API = `${BASE_URL}movie/upcoming?api_key=${API_KEY}`;
  const TOP_RATED_API = `${BASE_URL}movie/top_rated?api_key=${API_KEY}`;

  const reload = () => window.location.reload(false);

  const handleCategoryClick = (api) => {
    fetchData(api);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <div className="navbar-section">
          <li>
            <h1 className="navbar-title" onClick={reload}>
              Movie App
            </h1>
          </li>
          <li onClick={() => handleCategoryClick(POPULAR_API)}>
            What's Popular
          </li>
          <li onClick={() => handleCategoryClick(UPCOMING_API)}>Upcoming</li>
          <li onClick={() => handleCategoryClick(TOP_RATED_API)}>Top Rated</li>
        </div>
        <li className="navbar-search">
          <Search fetchData={fetchData} BASE_URL={BASE_URL} API_KEY={API_KEY} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
