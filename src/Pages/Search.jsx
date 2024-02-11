import React from "react";
import "./Search.css";
import { BiSearchAlt } from "react-icons/bi";
import SongCard from "../Componenets/SongCard";

const Search = () => {
  return (
    <>
      <div className="search">
        <div className="searchbox">
          <input type="text" placeholder="Search..." />
          <i className="searchIcon">
            <BiSearchAlt />
          </i>
        </div>
        <p style={{
          paddingLeft: "2rem",
          paddingTop: "1rem",
          color: "white",
          fontSize: "20px",
        }}>Recently Searches</p>
        <div className="cards">
          <SongCard />
        </div>
      </div>
    </>
  );
};

export default Search;
