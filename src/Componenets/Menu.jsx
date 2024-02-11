import React, { useState, useEffect } from "react";
import { BsFillHouseAddFill, BsJournalAlbum } from "react-icons/bs";
import {
  FaBroadcastTower,
  FaMicrophoneAlt,
  FaPodcast,
  FaSmile,
} from "react-icons/fa";
import { BiPulse, BiSearchAlt } from "react-icons/bi";
import Home from "../Pages/Home.jsx";
import { MainContainer } from "./MainContainer.jsx";

function Menu({ title }) {
  const MenuList = [
    {
      id: 1,
      icon: <BsFillHouseAddFill style={{ fontSize: "24PX" }} />,
      name: "Home",
      link: "/main",
    },
    {
      id: 2,
      icon: <BiSearchAlt style={{ fontSize: "24PX" }} />,
      name: "Discover",
      link: "/Search",
    },
    {
      id: 3,
      icon: <FaSmile style={{ fontSize: "24PX" }} />,
      name: "Emotion",
      link: "/emotion",
    },
    // { id: 4, icon: <BsJournalAlbum style={{fontSize:"2rem"}}/>, name: "Albums" , link:<Home/>},
  ];

  useEffect(() => {
    const allLi = document
      .querySelector(".MenuContainer")
      .querySelectorAll("li");

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);
  return (
    <div className="MenuContainer">
      <ul>
        {MenuList.map((menu) => (
          <li key={menu.id}>
            {" "}
            <a href={menu.link}>
              <i>{menu.icon}</i>
              <span style={{ fontSize: "24px" }}>{menu.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Menu };
