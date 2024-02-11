import React from "react";
import "../Styles/MainContainer.css";
import { Banner } from "./Banner";
import SongCard from "./SongCard";
import img from "../img/track.png";
import pro from "../img/profile.jpg";
import art from "../img/melo.png";
import ed from "../img/ed.jpg";

function MainContainer() {
  return (
    <div className="mainContainer">
      <Banner imgBaner={art} />

      <p
        style={{
          paddingLeft: "2rem",
          paddingTop: "1rem",
          color: "white",
          fontSize: "20px",
        }}
      >
        Recently played
      </p>
      <div className="container">
        <SongCard img={img} />
        <SongCard img={pro} />

        <SongCard img={ed} />
      </div>
      <div className="container">
        <SongCard />
        <SongCard />
        <SongCard />
      </div>

      <div className="second"></div>
    </div>
  );
}

export { MainContainer };
