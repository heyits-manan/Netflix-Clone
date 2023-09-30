import React from "react";
import "./MainPage.css";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebase-config";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "../../axios";
import requests from "../../Requests";
import Rows from "./Rows/Rows";

export default function MainPage() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function descriptionLength(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "....." : string;
  }

  return (
    <div className="mainPage">
      <nav className="mainNavbar">
        <Link to="/">
          <img src={logo} alt="logo" className="imgNav" />
        </Link>
        <ul className="ulNav" id="navLinks">
          <li className="homePage">
            <Link to="/mainPage">Home</Link>
          </li>
          <li className="tvshows">
            <Link to="/tvShows">TV Shows</Link>
          </li>
          <li className="movies">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="latest">
            <Link to="/latest">Latest</Link>
          </li>
          <li className="mylist">
            <Link to="/myList">My List</Link>
          </li>
          <li className="mylist">
            <Link to="/myList">Browse by Languages</Link>
          </li>
        </ul>
      </nav>
      <div className="banner">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="banner-image"
        />
        <div className="banner-contents">
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner-description">
            {descriptionLength(movie?.overview, 150)}
          </div>
          <div className="buttons">
            <button className="play">Play</button>
            <button className="moreInfo">More Info</button>
          </div>
        </div>
      </div>
      <div className="rows">
        <Rows
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>

      <div className="banner-fadeBottom" />
    </div>
  );
}
