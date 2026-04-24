# 🔥 HabitFlow

A beautiful, offline-capable **Progressive Web App (PWA)** for tracking your daily habits and building streaks.

**[Live Demo →](https://your-username.github.io/habit-tracker)**

---

## ✨ Features

- ✅ **Today view** — check off habits with one tap
- 📋 **Habits view** — manage all habits with 30-day progress
- 📅 **Weekly calendar** — tap any day to log/unlog
- 📊 **Stats** — streaks, completions, consistency scores
- 🌙 **Dark / Light mode** — persists across sessions
- 📲 **Install as PWA** — works on phone home screen
- 🔌 **100% offline** — no internet needed after first load
- 💾 **Local storage** — all data stays on your device

---

## 🚀 Deploy to GitHub Pages (3 steps)

### 1. Create a new GitHub repo
Go to [github.com/new](https://github.com/new) and create a repo named `habit-tracker` (or anything you like).

### 2. Push this code
```bash
git init
git add .
git commit -m "Initial commit — HabitFlow PWA"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/habit-tracker.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will auto-deploy on every push to `main`

Your app will be live at:
```
https://YOUR_USERNAME.github.io/habit-tracker/
```

---

## 📲 Installing as a PWA

**On Android (Chrome):**
1. Open the app URL in Chrome
2. Tap the banner "Add HabitFlow to home screen" OR
3. Tap the 3-dot menu → "Add to Home screen"

**On iPhone (Safari):**
1. Open the app URL in Safari
2. Tap the Share button (box with arrow)
3. Scroll down and tap "Add to Home Screen"

---

## 🗂 File Structure

```
habit-tracker/
├── index.html          # Main app (single file)
├── manifest.json       # PWA manifest
├── sw.js               # Service worker (offline support)
├── icons/
│   ├── icon-192.png    # App icon (small)
│   └── icon-512.png    # App icon (large)
└── .github/
    └── workflows/
        └── deploy.yml  # Auto-deploy to GitHub Pages
```

---

## 🛠 Local Development

No build tools needed! Just open the file:

```bash
# Option 1: Python server (recommended for PWA features)
python3 -m http.server 8080
# then open http://localhost:8080

# Option 2: Just open the file
open index.html
```

> **Note:** Service workers require HTTPS or localhost. GitHub Pages provides HTTPS automatically.

---

## 📄 License

MIT — free to use, modify, and share.
