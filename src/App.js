import "./styles.css";
import React, { useState } from "react";
export default function App() {
  var emojiList = {
    "😉": "Winking",
    "🤐": "Zipper",
    "🥵": "Hot",
    "😐": "Neutral",
    "👻": "Ghost"
  };
  var emojiArray = Object.keys(emojiList);
  const [displaywordvar, setdisplaywordvar] = useState("");
  function displayWord(event) {
    //console.log(event.target.value);
    setdisplaywordvar(emojiList[event.target.value]);
  }
  function emojiClickHandler(item) {
    console.log(item + "clicked");
    setdisplaywordvar(emojiList[item]);
  }
  return (
    <div className="App">
      <h1>Emoji Meaning</h1>
      <input onChange={displayWord}></input>
      <h2>{displaywordvar}</h2>

      {emojiArray.map((item) => {
        return (
          <span
            key={item}
            onClick={() => emojiClickHandler(item)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
