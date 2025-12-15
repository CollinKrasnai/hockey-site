export default function handler(request, response) {
  const schedule = [
    { date: "Oct 12", time: "7:00 PM", opponent: "Steel City Icers", location: "Home", result: "TBD" },
    { date: "Oct 14", time: "6:30 PM", opponent: "Keystone Wild", location: "Away", result: "TBD" },
    { date: "Oct 19", time: "8:00 PM", opponent: "Erie Otters", location: "Home", result: "TBD" },
    { date: "Oct 22", time: "5:00 PM", opponent: "Altoona Trackers", location: "Away", result: "TBD" }
  ];
  response.setHeader('Content-Type', 'application/json');
  response.status(200).json(schedule);
}
