<div align="center">

# 🌐 Mahmoud Saad — Personal Portfolio

**Front-End Developer · JavaScript Developer · Muscat, Oman**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-mahmoud--codeee.github.io-orange?style=for-the-badge&logo=github)](https://mahmoud-codeee.github.io/my-portfolio/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

> A production-grade, animated personal portfolio — built to impress, not just to exist.

</div>

---

## 📸 Preview

> **Live site:** [mahmoud-codeee.github.io/my-portfolio](https://mahmoud-codeee.github.io/my-portfolio/)

---

## ✨ Features

- ⚡ **Blazing fast** — Vite build with code splitting and tree-shaking
- 🎭 **60fps animations** — Framer Motion scroll, hover, and entrance effects throughout
- 🌑 **Dark theme** — Consistent black + amber/orange design language
- 📱 **Fully responsive** — Mobile-first, works on every screen size
- 🖱️ **3D card tilt** — Project cards respond to mouse movement in real time
- 🔢 **Rotating roles** — Animated type-switch between job titles in the hero
- 🧩 **Modular sections** — Each section is its own isolated component
- ♿ **Accessible** — Semantic HTML, `aria-live` regions, `aria-label` attributes
- 🗂️ **Clean architecture** — No prop drilling, no global state, dead-simple file structure

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 12 |
| Hosting | GitHub Pages (served from `docs/`) |
| Version Control | Git & GitHub |

---

## 📄 Sections

| Section | Description |
|---|---|
| **Hero** | Name, animated role switcher, GPA/rank stats, CTA buttons |
| **About** | Bio from CV, achievement cards, 5-column Tech Stack grid |
| **Projects** | 3D tilt cards with live demo + GitHub links for each project |
| **Certificates** | Certificate gallery with modal zoom view, show more/less |
| **Contact** | Contact form with email + social links |

---

## 🚀 Projects Showcased

### [TypeRush](https://mahmoud-codeee.github.io/typerush/)
Real-time typing speed test — live WPM tracking, accuracy scoring, dynamic text challenges.
`React` `TypeScript` `Tailwind CSS`

### [Personal Portfolio](https://mahmoud-codeee.github.io/my-portfolio/)
This site. React + TypeScript + Framer Motion, deployed on GitHub Pages.
`React` `TypeScript` `Framer Motion` `Tailwind CSS`

### [Task Manager](https://mahmoud-codeee.github.io/task-manager-soft-ui/)
Task management app with LocalStorage persistence, real-time filtering, soft UI design.
`HTML` `CSS` `JavaScript`

---

## 📁 Project Structure

```
my-portfolio/
├── public/                         # Static assets served at root
│   ├── Mahmoud_Saad_Frontend_Developer_CV.pdf
│   ├── git-github.jpg
│   ├── RPA.png
│   ├── UiPath-1.png
│   ├── UiPath-2.png
│   ├── grad-1.jpeg
│   ├── grad-2.jpeg
│   └── grad-3.jpeg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Certificates.tsx
│   │   └── Contact.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   └── main.tsx
├── docs/                           # GitHub Pages deploy target
├── dist/                           # Vite build output (gitignored)
├── vite.config.ts                  # base: "/my-portfolio/"
├── tailwind.config.js
└── tsconfig.json
```

---

## ⚙️ Local Setup

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9
- Git

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/mahmoud-codeee/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

The dev server runs at `http://localhost:5173/my-portfolio/`.

> **Note:** The `base: "/my-portfolio/"` in `vite.config.ts` is required for GitHub Pages subdirectory hosting. All static asset references use `import.meta.env.BASE_URL` to resolve correctly in both dev and production.

---

## 👤 Author

**Mahmoud Saad Mokhtar**
Software Engineering Graduate · GPA 3.9/4.0 · 1st Rank · Dean's List
Muscat College × UMPSA · Muscat, Oman

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-orange?style=flat-square)](https://mahmoud-codeee.github.io/my-portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-mahmoud--codeee-181717?style=flat-square&logo=github)](https://github.com/mahmoud-codeee)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/mahmoud-saad-mokhtar)
[![Email](https://img.shields.io/badge/Email-mahmoudsaad200251%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:mahmoudsaad200251@gmail.com)

---

<div align="center">
  <sub>Built with React, TypeScript, and way too much Framer Motion. © 2025 Mahmoud Saad Mokhtar</sub>
</div>
