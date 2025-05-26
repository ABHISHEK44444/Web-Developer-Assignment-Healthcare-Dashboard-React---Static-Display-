
# Healthcare Dashboard v2 (React – Static Display)

A refreshed **static, responsive** dashboard inspired by the original reference but with new visual touches:

* Icons for every navigation & schedule item  
* A tiny **This Week calendar** component  
* Notification bell tucked inside the search bar  
* Emoji‑based hero illustration (no external image)  
* All data & icons come from **mockData.js** via props

## Quick Start

```bash
git clone <your‑fork‑url> && cd healthcare-dashboard-v2
npm install
npm start
```

The app opens at **http://localhost:3000**.

## Folder Structure

```
healthcare-dashboard-v2
├─ public/
└─ src/
   ├─ components/
   │  ├─ Sidebar.js
   │  ├─ Header.js
   │  ├─ Dashboard.js
   │  ├─ OrganCard.js
   │  ├─ ScheduleCard.js
   │  ├─ ActivityChart.js
   │  └─ WeekCalendar.js
   ├─ mockData.js
   ├─ App.js
   ├─ App.css
   ├─ index.js
   └─ index.css
```

## Tech

* React 18 (CRA)
* Bootstrap 5 utilities
* React‑Icons
