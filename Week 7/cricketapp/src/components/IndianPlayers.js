// src/components/IndianPlayers.js

const IndianPlayers = () => {
    const teamPlayers = [
        "Player1",
        "Player2",
        "Player3",
        "Player4",
        "Player5",
        "Player6",
        "Player7",
        "Player8",
    ];

    const oddPlayers = teamPlayers.filter((_, index) => index % 2 === 0);
    const evenPlayers = teamPlayers.filter((_, index) => index % 2 !== 0);

  // Merge arrays
    const T20players = ["Virat", "Rohit", "Hardik"];
    const RanjiTrophyPlayers = ["Pujara", "Rahane", "Saha"];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers]; // ES6 Spread

    return (
    <div style={{marginLeft:"50px"}}>
        <h2 style={{color:"blue"}}>Odd Team Players:</h2>
        <ul>
        {oddPlayers.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
        </ul>

        <h2 style={{color:"blue"}}>Even Team Players:</h2>
        <ul>
        {evenPlayers.map((name, index) => (
        <li key={index}>{name}</li>
        ))}
        </ul>

        <h2 style={{color:"blue"}}>Merged T20 and Ranji Trophy Players:</h2>
        <ul>
        {mergedPlayers.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
        </ul>
    </div>
    );
};

export default IndianPlayers;
