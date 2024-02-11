import React from "react";
import Artist from "../img/artist.jpg";
import Check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

function Banner({ imgBaner, title }) {
  return (
    <div className="banner">
      <img src={imgBaner} alt="" className="banner-Img" />

      <div className="content">
        {/* <div className="breadCrump">
          <i>
            <FaEllipsisH />
          </i>
        </div> */}

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>{title}</h2>
            </div>
            {/* <p>
              <i>
                <FaHeadphones />
              </i>
              11,184,1811 <span>Monthy listeners</span>
            </p> */}
          </div>
          {/* <div className="right">
            <a href="#">Play</a>
            <a href="">
              <i>
                <FaCheck/>
              </i>
              Following
            </a>
          </div> */}
        </div>
      </div>
      <div className="bottomLayer"></div>
    </div>
  );
}

export { Banner };
