import React, { useState } from "react";
import "./styles.css";

function App() {
  const [input, setInput] = useState("");

  const handleNumberClick = (number) => {
    // Check if the input already contains a dot
    if (number === "." && input.includes(".")) {
      return;
    }

    setInput(input + number);
  };

  const handleOperatorClick = (operator) => {
    if (input !== "") {
      setInput(input + operator);
    }
  };

  const handleClearClick = () => {
    setInput("");
  };

  const handleCalculateClick = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput("Error");
    }
  };

  const handleBackspaceClick = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="wrapper">
        <div className="screen">{input}</div>
        <div className="button-box">
          <button className="button_2" onClick={handleClearClick}>
            Clear
          </button>

          <button className="button_2" onClick={() => handleOperatorClick("%")}>
            %
          </button>
          <button className="button_2" onClick={() => handleOperatorClick("/")}>
            /
          </button>
          <button className="button_2" onClick={() => handleOperatorClick("*")}>
            x
          </button>
          <button className="button_1" onClick={() => handleNumberClick(7)}>
            7
          </button>
          <button className="button_1" onClick={() => handleNumberClick(8)}>
            8
          </button>
          <button className="button_1" onClick={() => handleNumberClick(9)}>
            9
          </button>

          {/* Add more number buttons here */}
          <button className="button_2" onClick={() => handleOperatorClick("+")}>
            +
          </button>
          {/* Add more operator buttons here */}
          <button className="button_1" onClick={() => handleNumberClick(4)}>
            4
          </button>

          <button className="button_1" onClick={() => handleNumberClick(5)}>
            5
          </button>

          <button className="button_1" onClick={() => handleNumberClick(6)}>
            6
          </button>
          <button className="button_2" onClick={() => handleOperatorClick("-")}>
            -
          </button>

          <button className="button_1" onClick={() => handleNumberClick(1)}>
            1
          </button>
          <button className="button_1" onClick={() => handleNumberClick(2)}>
            2
          </button>
          <button className="button_1" onClick={() => handleNumberClick(3)}>
            3
          </button>

          <button className="button_2" onClick={handleCalculateClick}>
            =
          </button>

          <button className="button_1" onClick={() => handleNumberClick(0)}>
            0
          </button>
          <button className="button_1" onClick={() => handleNumberClick(".")}>
            .
          </button>
          <button className="button_1" onClick={handleBackspaceClick}>
            ←
          </button>
          <button className="button_2" onClick={handleBackspaceClick}>
            AC
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
