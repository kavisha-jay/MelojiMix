import React from "react";
import "../Styles/SongCard.css";
import SI from "../img/profile.jpg";
// import "../Styles/MusicPlayer.css";
// import {

//     FaPause,
//     FaPlay,

//   } from "react-icons/fa";

const SongCard = ({ img }) => {
  //   const changePlay = () => {
  //     setPlay(!isPlay);
  //   };

  return (
    <div className="Container">
      <div className="card">
        <div className="innercard">
          <img src={img} alt="" className="img" />

          <div className="name">
            <p style={{ color: "white" }}>Sample Song Title</p>
            <p style={{ color: "grey" }}>Artist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
