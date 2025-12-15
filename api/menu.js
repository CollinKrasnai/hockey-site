export default function handler(request, response) {
  const menu = [
    { text: "Home", link: "/" },
    { text: "Roster", link: "/roster" },
    { text: "Schedule", link: "/schedule" },
    { text: "Standings", link: "/standings" },
    { text: "Stats", link: "/stats" }
  ];
  response.setHeader('Content-Type', 'application/json');
  response.status(200).json(menu);
}
