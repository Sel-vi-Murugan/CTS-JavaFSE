// src/App.js
import { useState } from "react";
import IndianPlayers from "./components/IndianPlayers";
import ListofPlayers from "./components/ListOfPlayers";

function App() {
  const [flag, setFlag] = useState(true);
  // const flag = true;
  const handleToggle = () => {
    setFlag(!flag);
  };
  return (
    <div className="App">
      <h1 style={{marginLeft:"500px",color:"red"}}>Cricket App...<button
        onClick={handleToggle}
        style={{
          padding: "10px 20px",
          marginLeft: "250px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >Switch List</button></h1>
      
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;