import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h2>Streamer</h2>
      </Link>

      <div className="headerLinks">
        <Link to="/"></Link>
        <Link to="/genre">Genre</Link>
        <Link to="/country">Country</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/tvShows">Tv Shows</Link>
        <Link to="/topIMDB">Top IMDB</Link>
      </div>
    </div>
  );
}

export default Header;
