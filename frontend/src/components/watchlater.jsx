import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Watchlater() {
  const [movies, setMovies] = useState([]);
  const [deleteMovie, setDeleteMovie] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/list")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        return console.log("error");
      });
  }, []);

  //   useEffect(() => {
  //     axios
  //       .post("http://localhost:8000/delete", {
  //         deleteMovie: deleteMovie,
  //       })
  //       .catch((err) => {
  //         return console.log("error in delete movie use effect");
  //       });
  //   }, [deleteMovie]);
  return (
    <div>
      {movies.map((movies, key) => {
        return (
          <div>
            <img src={movies.Poster} alt="poster" />
            <div>
              {movies.Title}={movies.Year}
            </div>
            <button
              onClick={(e) => {
                setDeleteMovie(movies);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
