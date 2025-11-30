export default function handler(request, response) {
  const menu = {
    items: [
      {
        id: "home",
        title: "Home",
        slug: "home",
        order: 0,
        parent: null
      },
      {
        id: "roster",
        title: "2025 Roster",
        slug: "roster",
        order: 1,
        parent: null
      },
      {
        id: "schedule",
        title: "Season Schedule",
        slug: "schedule",
        order: 2,
        parent: null
      },
      {
        id: "about",
        title: "About The Academy",
        slug: "about",
        order: 3,
        parent: null
      }
    ]
  };

  response.setHeader('Content-Type', 'application/json');
  response.status(200).json(menu);
}