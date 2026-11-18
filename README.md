# Personal Portfolio Website - Wasam Ali

A clean, responsive, and modern personal portfolio website built with semantic HTML5, modern CSS3 (with custom properties and responsive grid), and vanilla JavaScript.

---

## 📁 Repository Structure

```
Portfolio website - Antigravity/
├── index.html              # Main portfolio webpage
├── assets/
│   ├── css/
│   │   └── style.css       # Complete stylesheet (dark/light themes, layout, styles)
│   ├── js/
│   │   └── main.js         # Theme toggle, smooth scroll, form & dynamic features
│   └── images/             # Place your profile picture and project thumbnails here
├── resume/
│   ├── README.md           # Instructions for resume placement
│   └── resume.pdf          # Drop your resume here (named resume.pdf)
├── .gitignore              # Standard git ignore list
└── README.md               # Project documentation
```

---

## 🚀 Features

- **Dark & Light Mode**: Built-in toggle that remembers user preference via `localStorage`.
- **Responsive Layout**: Fluidly scales from mobile screens to ultra-wide displays.
- **Modern Design**: Glassmorphic cards, gradient accents, and subtle hover animations.
- **Zero Build Dependencies**: Pure HTML/CSS/JS — no build steps or heavy node frameworks required. Just open `index.html`!
- **Resume Integration**: Direct download button wired to `resume/resume.pdf`.
- **Contact Form**: Interactive form with built-in email client trigger.

---

## 🛠️ How to Customize

1. **Add Your Resume**:
   - Save your latest resume as `resume.pdf` inside the [resume](resume/) folder.
2. **Add Custom Images**:
   - Put your headshot or project screenshots into [assets/images/](assets/images/).
   - Update `index.html` to reference your images.
3. **Customize Projects & Experience**:
   - Open [index.html](index.html) and update the project titles, descriptions, and GitHub links with your own work.

---

## 🌐 Deploying to GitHub Pages (Free Hosting)

1. Push this repository to GitHub.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**. Your portfolio will be live at `https://wasamali.github.io/<repo-name>/` in seconds!
