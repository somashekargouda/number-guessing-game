import React, { useState } from "react";
import { Input, Button, ButtonToolbar } from "rsuite";

const generateRandomNum = () => {
  const rndInt = Math.floor(Math.random() * 10);
  localStorage.setItem("guess", rndInt);
};

const NumberGuess = () => {
  const [random, setRandom] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setRandom(event);
  };

  const checkGuess = (event) => {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem("guess"));

    let displayMessage = "";

    if (JSON.parse(random) === userData) {
      displayMessage = "Congratulations!! Your Guess is perfect!!";
      localStorage.removeItem("guess");
    } else if (JSON.parse(random) < userData) {
      displayMessage = "Guess is low";
    } else if (JSON.parse(random) > userData) {
      displayMessage = "Guess is high";
    }

    setMessage(displayMessage);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <h3>Click the below button to generate random number between 1 and 10</h3>
      <ButtonToolbar>
        <Button
          onClick={generateRandomNum}
          style={{ marginLeft: "45%" }}
          size="lg"
          color="blue"
          appearance="primary"
        >
          Generate Random Number
        </Button>
      </ButtonToolbar>
      <Input
        style={{ marginLeft: "34%", marginTop: "30px", width: "32%" }}
        max={10}
        min={1}
        type="number"
        size="lg"
        placeholder="Enter a number to guess"
        name="random"
        value={random}
        onChange={handleChange}
      />

      <ButtonToolbar>
        <Button
          onClick={checkGuess}
          style={{ marginTop: "30px", marginLeft: "47.5%" }}
          size="lg"
          color="blue"
          appearance="primary"
        >
          Check Guess!
        </Button>
      </ButtonToolbar>

      {message && (
        <>
          <p style={{ fontWeight: "bold", fontSize: 30 }}>{message}</p>
        </>
      )}
    </div>
  );
};

export default NumberGuess;
