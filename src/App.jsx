import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  const addCounter = () => {
    if (counter == 100) {
      counter = 100;
    } else counter = counter + 1;
    setCounter(counter);
  };
  const subCounter = () => {
    if (counter == 0) {
      counter = 0;
    } else counter = counter - 1;
    setCounter(counter);
  };

  const doubleAdd = () => {
    if (counter == 100) {
      counter == 100;
    } else {
      counter = counter + 2;
    }
    setCounter(counter);
  };

  const doubleSub = () => {
    if (counter == 0) {
      counter = 0;
    } else if (counter == 1) {
      counter = 1;
    } else {
      counter = counter - 2;
    }

    setCounter(counter);
  };
  return (
    <>
      <h1>Pushpendra Kumar(😊👍)</h1>
      <h1>COUNTER</h1>
      <h1>{counter}</h1>
      <button onClick={addCounter}>Icrement</button>
      <button onClick={subCounter}>Decrement</button>

      <br />
      <button onClick={doubleAdd}>2X Increment</button>
      <button onClick={doubleSub}>2X Decrement</button>
    </>
  );
}

export default App;
