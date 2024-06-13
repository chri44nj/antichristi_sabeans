"use client";

import { useState } from "react";

import styles from "../styles/AddPlayers.module.css";

function AddPlayers() {
  const [playerList, setPlayerList] = useState([]);
  const [playerName, setPlayerName] = useState("");

  const handlePlayerNameInput = (e) => {
    setPlayerName(e.target.value);
  };

  const handleAddPlayer = () => {
    if (playerName.length > 0) {
      setPlayerList([...playerList, playerName]);
      setPlayerName("");
    }
  };

  return (
    <div>
      <div className={styles.playerInput}>
        <label htmlFor="playerName">Player Name</label>
        <input type="text" name="playerName" value={playerName} onChange={handlePlayerNameInput} />
        <button onClick={handleAddPlayer}>Add</button>
      </div>

      <ul className={styles.playerList}>
        {playerList.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddPlayers;
