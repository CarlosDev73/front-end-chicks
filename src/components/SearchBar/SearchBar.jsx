import './SearchBar.css';
import { useState } from "react";
import { LoupeIcon } from '../../assets/index.js';

/*--------------------------------------------------------------
# SearchBar: A custom styled component designed to function as 
  a search bar.
--------------------------------------------------------------*/


const SearchBar = (props) => {

  const [find, setFind] = useState("");

  return (
    <div className="searchBar">
      <img
        className="loupe-image"
        width={24}
        src={LoupeIcon}
        alt="search"
      />
      <input
        id={`search${props.id}`}
        type="text"
        className="search-input"
        value={find}
        required
        autoComplete="off"
        onChange={(event) => {
          setFind(event.target.value);
          props.onChange(event.target.value);
        }}
      />
      <label htmlFor="search" className="search-title">
        Search
      </label>
    </div>
  )
}

export default SearchBar