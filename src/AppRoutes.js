import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter and Routes
import App from "./App";
import MovieDetail from "./components/MovieDetail/MovieDetail";

const AppRoutes = () => {
  return (
    <Router>
      {" "}
      {/* Wrap your routes with BrowserRouter */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
