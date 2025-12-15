# Frostbite Hockey Academy

A modern, high-performance web application for the Frostbite Hockey Academy.

## Live Demo

https://hockey-site.vercel.app/

## Project Overview

This application manages the digital presence of a youth hockey organization. It includes dynamic routing, roster management, schedule tracking, and team statistics, all built with a focus on accessibility, performance, and mobile responsiveness.

### Key Features
- **Client-Side Routing:** Fast navigation without page reloads using a custom lightweight router.
- **Dynamic Data Loading:** Roster, Schedule, and Menu data are fetched from Vercel Serverless Functions (/api).
- **DDD Design System:** Implements the @haxtheweb/d-d-d design system for consistent typography, spacing, and accessibility.
- **Responsive Layouts:** CSS Grid and Flexbox ensure the site works on phones, tablets, and desktops.
- **Interactive Elements:** Animated navigation bars, hover effects on player cards, and responsive data tables.

## API Endpoints

The application relies on internal serverless functions to serve JSON data:

- /api/menu (GET): Returns navigation items and routing paths.
- /api/roster (GET): Returns a list of players with names, numbers, and images.
- /api/schedule (GET): Returns upcoming game dates, opponents, and locations.

## Design System

This project adheres to the DDD system.
- **Colors:** Navy Blue (--ddd-theme-default-navy80), Sky Blue (--ddd-theme-default-skyBlue), and White.
- **Typography:** Uses DDD CSS variables for font sizing and weights.
- **Spacing:** All margins and padding utilize --ddd-spacing-* variables.

## Credits

**Developer:** Collin Krasnai
**Design System:** HAX The Web
**Assets:**
- Player images generated via randomuser.me
