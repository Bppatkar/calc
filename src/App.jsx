import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(" ");

  function handleEqual() {
      setValue(eval(value).toString());
     
  }

  function clearHandle() {
    setValue("");
  }

  function handleButtonClick(buttonValue) {
    setValue((prevValue) => prevValue + buttonValue);
  }

  return (
    <>
      <div className="calculator">
        <input
          className="display"
          type="text"
          placeholder="0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          readOnly
        />

        <div className="buttons">
          {[ 7,   8,  9,   "/",   4,  5,   6,  "*",1,2,3,   "-",        0,
            ".",
            "+",
            "=",
            "C",
          ].map((buttonValue, i) => (
            <button key={i} className="button" onClick={() => {
                  buttonValue === "=" ? handleEqual() : buttonValue === "C" ? clearHandle() : handleButtonClick(buttonValue);
                }}>
              {buttonValue}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
