import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const [apiData,setApiData] = useState({
    name: ''
  })

  const url = "https://api.themoviedb.org/3/movie/823464/videos?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODE1NTAzM2ZjMjE1OTJmZTA4N2E4YmUzODE3NDEyMSIsInN1YiI6IjY2NGJjNDY4NjU4YmViMmIwNjk2MzU3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sIzUmwTyEOBMIJ50lopxjpibUSqbHF5rBHKwXRmq2go",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
        src="https://www.youtube.com/embed/amFYvQK4huo"
        width="90%"
        height="90%"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>Published date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  );
};

export default Player;
