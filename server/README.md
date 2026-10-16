# BCAWale API

Express + MongoDB (Mongoose) backend for BCAWale.

## Setup

```bash
cd server
npm install
cp .env.example .env     # Windows PowerShell: copy .env.example .env
```

Fill in `server/.env`:

- `MONGODB_URI`: from MongoDB Atlas (free M0 cluster) -> Connect -> Drivers.
  In Atlas also add your IP under Network Access.
- `JWT_SECRET`: generate with
  `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`

Then:

```bash
npm run dev     # API on http://localhost:4000
npm test        # validation and auth-guard tests (no database needed)
```

## Endpoints

| Method | Path | Auth | Purpose |
| --- | --- | --- | --- |
| GET | `/api/health` | no | Liveness check |
| POST | `/api/auth/signup` | no | Create account, sets httpOnly cookie |
| POST | `/api/auth/login` | no | Login, sets httpOnly cookie |
| POST | `/api/auth/logout` | no | Clears cookie |
| GET | `/api/auth/me` | yes | Current user |
| PATCH | `/api/profile` | yes | Update semester, state, backlog, humour, matchOptIn, studyCentre |
| GET | `/api/centres/states` | no | States that have study centres |
| GET | `/api/centres/regional?state=` | no | Regional centres in a state |
| GET | `/api/centres?state=&regionalCentre=` | no | Study centres |

## Study centre data

`data/centres.json` starts empty on purpose. Add rows only from IGNOU's
official lists (see `data/centres.example.json` for the shape), keep
`"verified": false` until checked, then run `npm run seed:centres`.

## Not built yet

Email verification, password reset, matching, chat, assignments, admin routes.
