import React, { useEffect } from "react";
import { BsFillHouseAddFill, BsJournalAlbum } from "react-icons/bs";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa";
import { BiPulse } from "react-icons/bi";
import "../Styles/Menu.css";

function Menu({ title }) {
  const MenuList = [
    { id: 1, icon: <BsFillHouseAddFill />, name: "Home" },
    { id: 2, icon: <BiPulse />, name: "Discover" },
    { id: 3, icon: <FaMicrophoneAlt />, name: "Artist" },
    { id: 4, icon: <BsJournalAlbum />, name: "Albums" },
    
  ];

  useEffect(() => {
    const allLi = document
      .querySelector(".MenuContainer")
      .querySelectorAll("li");

      function changeMenuActive() {
        allLi.forEach((n) => n.classList.remove('active'));
        this.classList.add('active');
      }

      allLi.forEach( n => n.addEventListener('click', changeMenuActive))
  }, []);
  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>
      <ul>
        {MenuList.map((menu) => (
          <li key={menu.id}>
            {" "}
            <a href="#">
              <i>{menu.icon}</i>
              <span>{menu.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Menu };
