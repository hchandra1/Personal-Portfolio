import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import About from "./components/About";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import AchievementsPage from "./pages/AchievementsPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";  // Import Contact Page

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />  {/* Navbar persists across all pages */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
              </div>
              <div id="about-section">
                <About />
              </div>

              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <ContactPage />  {/* Contact Section on Home Page */}
            </div>
          }
        />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />  {/* New Route for Contact */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
