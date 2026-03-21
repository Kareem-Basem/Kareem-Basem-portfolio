# Kareem Basem — Portfolio

React + Tailwind CSS portfolio.

## 🚀 Setup (3 steps)

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm start

# 3. Build for production (Vercel/Netlify)
npm run build
```

## 🌐 Deploy on Vercel (مجاناً زي ياسين)

1. ارفع الـ project على GitHub
2. روح [vercel.com](https://vercel.com) → New Project
3. اختار الـ repo → Deploy ✅

## 📁 Structure

```
src/
├── components/
│   ├── Navbar.jsx       ← Navigation
│   ├── Hero.jsx         ← Hero section + typewriter
│   ├── About.jsx        ← About + skills
│   ├── Projects.jsx     ← 4 project cards
│   ├── Experience.jsx   ← Timeline + training
│   ├── Certs.jsx        ← Certifications + achievements
│   ├── Contact.jsx      ← Contact + footer
│   └── SectionHeader.jsx
├── App.jsx
└── index.css            ← Tailwind + custom animations
```

## ✏️ لو عايز تعدل

- **ألوانك:** `tailwind.config.js` → `theme.extend.colors`
- **بياناتك:** كل component فيه data array في الأول — عدّل فيها بسهولة
- **صورتك:** في `Hero.jsx` استبدل الـ `KB` initials بـ `<img>` tag
