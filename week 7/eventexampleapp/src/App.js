import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  // Methods for Increment button
  const increment = () => {
    setCounter(prev => prev + 1);
    sayHello(); // multiple methods
  };

  const sayHello = () => {
    alert('Hello! This is a static message.');
  };

  const decrement = () => {
    setCounter(prev => prev - 1);
  };

  const sayMessage = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>Event Handling Examples</h1>

      <div className="counter-container">
        <h2>Counter: {counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      

      <div className="button-group">
        <button onClick={() => sayMessage('Welcome!')}>Say Welcome</button>
        <button onClick={handleClick}>Synthetic Event - OnPress</button>
      </div>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
