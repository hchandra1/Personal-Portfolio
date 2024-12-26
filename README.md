# Personal-Portfolio
An immersive 3D portfolio website showcasing skills, projects, certifications, and achievements. Built with React, Three.js, and TailwindCSS for a sleek, interactive experience that reflects personal and professional growth.

## 🚀 Features
- **3D Interactivity**: Real-time 3D models using `@react-three/fiber` and `@react-three/drei` to create engaging visuals.
- **Dynamic Content**: Dedicated pages to display skills, certifications, projects, and contact information.
- **Responsive Design**: Fully responsive and optimized for both desktop and mobile viewing.
- **Interactive UI**: Framer Motion powers smooth transitions and animations across the site.
- **TailwindCSS**: Beautiful styling through a utility-first approach, enhancing both aesthetics and performance.
- **Optimized Performance**: Vite ensures fast builds and efficient hot reloading.
- **Accessible and Modern**: Accessible design and modern web practices ensure a seamless experience for all users.

## 🛠️ Tech Stack
- **React** – Component-based frontend framework
- **Three.js** – 3D graphics library integrated via `@react-three/fiber`
- **TailwindCSS** – Modern styling with utility classes
- **Framer Motion** – Fluid animations and page transitions
- **React Router** – Client-side routing
- **Vite** – Lightning-fast frontend tooling and build system
- **FormSubmit** – Backendless form submission for the contact page

## 📄 Pages Overview
### 1. **Home (Hero Section)**
- 3D animated computer model using `ComputersCanvas`.
- Dynamic text with typewriter effects for the introduction.
- Background parallax effects for an immersive landing page.

### 2. **About**
- Highlights educational background, work experience, and personal interests.
- Interactive card components showcasing extracurriculars and notable experiences.

### 3. **Achievements**
- Displays significant recognitions and awards.
- Achievements are dynamically rendered using map functions and hover effects.

### 4. **Certifications**
- A grid layout displaying certifications with tags and filters.
- Clicking on a certification reveals more details or redirects to credential links.

### 5. **Projects**
- A comprehensive list of personal and collaborative projects.
- Utilizes 3D hover-tilt effects with `react-tilt` for interactivity.
- Project cards include descriptions, tech stacks, and live/demo links.

### 6. **Contact**
- Clean and simple contact form powered by FormSubmit.
- Social media icons linking to GitHub, LinkedIn, and more.

## 🎨 Design Inspiration
- **Virtual Gym**: The portfolio mimics the layout of a virtual gym, where users can "walk" through different sections, aligning with the creator’s passion for fitness.
- **Minimalist yet Futuristic**: Dark mode themes with glowing accents provide a sleek, modern aesthetic.

## 🛆 Installation
Clone the repository and install dependencies to run the project locally.

```bash
git clone https://github.com/hchandra1/3d-portfolio.git
cd 3d-portfolio
npm install
npm run dev
```

To build for production:
```bash
npm run build
```

To preview the build:
```bash
npm run preview
```

## 🌐 Deployment
This project can be deployed on platforms such as:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 📂 Directory Structure
```
src/
├── assets/         # Static images, icons, and 3D models
├── components/     # Reusable React components (navbar, footer, etc.)
├── pages/          # Page components for routing (About, Projects, etc.)
├── styles/         # TailwindCSS and custom CSS files
├── utils/          # Utility functions
├── App.jsx         # Main application component
├── main.jsx        # Application entry point
└── index.html      # Base HTML file
```

## 🔧 Configuration
- **Vite Configuration**: `vite.config.js` – Configures Vite’s development server and build process.
- **TailwindCSS Configuration**: `tailwind.config.js` – Customizes Tailwind’s design system.
- **ESLint Configuration**: `eslint.config.js` – Linting and code quality enforcement.
- **PostCSS Configuration**: `postcss.config.js` – Tailwind integration with PostCSS.

## 🌟 Key Components
- **Hero.jsx** – Main landing page with 3D computer model.
- **AboutPage.jsx** – Displays background information.
- **ProjectsPage.jsx** – Lists and describes all projects.
- **AchievementsPage.jsx** – Highlights awards and recognitions.
- **CertificationsPage.jsx** – Showcases relevant certifications.
- **ContactPage.jsx** – Interactive contact form and social links.

## 🧑‍💻 Contributions
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes.
4. Open a pull request for review.

For major changes, open an issue to discuss your ideas beforehand.

## 📝 License
This project is licensed under the MIT License – free to modify and use for personal or commercial purposes.

---

