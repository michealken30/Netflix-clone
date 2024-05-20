import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const [apiData, setapiData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODE1NTAzM2ZjMjE1OTJmZTA4N2E4YmUzODE3NDEyMSIsInN1YiI6IjY2NGJjNDY4NjU4YmViMmIwNjk2MzU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sIzUmwTyEOBMIJ50lopxjpibUSqbHF5rBHKwXRmq2go",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setapiData(response.results))
      .catch((err) => console.error(err));
    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);

  const cardRef = useRef();
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
