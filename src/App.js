import React from "react";
import "./styles.css";
import { useState } from "react";

const validCode = "🐡🐠🐋";

export default function App() {
  const [code, setCode] = useState();

  function handleFishClick(event) {
    const clickedFish = event.target.textContent;
    setCode(code + clickedFish);
    console.log(`Clicked fish: ${clickedFish}`);
  }

  function handleResetClick() {
    setCode("");
  }
  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleFishClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleFishClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleFishClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={handleResetClick}>
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
