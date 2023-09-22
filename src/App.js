import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Movie from "./Movie";

import "./App.css";

const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Movie Finder 2
        </Link>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/movie/:id" component={Movie} />
      <Route component={NotFound} />
    </Router>
  );
};

export default App;
