import axios from "axios";
import React, { useEffect, useState } from "react";
export default function List({ movieList }) {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    if (details.length !== 0) {
      axios
        .post("http://localhost:8000/list", {
          details: details,
        })
        .catch((err) => {
          return err;
        });
      console.log("posting");
    }
  }, [details]);
  return (
    <div>
      <div>
        {movieList.map((p, key) => {
          return (
            <div className="">
              <img src={p.Poster} alt="Poster" />
              <h1>{p.Title}</h1>
              <h3>{p.Year}</h3>
              <button onClick={() => setDetails(p)}>Add To List</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
