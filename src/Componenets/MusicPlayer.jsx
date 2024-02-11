import React, { useState } from "react";
import "../Styles/MusicPlayer.css";

import {
  FaRegHeart,
  FaHeart,
  FaStepBackward,
  FaStepForward,
  FaPause,
  FaPlay,
  FaShareAlt,
} from "react-icons/fa";

const MusicPlayer = ({ song, imgsrc }) => {
  const [isFav, setFav] = useState(false);
  const [isPlay, setPlay] = useState(false);

  const changeFeel = () => {
    setFav(!isFav);
  };

  const changePlay = () => {
    setPlay(!isPlay);
  };
  return (
    <div className="Player">
      <div className="Attribut">
        <audio src={song} preload="metadata" />
        <div className="up">
          <div className="left">
            <div className="love" onClick={changeFeel}>
              {isFav ? (
                <i>
                  <FaRegHeart />
                </i>
              ) : (
                <i>
                  <FaHeart />
                </i>
              )}
            </div>
          </div>
          <div className="main">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
            </div>
            <div className="playbtn" onClick={changePlay}>
              {isPlay ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <FaShareAlt />
          </div>
        </div>
        <div className="down">
          <div className="Time">00.00</div>
          <input type="range" className="progresBar"/>
          <div className="duration">00.00</div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
