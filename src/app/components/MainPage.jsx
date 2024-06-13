"use client";
import { useState } from "react";
import styles from "../page.module.css";

import QuestionCard from "./QuestionCard";
import AddPlayers from "./AddPlayers";

function MainPage() {
  /* States */
  const [gameBegun, setGameBegun] = useState(false);
  return (
    <div className={styles.mainWrapper}>
      {gameBegun === false ? <AddPlayers /> : <QuestionCard question={"Who has the craziest hobby?"} category={"Getting to know each other"} index={1} totalCards={50} />}
      <button className={styles.switchButton} onClick={() => setGameBegun((old) => !old)}>
        Skift gamemode
      </button>
    </div>
  );
}

export default MainPage;
