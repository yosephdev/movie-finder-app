import React, { useState, useEffect } from "react";
import "./MovieDetail.css";

const MovieDetail = ({ match, history }) => {
  const [movieDetail, setMovieDetail] = useState({});

  const API_KEY = "c3ed94545b381cd59ee060f8d40ebc54";
  const BASE_URL = "https://api.themoviedb.org/3/";
  const DETAILS_API = `${BASE_URL}movie/${match.params.id}?api_key=${API_KEY}&append_to_response=videos`;
  const IMG_API = "https://image.tmdb.org/t/p/w500";

  const fetchMovieDetailData = async (api) => {
    try {
      const movieDetailResponse = await fetch(api);
      const movieDetailData = await movieDetailResponse.json();
      setMovieDetail(movieDetailData);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetailData(DETAILS_API);
  }, [DETAILS_API]);

  const goBack = () => history.goBack();

  const backdropStyle = movieDetail.backdrop_path
    ? { backgroundImage: `url(${IMG_API}${movieDetail.backdrop_path})` }
    : null;

  const posterSrc = movieDetail.poster_path
    ? `${IMG_API}${movieDetail.poster_path}`
    : "https://images.unsplash.com/photo-1529798856831-427dfd0a1ab1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

  const trailerLink =
    movieDetail.videos && movieDetail.videos.results[0]
      ? `https://www.youtube.com/embed/${movieDetail.videos.results[0].key}`
      : null;

  return (
    <div className="MovieDetail">
      <div className="bg-image" style={backdropStyle}></div>
      <div className="content">
        <img src={posterSrc} alt={movieDetail.title} />
        <div className="movie-info">
          <h2>{movieDetail.title}</h2>
          <div>
            <p>{movieDetail.release_date}</p>
            <ul>
              {movieDetail.genres
                ? movieDetail.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))
                : null}
            </ul>
            <p>{`${movieDetail.vote_average}/10`}</p>
          </div>
          <p>{movieDetail.overview}</p>
          <button onClick={goBack}>Go Back</button>
          {trailerLink && (
            <a href={trailerLink} rel="noreferrer" target="_blank">
              <button>Play Trailer</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
