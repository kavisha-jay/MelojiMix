import React from "react";
import "../Styles/LeftMenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { FcMusic } from "react-icons/fc";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlaylist } from "./MenuPlaylist";


function LeftMenu() {
  return (
    <div className="leftmenu">
      <div className="logoContainer">
        <i>
          <FcMusic />
        </i>
        <h2>MelojiMix</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      
     <Menu menuObject={MenuList}/>

    <MenuPlaylist/>
    
    
    </div>
  );
}

export { LeftMenu };
