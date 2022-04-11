import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../request";

import "./Banner.css";

const Banner = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(request.fetchNetflixOriginals);
      setMovies(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  // console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__titile">
          {movie?.title || movie?.name || movie?.orginal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner__desc">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
