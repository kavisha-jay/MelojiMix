import React from 'react';
import './Search.css';
import {BiSearchAlt} from 'react-icons/bi'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchbox">
        <input type="text" placeholder="Search..."/>
        <i className="searchIcon">
            <BiSearchAlt/>
        </i>
       </div>
  </div>
  )
}

export default Search;