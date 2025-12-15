// Vercel Serverless Function: Returns 50 roster/action items
export default function handler(request, response) {
  const images = [];
  const roles = ["Forward", "Defense", "Goalie", "Coach"];
  
  for (let i = 1; i <= 50; i++) {
    images.push({
      id: i,
      title: `Player #${i}`,
      description: `Elite level ${roles[i % 4]} for the 2025 season.`,
      image: `https://picsum.photos/seed/hockey${i}/400/300`, // Dynamic placeholder
      badge: i % 2 === 0 ? "Varsity" : "Junior Varsity",
      updated: Date.now()
    });
  }

  response.setHeader('Content-Type', 'application/json');
  response.status(200).json(images);
}
