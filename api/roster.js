export default function handler(request, response) {
  const players = [];
  const positions = ["Forward", "Defense", "Goalie"];
  
  for (let i = 1; i <= 20; i++) {
    players.push({
      name: `Player ${i}`,
      number: `${10 + i}`,
      position: positions[i % 3],
      image: `https://picsum.photos/seed/frost${i}/300/300`
    });
  }

  response.setHeader('Content-Type', 'application/json');
  response.status(200).json(players);
}
