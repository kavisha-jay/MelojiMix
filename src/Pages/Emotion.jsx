import React from "react";
import { Banner } from "../Componenets/Banner";
import "../Styles/MainContainer.css";
import emo from "../img/emotion.jpg";

function Emotion() {
  return (
    <div className="mainContainer">
      <Banner imgBaner={emo} title={"Emotions"} />
    </div>
  );
}

export default Emotion;
