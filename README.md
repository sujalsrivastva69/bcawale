# BCAWALE

IGNOU BCA students ka apna internet gang: notes, assignments, study centres aur community, sab ek jagah.

## Stack

- **Web:** Next.js 16 (App Router) + React 19 + Tailwind CSS 4, root folder me
- **API:** Express + MongoDB (Mongoose), `server/` folder me, alag se run hota hai

## Run locally

```bash
# Frontend
npm install
npm run dev          # http://localhost:3000

# Backend
cd server
cp .env.example .env # values bhar do
npm install
npm run dev
```

Checks:

```bash
npm run lint
npm run build
```

## Project layout

```
app/          routes (landing page, onboarding)
components/   landing page sections
data/         onboarding options
public/       static assets (public/images/bcawale-gang.jpg = hero photo)
server/       Express API (auth, profile, study centres)
docs/         product + engineering specs
```

## Docs

- [BCAWALE Master Prompt](docs/BCAWALE-MASTER-PROMPT.md): product vision, design rules, architecture and quality bar for the project.

## Notes for contributors

- Next.js 16 me breaking changes hain. Code likhne se pehle `AGENTS.md` dekho.
- Koi fake stats, fake testimonials ya lorem ipsum nahi. Data real hona chahiye ya section hi nahi.
