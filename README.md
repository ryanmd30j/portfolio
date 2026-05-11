# Ryan D'Souza — Portfolio

A personal portfolio site built from scratch with Next.js, TypeScript, and Tailwind CSS. Features a responsive design, scroll animations, and a working contact form powered by a custom API route and Resend.

🔗 **Live site:** [portfolio-rust-eta-35.vercel.app](https://portfolio-rust-eta-35.vercel.app)

---

## About

I'm an MSc Computer Science student at Manchester Metropolitan University, currently achieving Distinction-level grades, building toward a career in DevOps and security engineering. My MSc dissertation is on automated security fuzzing in CI/CD pipelines.

This site is my personal home on the web somewhere to point recruiters, collaborators, and anyone curious about my work.

---

## Features

- **Component-based architecture** — Next.js App Router with clean separation between `Navbar`, `Hero`, `About`, `Projects`, and `Contact`
- **Server-side API route** at `/api/contact` with full input validation
- **Working contact form** — fetches into the API route, validates server-side, sends email via Resend, with loading/success/error states
- **Smooth scroll animations** with Framer Motion (fades in as you scroll past each section)
- **Responsive design** — mobile-first, scales cleanly to desktop
- **Tech icons** on project cards (react-icons)
- **Environment variables** for secrets (no API keys in source)
- **Auto-deployed to Vercel** on every push to `main`

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | react-icons |
| Email | Resend |
| Hosting | Vercel |
| Version control | Git + GitHub |

---

## Local development

Clone the repo, install dependencies, and start the dev server:

```bash
git clone https://github.com/ryanmd30j/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Environment variables

The contact form requires a Resend API key. Create a `.env.local` file in the project root
---

## Contact

- **LinkedIn:** [linkedin.com/in/ryan-d-souza-59206a254](https://www.linkedin.com/in/ryan-d-souza-59206a254/)
- **GitHub:** [github.com/ryanmd30j](https://github.com/ryanmd30j)
- **Portfolio:** [portfolio-rust-eta-35.vercel.app](https://portfolio-rust-eta-35.vercel.app)

---

Built by Ryan D'Souza, 2026. Open to graduate roles in Software Engineering, DevOps, Site Reliability, and Security Engineering.
