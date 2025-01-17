import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayername] = useState("");


  function handleClick() {
    setEnteredPlayername(playerName.current.value);
    playerName.current.valur='';
  }
  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ??"unknown entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
