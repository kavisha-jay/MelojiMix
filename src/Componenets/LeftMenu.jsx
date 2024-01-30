import React from "react";
import "../Styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";

import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlaylist } from "./MenuPlaylist";
import { TrackList } from "./TrackList";

function LeftMenu() {
  return (
    <div className="leftmenu">
      <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>MelojiMix</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      
     <Menu title={'Menu'} menuObject={MenuList}/>

    <MenuPlaylist/>

    {/* <TrackList/> */}
    </div>
  );
}

export { LeftMenu };
