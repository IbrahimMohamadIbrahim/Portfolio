# Full-Stack Developer & UI Architect Portfolio

A responsive, high-performance, and modern developer portfolio web application built with **React 19**, **Tailwind CSS v4**, **Vite 8**, and **React Router v7**.

---

## 🌟 Pages & Key Features

### 1. **Main Page (Home)**
- **Hero Section**: Dynamic availability pill, glowing gradients, elevator pitch, and fast CTAs.
- **Key Metrics Row**: Years of experience, projects shipped, Lighthouse performance, and open-source contributions.
- **Core Specializations**: Frontend architecture, Full-Stack & APIs, UI/UX Design Systems, and Performance/SEO optimization.
- **Flagship Projects Showcase**: Highlighting top-tier production projects with instant case study inspection.
- **Skills Matrix**: Interactive category selector across Frontend, Backend, Tools & DevOps, and Architecture.
- **Testimonials & Endorsements**: Credible feedback cards from engineering leaders and product managers.
- **Call-to-Action**: Direct conversion banner with one-click consultation access.

### 2. **Projects Page (`/projects`)**
- **Category Filter Tabs**: Instant filtering by *All*, *Full-Stack*, *Frontend*, and *Cloud & AI*.
- **Live Search**: Real-time keyword search across project titles, descriptions, and technology tags.
- **Case Study Modal**: In-depth modal dialog featuring project architecture, impact metrics, full tech stack, and links to live demos and GitHub repositories.
- **Empty & Active States**: Smooth count badges, reset button, and clear messaging.

### 3. **Certificates Page (`/certificates`)**
- **Category Filter Tabs**: Filter by *All*, *Cloud & DevOps*, *Frontend & UI*, *Data & Backend*, *Agile & Management*.
- **Live Search**: Search through certifications, issuing authorities, credential IDs, and skills.
- **Verification Links**: Instant one-click external credential verification.
- **Inspection Modal**: Detailed dialog highlighting verified competencies and knowledge domains.

### 4. **About The Project Page (`/about`)**
- **Dual-Perspective View**:
  - **About This Portfolio Project**: In-depth case study breaking down architectural goals, why React 19 + Tailwind v4 was chosen, system modularity, and 100% Lighthouse scores.
  - **About The Developer**: Personal bio, engineering philosophy, career milestone timeline, and professional certifications (AWS, Meta, MongoDB).

### 4. **Contact Page (`/contact`)**
- **Interactive Contact Form**: Custom fields for name, email, project type, budget estimation, subject, and message.
- **Live Submission Simulation**: Animated loading spinner and confirmation banner with form reset.
- **Direct Communication Cards**: One-click **Copy Email** with copy status feedback, phone link, and location.
- **Developer Profiles**: Direct links to GitHub, LinkedIn, and Twitter.
- **FAQ Accordion**: Expandable answers to common questions on timelines, availability, and stack recommendations.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Component-driven UI library & state management |
| **Tailwind CSS v4** | Modern utility-first CSS styling via `@tailwindcss/vite` |
| **Vite 8** | Ultra-fast local dev server and optimized rollup bundling |
| **React Router v7** | Declarative client-side routing and nested layouts |
| **Lucide React** | Lightweight, accessible iconography |

---

## 🚀 Getting Started

### Prerequisites
Make sure [Node.js](https://nodejs.org/) (v18+ recommended) is installed.

### Installation
```bash
npm install
```

### Development Server
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build
Compile and bundle optimized assets:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check for code quality and syntax standards:
```bash
npm run lint
```

---

## 📁 Project Structure

```
Portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Brand logos and images
│   ├── components/         # Reusable UI components
│   │   ├── Footer.jsx      # Sticky/glassmorphic responsive footer
│   │   ├── Icons.jsx       # Custom SVG brand icons (GitHub, LinkedIn, Twitter)
│   │   ├── Layout.jsx      # Master layout with navbar and footer
│   │   ├── Navbar.jsx      # Frosted-glass header with mobile drawer
│   │   ├── ProjectCard.jsx # Project preview card with tags and actions
│   │   ├── ProjectModal.jsx# In-depth case study modal dialog
│   │   └── SectionHeader.jsx# Reusable section header component
│   ├── data/
│   │   └── portfolioData.js# Centralized source of truth for all content
│   ├── pages/              # Application views
│   │   ├── AboutProject.jsx# Case study & developer profile tabs
│   │   ├── Contact.jsx     # Contact form, direct details, and FAQ
│   │   ├── Home.jsx        # Landing page with hero, services, and stats
│   │   └── Projects.jsx    # Filterable and searchable projects showcase
│   ├── App.jsx             # React Router configuration & redirects
│   ├── index.css           # Tailwind v4 import & custom scrollbar
│   └── main.jsx            # React root mount
├── index.html              # HTML document with Google Fonts preconnected
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration with Tailwind plugin
```

---

## 🎨 Customizing Your Portfolio

All text, projects, services, skills, testimonials, and contact details are organized in a single file:  
`src/data/portfolioData.js`

To personalize this portfolio with your own details:
1. Update `developer` object in [portfolioData.js](file:///d:/Projects/Portfolio/src/data/portfolioData.js) with your name, bio, email, socials, and stats.
2. Edit or add your projects in `projects` array.
3. Update your skills in `skillsData`.
4. Adjust experience timeline in `timeline` and certifications in `certificates`.
