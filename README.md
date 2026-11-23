<div align="center">

# Postora

**A multi-category classifieds marketplace — browse, post, and moderate listings.**

![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/status-in_development-c2410c)

</div>

---

## About

Postora is a classifieds web app inspired by marketplace sites like sahibinden. Visitors browse listings across categories such as vehicles, real estate, electronics, and clothing. Registered users post and manage their own listings. Admins review every listing before it goes public.

The app is **frontend-only**: there is no server or database. Data starts from a seed file, lives in a React store, and is saved in the browser's `localStorage`. A .NET backend is planned as a separate phase.

## Features

- **Browse and search:** category, city, and price filters, sorting, and pagination, all kept in the URL so results can be shared
- **Listing lifecycle:** save as draft, submit for review, approve or reject with a reason, archive
- **User dashboard:** my listings, favorites, orders, notifications, profile
- **Admin panel:** moderation queue, user management, orders, reports with charts, audit log, demo data reset
- **Role-based access:** separate login pages for users and admins, protected routes, and a 403 page
- **Validated forms:** React Hook Form + Zod
- **Bilingual:** Turkish and English, switchable at any time
- **Responsive:** works on phones, tablets, and desktops

## Roles

| Role | How to get it | Can do |
|---|---|---|
| **Visitor** | No sign-in | Browse, search, filter, view listing details |
| **User** | Sign up at `/register`, sign in at `/login` | Post listings, manage own listings, add favorites, place orders, manage profile |
| **Admin** | Seeded account, signs in at `/admin/login` | Approve or reject listings, manage users and orders, view reports and audit log |

> Roles can't be chosen at sign-up. Every new account is a **user**.

## Core workflow

```text
User     → /login        → /my-listings/new  → listing is "pending"
Admin    → /admin/login  → /admin/listings   → approves it → "approved"
Visitor  → /listings     → sees the new listing
```

### Listing statuses

```text
draft    ── submit ─────────> pending
pending  ── admin approves ─> approved
pending  ── admin rejects ──> rejected
rejected ── edit & resubmit > pending
approved ── archive ────────> archived
```

Only **approved** listings are visible to the public.

## Pages

<details>
<summary><b>Public</b></summary>

| Route | Page |
|---|---|
| `/` | Home: hero search, categories, latest listings |
| `/listings` | Catalog: search, filters, sorting, pagination |
| `/listings/:id` | Listing detail |
| `/login` | User sign-in |
| `/admin/login` | Admin sign-in |
| `/register` | Sign up |
| `/unauthorized` | 403 |
| `*` | 404 |

</details>

<details>
<summary><b>User</b></summary>

| Route | Page |
|---|---|
| `/dashboard` | Overview |
| `/my-listings` | My listings |
| `/my-listings/new` | Multi-step listing form |
| `/my-listings/:id/edit` | Edit listing |
| `/favorites` | Favorites |
| `/orders` | My orders |
| `/notifications` | Notifications |
| `/profile` | Profile and password |

</details>

<details>
<summary><b>Admin</b></summary>

| Route | Page |
|---|---|
| `/admin` | Dashboard |
| `/admin/listings` | Moderation |
| `/admin/users` | Users |
| `/admin/orders` | Orders |
| `/admin/reports` | Reports |
| `/admin/audit-log` | Audit log |
| `/admin/settings` | Demo settings |

</details>

## Tech stack

| Area | Tools |
|---|---|
| UI | React 19, TypeScript, Tailwind CSS v4, Font Awesome |
| Routing | React Router |
| State | Context API, `useReducer`, `localStorage` |
| Forms | React Hook Form, Zod |
| i18n | i18next, react-i18next |
| Charts | Recharts |
| Testing | Vitest, React Testing Library, Playwright |
| Tooling | Vite, ESLint |

## Getting started

**Requirements:** Node.js 20 or later

```bash
git clone <repo-url>
cd Postora/Presentation/postora.web
npm install
npm run dev
```

Then open http://localhost:5173.

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |


## Project structure

```text
Postora/
├─ Core/                    # .NET Domain and Application (planned)
├─ Infrastructure/          # .NET Infrastructure and Persistence (planned)
├─ Presentation/
│  ├─ Postora.API/          # .NET Web API (planned)
│  └─ postora.web/          # React app
│     └─ src/
│        ├─ components/     # common, layout, home, listing, dashboard, admin, routes
│        ├─ layouts/        # public, user, admin layouts
│        ├─ pages/          # public, user, admin pages
│        ├─ store/          # app data store (useReducer)
│        ├─ context/        # auth, toast
│        ├─ hooks/          # custom hooks
│        ├─ schemas/        # Zod schemas
│        ├─ data/           # seed data
│        ├─ lib/            # localStorage helpers
│        ├─ types/          # TypeScript types
│        ├─ constants/
│        ├─ utils/
│        └─ i18n/           # en, tr
└─ docs/                    # roadmap
```

## Limitations

> [!WARNING]
> This is a **demo**, not a secure application.
>
> - There is no server. Data stays in your browser and isn't shared between devices.
> - Demo passwords are visible in the source code, and roles can be changed with browser dev tools.
> - Don't enter real personal information.

## Roadmap

- [x] Layout, theme, and TR/EN language support
- [x] Home page, listing cards, listing detail
- [x] Sign-in, sign-up, protected routes, favorites
- [ ] App store with `useReducer` and `localStorage`
- [ ] Shared UI components and React Hook Form + Zod
- [ ] Separate admin sign-in, layouts, 403 page
- [ ] User dashboard: post, edit, and manage listings, orders, notifications, profile
- [ ] Admin panel: moderation, users, orders, reports, audit log, settings
- [ ] Catalog with filters, sorting, pagination
- [ ] Tests (Vitest, Playwright)
- [ ] .NET backend (separate phase)
