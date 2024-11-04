import './GameSelector.css';
import { useState } from "react";
import { SwordIcon, ArrowWhiteIcon } from '../../assets/index.js';


/*--------------------------------------------------------------
# GameSelector: A custom styled component designed to function 
  as a dropdown list of games.
--------------------------------------------------------------*/

const GameSelector = () => {
  const [search, setSearch] = useState("");

  return (
    <label className="select-game" htmlFor="game-title">
      <img
        className="select-game-icon-default"
        width={24}
        src={SwordIcon}
        alt="arrow-white-up"
      />
      <input
        id="game-title"
        className="select-game-input"
        required
        autoComplete="off"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <label htmlFor="game-title" className="select-game-label">
        Select a game
      </label>
      <img
        className="select-game-arrow"
        width={12}
        src={ArrowWhiteIcon}
        alt="arrow-white-up"
      />
    </label>
  )
}

export default GameSelector