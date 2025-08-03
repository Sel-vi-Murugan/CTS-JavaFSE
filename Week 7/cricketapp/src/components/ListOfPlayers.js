// src/components/ListofPlayers.js

const ListofPlayers = () => {
    const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 90 },
    { name: "KL Rahul", score: 45 },
    { name: "Shubman Gill", score: 48 },
    { name: "Hardik Pandya", score: 75 },
    { name: "Ravindra Jadeja", score: 65 },
    { name: "Jasprit Bumrah", score: 52 },
    { name: "R Ashwin", score: 85 },
    { name: "Mohammed Siraj", score: 55 },
    { name: "Ishan Kishan", score: 64 },
    { name: "Sanju Samson", score: 90 },
    ];

  // Mapping
    const allPlayers = players.map((player, index) => (
    <li key={index}>
        {player.name} - Score: {player.score}
    </li>
    ));

  // filter with arrow function
    const below70 = players.filter((player) => player.score < 70);

    return (
    <div style={{marginLeft:"50px"}}>
        <h2 style={{color:"blue"}}>All Players:</h2>
        <ul>{allPlayers}</ul>

    <h2 style={{color:"blue"}}>Players with score below 70:</h2>
        <ul>
        {below70.map((player, index) => (
            <li key={index}>
            {player.name} - Score: {player.score}
        </li>
        ))}
        </ul>
    </div>
    );
};

export default ListofPlayers;
