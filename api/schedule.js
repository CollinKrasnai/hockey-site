export default function handler(request, response) {
  const schedule = [
    { date: "Oct 12, 2025", time: "7:00 PM", opponent: "Steel City Icers", location: "Pegula Ice Arena", home: true },
    { date: "Oct 14, 2025", time: "6:30 PM", opponent: "Keystone Wild", location: "Alpha Ice Complex", home: false },
    { date: "Oct 19, 2025", time: "8:00 PM", opponent: "Erie Otters", location: "Pegula Ice Arena", home: true },
    { date: "Oct 22, 2025", time: "5:00 PM", opponent: "Altoona Trackers", location: "Galactic Ice", home: false },
    { date: "Oct 28, 2025", time: "7:15 PM", opponent: "South Hills Panthers", location: "Pegula Ice Arena", home: true }
  ];

  response.setHeader('Content-Type', 'application/json');
  response.status(200).json(schedule);
}