import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for prop type validation
import "./Movie.css";

const Movie = ({ poster_path, title, id, IMG_API }) => {
  const imageUrl = poster_path
    ? `${IMG_API}${poster_path}`
    : "https://images.unsplash.com/photo-1529798856831-427dfd0a1ab1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

  return (
    <div className="movie-card">
      <Link to={`/${id}`} className="movie-link">
        <img src={imageUrl} alt={title} className="movie-poster" />
        <h2 className="movie-title">{title}</h2>
      </Link>
    </div>
  );
};

// Add prop type validation for better code reliability
Movie.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  IMG_API: PropTypes.string.isRequired,
};

export default Movie;
