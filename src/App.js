import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Movies from "./components/Movies/Movies";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "e667e497";
  const BASE_URL = "http://www.omdbapi.com/?";
  const POPULAR_API = `${BASE_URL}movie/popular?api_key=${API_KEY}`;
  const IMG_API = "http://img.omdbapi.com/?";

  const fetchData = async (api) => {
    try {
      const movieResponse = await fetch(api);
      const movieData = await movieResponse.json();
      setMovies(movieData.results);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    fetchData(POPULAR_API);
  }, []);

  return (
    <div className="App">
      <Navbar
        fetchData={fetchData}
        POPULAR_API={POPULAR_API}
        BASE_URL={BASE_URL}
        API_KEY={API_KEY}
      />
      <Movies movies={movies} IMG_API={IMG_API} />
      <footer className="app-footer">
        <p>
          Powered By{" "}
          <a href="https://www.omdbapi.com/" rel="noreferrer" target="_blank">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="tmdb"
            />
          </a>{" "}
          | &copy; {new Date().getFullYear()} by{" "}
          <a href="https://yoseph.dev" rel="noreferrer" target="_blank">
            Yoseph Berhane
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
