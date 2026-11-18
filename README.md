# Wasam Ali — Senior Brand & Systems Designer Portfolio

> **Architecting Visual Systems for Aviation, Enterprise & Institutional Leaders.**  
> Built strictly in the **International Typographic Style (Swiss Grid)** with high-contrast monochrome macro-blocks, architectural precision, oversized tight-tracked typography, 1px structural hairline borders, and smooth micro-interactions.

---

## 📐 Design & Visual Identity Architecture

- **Aesthetic Direction:** Neo-Brutalist Swiss Editorial meets Executive Design Consultancy (inspired by Pentagram, Josef Müller-Brockmann, and Vercel's architectural minimalism).
- **Rhythm:** Alternating seamlessly between Stark Matte Black (`#000000`) macro-section dividers/hero and Pure Gallery White (`#FFFFFF`) project showcases.
- **Color Palette:**
  - `Primary Dark:` `#000000` (Pure Matte Black)
  - `Primary Light:` `#FFFFFF` (Pure Gallery White)
  - `Secondary Surface:` `#F7F7F7` (Light Mode) / `#0A0A0A` (Dark Surface)
  - `Hairline Borders:` `#222222` (on dark) / `#E5E5E5` (on light)
  - `Accent Accent:` `#FF3B00` (International Aerospace Safety Orange)
- **Signature Motifs:**
  - Monogram: **`wa.`** (bold lowercase with period, tight kerning).
  - Directional Hover Arrows: `→` and `↗` with subtle kinetic hover shifts (`translateX(6px)`).
  - Lowercase bulleted deliverable lists (`• anniversary identity`, `• stage & environmental graphics`).
  - Architectural crosshairs (`+`) and coordinate frames for design mockups.

---

## 📁 Repository Structure

```
Portfolio website - Antigravity/
├── index.html                           # Main Swiss-Grid portfolio webpage
├── assets/
│   ├── css/
│   │   └── style.css                    # Swiss grid layout, 1px borders, typography & animations
│   ├── js/
│   │   ├── portfolioData.js             # Centralized project data, chapters, and archive items
│   │   └── main.js                      # Archive table filtering, modal lightbox, clipboard toast
│   ├── images/
│   │   └── .gitkeep                     # High-resolution design mockups & assets
│   ├── Wasam-Ali-Resume.pdf             # Direct resume download asset
│   └── Wasam-Ali-Portfolio-Deck.pdf     # Direct portfolio deck download asset
├── resume/
│   ├── README.md                        # Instructions for resume placement
│   └── resume.pdf                       # Mirror copy of resume
├── .gitignore                           # Git ignore rules
└── README.md                            # Comprehensive documentation
```

---

## 🚀 Key Sections & Modules

1. **Header & Navigation Bar**:
   - `wa.` monogram logo + live status badge: `[● Available for Select Leadership & Brand Systems Roles]`.
   - Anchors for `Index / Work`, `Archive`, `Profile`, `Methodology`, `Testimonials`, `Contact`.
   - Direct CTAs: `Download Resume ↓` and `Let's Talk ↗`.
2. **Hero Section & Executive Narrative**:
   - 2-Column Swiss layout presenting Wasam's 7+ years of experience across aviation recruitment, conference footprints, and engineering-grounded brand systems.
   - Fluent stack breakdown and client roster grid (Spitfire Elite, OBAP, Holland America Line, Sacoor Brothers, COTRA AG, etc.).
3. **The 4 Master Chapters**:
   - **Chapter 01: Spitfire Elite** (Exhibition Systems across 7 national expos, Proprietary Courseware Schematics with confidentiality badge, Kajabi LMS).
   - **Chapter 02: OBAP** (OBAP 50th Anniversary in Chicago, OBAP Black Label sub-brand & challenge coins, 2025 Annual Convention, Outreach Campaigns).
   - **Chapter 03: Brand Systems & Strategic Communications** (Bartol Foundation Rebrand, College Advising Corps).
   - **Chapter 04: Corporate Works** (Holland America Line, Sacoor Brothers, COTRA AG).
4. **Interactive Archive / Project Catalogue Table**:
   - Swiss data table with instant category filter pills (`All Works`, `Aviation & Aerospace`, `Brand Identity`, `Environmental & Print`, `Digital & Web`, `Executive Comms`).
   - Clickable rows that open a full-fidelity Lightbox Drawer / Modal for artifact inspection.
5. **Methodology: "Engineering Precision × Brand Systems"**:
   - 3 Pillars: Structural Systems Thinking, Physical-to-Digital Continuity, High-Volume Pipeline Velocity.
6. **Testimonials & Endorsements**:
   - Editorial quotation grid highlighting leadership recommendations.
7. **Contact & Resume Hub Footer**:
   - Giant interactive headline `Let’s build your next visual system. →`, one-click copy email toast, PDF download hubs, and interactive inquiry form.

---

## 🛠️ Customizing Content & Projects

All data is separated cleanly into `assets/js/portfolioData.js`:
- To add or edit a case study, update `portfolioData.chapters` or `portfolioData.archive`.
- To replace design mockups with real images, place image files in `assets/images/` and replace the placeholder containers in `index.html` or attach `src` to `<img>` tags.
- To update your resume, replace `assets/Wasam-Ali-Resume.pdf`.

---

## 🌐 Live Deployment to GitHub Pages

1. In your GitHub repository at [https://github.com/wasamali/portfolio](https://github.com/wasamali/portfolio):
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Branch**:
   - Select `main`
   - Folder: `/(root)`
4. Click **Save**.
5. Your portfolio is live at:
   **`https://wasamali.github.io/portfolio/`**
