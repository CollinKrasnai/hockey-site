export default function handler(request, response) {
  // Using randomuser.me portraits to ensure gender matches names reliably
  const players = [
    {
      name: "James Wilson",
      number: "10",
      position: "Captain / Center",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Miller",
      number: "22",
      position: "Defense",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chang",
      number: "88",
      position: "Right Wing",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      name: "Emily Johnson",
      number: "31",
      position: "Goalie",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Marcus Thompson",
      number: "15",
      position: "Left Wing",
      image: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      name: "David Kowalski",
      number: "05",
      position: "Defense",
      image: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
      name: "Jessica Chen",
      number: "19",
      position: "Forward",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      name: "Robert Smith",
      number: "44",
      position: "Defense",
      image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
      name: "Tyler Durden",
      number: "09",
      position: "Enforcer",
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      name: "Amanda Hax",
      number: "12",
      position: "Backup Goalie",
      image: "https://randomuser.me/api/portraits/women/29.jpg"
    }
  ];

  response.setHeader('Content-Type', 'application/json');
  response.status(200).json(players);
}
