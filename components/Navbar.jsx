import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { id: "home", title: "Home", path: "/" },
  { id: "about", title: "About Me", path: "/about" },
  { id: "projects", title: "Projects", path: "/projects" },
  { id: "achievements", title: "Achievements", path: "/achievements" },
  { id: "certifications", title: "Certifications", path: "/certifications" },
  { id: "contact", title: "Contact Me", path: "/contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (nav) => {
    // Smooth scroll for sections on the home page
    if (nav.path === "/about" && location.pathname === "/") {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
        // Close mobile menu if it’s open
        setIsMenuOpen(false);
        return;
      }
    }

    // Navigate to other routes
    if (nav.path.startsWith("/")) {
      setActive(nav.title);
      // Close mobile menu if it’s open
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <RouterLink
          to="/"
          className="flex items-center space-x-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            // Close mobile menu if it’s open
            setIsMenuOpen(false);
          }}
        >
          <img
            src="/harilogo.png"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold text-black">
            Hari Chandrasekhar
          </span>
        </RouterLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-base font-medium cursor-pointer ${
                active === nav.title || location.pathname === nav.path
                  ? "text-black"
                  : "text-gray-600"
              } hover:text-black transition`}
            >
              {nav.path.startsWith("/") ? (
                <RouterLink to={nav.path} onClick={() => handleNavClick(nav)}>
                  {nav.title}
                </RouterLink>
              ) : (
                <ScrollLink
                  to={nav.path}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="md:hidden block text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* A simple hamburger icon using bars (FontAwesome or any icon library works too) */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-start p-4 space-y-3">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-base font-medium cursor-pointer ${
                  active === nav.title || location.pathname === nav.path
                    ? "text-black"
                    : "text-gray-600"
                } hover:text-black transition`}
              >
                {nav.path.startsWith("/") ? (
                  <RouterLink to={nav.path} onClick={() => handleNavClick(nav)}>
                    {nav.title}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    to={nav.path}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => {
                      setActive(nav.title);
                      setIsMenuOpen(false);
                    }}
                  >
                    {nav.title}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
