# Manar Boulahouanet - Portfolio

A professional portfolio website built with React, Vite, and EmailJS for contact form delivery.


Live demo: https://b-manar.vercel.app/

## Tech Stack

- Frontend: React 19 + Vite
- Styling: CSS Modules
- Contact delivery: EmailJS (@emailjs/browser)

## Project Structure

This repository is a frontend-only project.

```
my-portfolio/
├── frontend/                      # React + Vite app
│   ├── src/
│   │   ├── data/
│   │   │   └── portfolio.js       # All content lives here
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Tag.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx          # Experience + Education timeline
│   │   │   ├── Projects.jsx
│   │   │   ├── Awards.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx        # EmailJS contact form
│   │   ├── hooks/
│   │   │   └── useInView.js      
│   │   └── utils/
│   │       ├── api.js            
│   │       └── emailjs.js        # EmailJS configuration
│   ├── .env.example
│   ├── .env                       # (NOT pushed to GitHub)
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── package-lock.json
```

## Quick Start

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Open the displayed localhost URL to preview the site.

## EmailJS Setup

This project sends contact messages directly through EmailJS. Configure the following Vite environment variables in `frontend/.env`:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Use the EmailJS template fields:

- `from_name`
- `from_email`
- `subject`
- `message`

## Deployment

This project deploys as a static frontend app. No backend service is required.

- Frontend can be deployed on Vercel, Netlify, or any static host.
- Set the EmailJS environment variables in your deployment provider.

## Updating Content

All portfolio content is stored in `frontend/src/data/portfolio.js`.

- Profile and contact links -> `profile`
- Hero stats -> `stats`
- Projects -> `projects`
- Awards -> `awards`
- Skills -> `skills`
- Experience -> `experience`
- Education -> `education`
- Certifications -> `certifications`
