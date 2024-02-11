import React from "react";
import "../Styles/Footer.css";
import TrackList from "./TrackList";
import "../Styles/LeftMenu.css";

import MusicPlayer from "./MusicPlayer";

function Footer() {
  return (
    <>
      <div className="FooterContainer">
        <div>
          <TrackList />
        </div>
        <div>
          <MusicPlayer />
        </div>
      </div>
    </>
  );
}

export default Footer;
