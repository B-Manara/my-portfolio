# Manar Boulahouanet — Portfolio

A professional portfolio website for Manar Boulahouanet — AI Engineer, Full-Stack Developer & Renewable Energy Researcher.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Vite, CSS Modules |
| Backend | Node.js + Express |
| Animations | CSS transitions + IntersectionObserver |
| Fonts | DM Serif Display · Outfit · DM Mono (Google Fonts) |

## Project Structure

```
manar-portfolio/
├── frontend/                 # React + Vite app
│   ├── src/
│   │   ├── data/
│   │   │   └── portfolio.js  ← All content lives here
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Tag.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx      ← Experience + Education timeline
│   │   │   ├── Projects.jsx
│   │   │   ├── Awards.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx    ← Form connected to backend
│   │   ├── hooks/
│   │   │   └── useInView.js   ← Scroll animation hook
│   │   └── utils/
│   │       └── api.js         ← Backend API calls
│   └── .env.example
└── backend/                  # Express API
    ├── server.js
    ├── routes/
    │   └── contact.js        ← Contact form handler
    └── .env.example
```

## Quick Start

### 1. Backend

```bash
cd backend
cp .env.example .env       # edit if needed
npm install
npm run dev                # runs on http://localhost:3001
```

### 2. Frontend

```bash
cd frontend
cp .env.example .env       # set VITE_API_URL if needed
npm install
npm run dev                # runs on http://localhost:5173
```

### 3. Production build

```bash
cd frontend
npm run build              # outputs to frontend/dist/
```

## Updating Content

All portfolio content is in one file: `frontend/src/data/portfolio.js`

- **Profile, bio, links** → `profile` object
- **Stats** (hero counters) → `stats` array
- **Projects** → `projects` array
- **Awards** → `awards` array
- **Skills** → `skills` object (grouped)
- **Work experience** → `experience` array
- **Education** → `education` array
- **Certifications** → `certifications` array

## Contact Form Email Setup

To enable real email delivery, configure SMTP in `backend/.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO=manar.boulahouanet@gmail.com
```

Then uncomment and configure the nodemailer block in `backend/routes/contact.js`.

## Deployment

- **Frontend** → Vercel, Netlify, or any static host (point to `frontend/dist`)
- **Backend** → Railway, Render, Fly.io, or any Node.js host
- Set `VITE_API_URL` in your frontend environment to your deployed backend URL
