# Harshal Mendhule — Developer Portfolio

A modern, responsive, and interactive developer portfolio built to showcase my projects, technical skills, experience, achievements, certifications.

![Portfolio Preview](./public/images/og-image.png)

## 🌐 Live Portfolio

> Add your deployed Vercel URL here

- **Portfolio:** [`https://your-portfolio.vercel.app`](https://your-portfolio.vercel.app)
- **Play Store App (Vidya Sathi):** [`https://play.google.com/store/apps/details?id=com.vidyasathi.app`](https://play.google.com/store/apps/details?id=com.vidyasathi.app)
- **Mobile APKs (Google Drive):** [`https://drive.google.com/drive/folders/1Xcl7e1XHEFdmwVCqpRa3Vk6ukLzypN2Z?usp=sharing`](https://drive.google.com/drive/folders/1Xcl7e1XHEFdmwVCqpRa3Vk6ukLzypN2Z?usp=sharing)
- **SurakshaNet Web App:** [`https://cameramapping-web.onrender.com/login`](https://cameramapping-web.onrender.com/login)
- **BlindSpot AI Web App:** [`https://blindspot-ai-t1bn.onrender.com/`](https://blindspot-ai-t1bn.onrender.com/)

---

## ✨ Features

- 📱 Fully responsive design for desktop, tablet, and mobile
- ⚡ Fast and optimized React + Vite application
- 🎬 Animated loading screen with HM branding
- ✨ Smooth scroll and section-reveal animations
- 🧭 Interactive navigation with active-section detection
- 📂 Dynamic project showcase
- 🖼️ Project screenshots and image galleries
- 🔍 Detailed project information through interactive modals
- 🏆 Achievements and competition showcase
- 📜 Certifications section
- 💼 Experience and internship timeline
- 🎓 Education section
- 🛠️ Categorized technical skills
- 📄 Downloadable resume
- 📬 Contact section
- 🔗 GitHub, LinkedIn and other social links
- 📱 Mobile-friendly navigation menu

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg                  # Brand monogram favicon
│   ├── harshal.jpg                  # Profile photograph
│   ├── Harshal_Mendhule_Resume.pdf  # Downloadable PDF resume
│   ├── images/
│   │   └── og-image.png             # Social preview card
│   └── projects/                    # Project screenshot galleries
│       ├── surakshanet-1.jpg
│       ├── surakshanet-2.jpg
│       ├── surakshanet-3.jpg
│       ├── blindspot-1.jpg
│       └── blindspot-2.jpg
├── src/
│   ├── components/                  # Modular React UI components
│   │   ├── ui/
│   │   │   ├── BackgroundScene.jsx  # SVG grid and curves
│   │   │   ├── CanvasNetwork.jsx    # Particle network canvas
│   │   │   ├── ScrollReveal.jsx     # IntersectionObserver reveal wrapper
│   │   │   ├── TiltCard.jsx         # 3D perspective hover card
│   │   │   └── ThemeToggle.jsx      # Dark/light mode switcher
│   │   ├── About.jsx                # Bio & 4 key metrics
│   │   ├── Achievements.jsx         # Hackathons & awards with category badges
│   │   ├── Certifications.jsx       # Academic & industry credentials
│   │   ├── CodingProfiles.jsx       # GfG SVG donut & LeetCode statistics
│   │   ├── Contact.jsx              # Contact form & 1-click copy buttons
│   │   ├── Education.jsx            # Degree & academic journey
│   │   ├── Experience.jsx           # Internships & leadership history
│   │   ├── Footer.jsx               # Quick links & back-to-top button
│   │   ├── Hero.jsx                 # Intro banner, role cycler & avatar
│   │   ├── Navbar.jsx               # Header navigation & mobile drawer
│   │   ├── ProjectModal.jsx         # Interactive modal with screenshot gallery
│   │   ├── Projects.jsx             # Category filtered project catalog
│   │   └── ResumeModal.jsx          # In-browser PDF preview modal
│   ├── data/                        # Structured content files
│   │   ├── achievements.js          # Hackathons, coding contest metrics
│   │   ├── certifications.js        # Verified credentials
│   │   ├── constants.js             # Social URLs, phone, email & SVGs
│   │   ├── education.js             # College & school records
│   │   ├── experience.js            # Work history & responsibilities
│   │   ├── projects.js              # Projects, APK drive links & images
│   │   └── skills.js                # Categorized technical skills
│   ├── App.jsx                      # Main orchestrator component
│   ├── index.css                    # Tailwind CSS imports & color variables
│   └── main.jsx                     # Application entry point
├── index.html                       # HTML5 template with SEO & OpenGraph tags
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (comes with Node.js)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harshl3/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🚢 How to Deploy on Vercel

### Option 1: Deploy via GitHub (Recommended)

1. Initialize Git in the project and push to GitHub:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial commit: Harshal Mendhule Portfolio"
   git branch -M main
   git remote add origin https://github.com/harshl3/portfolio.git
   git push -u origin main
   ```

2. Open [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..."** > **"Project"**.
3. Import your `portfolio` GitHub repository.
4. Framework Preset will automatically detect **Vite**.
   - If your repository root contains the `portfolio` folder, set **Root Directory** to `portfolio`.
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. Your portfolio will be live with free SSL in less than a minute.

### Option 2: Deploy directly with Vercel CLI

```bash
cd portfolio
npx vercel
```
Follow the interactive prompts to deploy directly from your terminal.

---

## 👤 Author

**Harshal Mendhule**  
*Final-Year B.Tech Information Technology Student*  
*St. Vincent Pallotti College of Engineering & Technology, Nagpur*

- **LinkedIn:** [harshal-mendhule-1a6361323](https://www.linkedin.com/in/harshal-mendhule-1a6361323)
- **GitHub:** [@harshl3](https://github.com/harshl3)
- **GeeksforGeeks:** [harshalmexrr1](https://www.geeksforgeeks.org/profile/harshalmexrr1)
- **LeetCode:** [Harshl_3](https://leetcode.com/u/Harshl_3/)
- **Email:** [harshalmendhule3@gmail.com](mailto:harshalmendhule3@gmail.com)
- **Phone:** `+91 87664 53345`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
