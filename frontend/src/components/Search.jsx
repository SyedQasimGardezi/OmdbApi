import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import List from "./List";
import "./search.css";
export default function Search() {
  const [movieList, setMovieList] = useState([]);
  const [searchWord, setSearchWord] = useState();
  const [apiUrl, setApiUrl] = useState(
    "http://www.omdbapi.com/?s=x-men&apikey=27926dae"
  );
  function searchMedia() {
    setApiUrl(`http://www.omdbapi.com/?s=${searchWord}&apikey=27926dae`);
    console.log(searchWord);
    console.log(apiUrl);
  }
  useEffect(() => {
    Axios.get(apiUrl)
      .then((res) => {
        setMovieList(res.data.Search);
      })
      .catch((error) => {
        return error;
      });
  }, [apiUrl]);
  return (
    <div>
      <div className="parent-search">
        <div className="search-bar">
          <input onChange={(e) => setSearchWord(e.target.value)} />
          <button onClick={searchMedia}>Search</button>
        </div>
      </div>
      <List movieList={movieList} />
    </div>
  );
}
