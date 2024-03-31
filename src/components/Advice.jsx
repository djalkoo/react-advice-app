import React, { useState, useEffect } from "react";
import axios from "axios";
import diceIcon from "../assets/images/icon-dice.svg";
import "./Advice.css";
import patternDividerDesktop from "../assets/images/pattern-divider-desktop.svg";

function Advice() {
  const [savjet, setSavjet] = useState(null);

  const fetchAdvice = async () => {
    try {
      const endpoint = "https://api.adviceslip.com/advice";
      const response = await axios.get(endpoint);
      setSavjet(response.data.slip);
    } catch (error) {
      console.error("Error while fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const handleNewAdvice = () => {
    fetchAdvice();
  };

  return (
    <div className="container">
      {savjet && (
        <>
          <div className="advice-number">Advice #{savjet.id}</div>
          <div className="advice-text">"{savjet.advice}"</div>
          <img src={patternDividerDesktop} alt="Divider" className="divider" />
          <div className="green-circle"></div>
        </>
      )}
      <button onClick={handleNewAdvice}>
        <img src={diceIcon} alt="Dice" className="dice-icon" />
      </button>
    </div>
  );
}

export default Advice;
