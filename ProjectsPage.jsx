// Import Statements
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import fin from "../assets/fin.png";
import gym from "../assets/gym.png";
import cyber from "../assets/cyber.png";
import git from "../assets/git.png";
import re from "../assets/re.png"; 
import fpg from "../assets/fpg.png"; 

// NEW IMPORTS for the additional three cards
import risk12 from "../assets/risk12.png";
import dsa1 from "../assets/dsa1.png";
import dsa2 from "../assets/dsa2.png";

// Sample Project Data
const projectData = [
  {
    name: "Salary Report Generator",
    description:
      "Automates salary report generation using employee data and PDF output. Click on the Github Logo to find out more!",
    tags: ["python", "pandas", "data science"],
    image: fin,
    source_code_link: "https://github.com/hchandra1/Salary-Report-Generator",
  },
  {
    name: "FitBot - Gym Trainer Chatbot",
    description:
      "AI-based gym trainer chatbot using AWS Lex and Python. Click on the Github Logo to find out more!",
    tags: ["python", "AWS", "AI/ML"],
    image: gym,
    source_code_link:
      "https://github.com/hchandra1/FitBot---Your-Personal-Gym-Trainer-Chatbot",
  },
  {
    name: "Wazuh SIEM Security",
    description:
      "Deployed Wazuh SIEM for threat detection across endpoints. Click to find out more!",
    tags: ["cybersecurity", "wazuh", "python"],
    image: cyber,
    guide_link:
      "https://wazhari.hashnode.space/default-guide/wazuh-setup-and-configuration-guide",
  },
  {
    name: "Proposal for Developing a Mobile Application to Reduce Food Waste",
    description:
      "A mobile app enabling retailers to sell suboptimal products at discounted rates to minimize food waste and support food-insecure communities. Click to find out more!",
    tags: ["research"],
    image: re,
    guide_link:
      "https://www.ijisrt.com/analysis-of-global-retail-food-waste-proposal-for-developing-a-mobile-application",
  },
  {
    name: "4-Way Traffic Signal Controller",
    description:
      "A VHDL-based 4-way traffic light control system implemented on an FPGA, featuring state machines, timers, and pedestrian crossing integration to enhance intersection safety and efficiency. Click to find out more!",
    tags: ["fpga", "vhdl", "hardware"],
    image: fpg,
    guide_link:
      "https://fpgahari.hashnode.space/default-guide/introduction",
  },

  // 1) New Card: RISC-V Morse Code LED Converter
  {
    name: "RISC-V Morse Code LED Converter",
    description:
      "A RISC-V assembly program that converts ASCII text to Morse code, flashing an LED via GPIO to display the encoded message. It demonstrates low-level programming and embedded system design. Click on the Github Logo to find out more!",
    tags: ["RISC-V", "hardware", "GPIO"],
    image: risk12,
    source_code_link: "https://github.com/hchandra1/Morse-Code-LED-Converter-",
  },

  // 2) New Card: Multi-Relational-Knowledge-Graph
  {
    name: "Multi-Relational-Knowledge-Graph",
    description:
      "A C++ implementation of a multi-relational, weighted, undirected graph that models complex entity relationships, enabling analysis and querying of node connections based on paths and weights. Click on the Github Logo to find out more!",
    tags: ["C++", "DSA"],
    image: dsa1,
    source_code_link:
      "https://github.com/hchandra1/Multi-Relational-Knowledge-Graph",
  },

  // 3) New Card: Trie-Based-Hierarchical-Text-Classifier
  {
    name: "Trie-Based-Hierarchical-Text-Classifier",
    description:
      "A fast and efficient C++ tool for hierarchical text classification, utilizing trie data structures to organize and refine text into structured categories across multiple levels. Click on the Github Logo to find out more!",
    // Feel free to adjust the tags if desired.
    tags: ["C++", "DSA"],
    image: dsa2,
    source_code_link:
      "https://github.com/hchandra1/Trie-Based-Hierarchical-Text-Classifier",
  },
];

// Tags for Filtering
const tags = ["Data Science", "Cybersecurity", "AI/ML", "Hardware", "Research"];

// Navigation Links for Dropdown
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact Me", path: "/contact" },
];

// Dropdown Navigation Component
const DropdownNav = ({ currentPage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const filteredLinks = navLinks.filter((link) => link.name !== currentPage);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        className="bg-white text-black px-4 py-2 rounded-lg shadow"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        {currentPage}
      </button>

      {dropdownOpen && (
        <div
          className="absolute bg-white mt-2 rounded-lg shadow-lg w-40 z-50"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          {filteredLinks.map((link) => (
            <div
              key={link.name}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
              onClick={() => {
                navigate(link.path);
                setDropdownOpen(false);
              }}
            >
              {link.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Project Card Component
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
  guide_link,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    whileHover={{
      scale: 1.05,
      rotate: 1,
      boxShadow: "0px 0px 30px rgba(0, 204, 255, 0.8)",
    }}
    className="relative group"
    onClick={() => {
      if (guide_link) window.open(guide_link, "_blank"); // Navigate to guide_link if present
    }}
    style={{ cursor: guide_link ? "pointer" : "default" }}
  >
    <Tilt
      options={{ max: 25, scale: 1, speed: 400 }}
      className="glass-card bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        {source_code_link && (
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation(); // Prevent the card's onClick from triggering
                window.open(source_code_link, "_blank"); // Open source code link
              }}
              className="glass-circle w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={git}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag}`} className="text-[14px] text-blue-500">
            #{tag}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// Projects Page Component
const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredProjects = projectData.filter((project) => {
    const searchLower = search.toLowerCase();
    const matchSearch =
      project.name.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchLower));

    const matchTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) =>
        project.tags.some((projectTag) => projectTag.toLowerCase() === tag)
      );

    return matchSearch && matchTags;
  });

  return (
    <div className="min-h-screen bg-primary">
      {/* Navigation */}
      <div className="p-6">
        <DropdownNav currentPage="Projects" />
      </div>

      {/* Page Title */}
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold text-white">My Projects</h1>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-8 px-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects..."
          className="w-full px-4 py-2 rounded-full focus:outline-none text-white bg-black"
        />
      </div>

      {/* Tag Filters */}
      <div className="max-w-3xl mx-auto mb-8 px-6 flex flex-wrap gap-2 justify-center">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag.toLowerCase())}
            className={`px-4 py-2 rounded-full ${
              selectedTags.includes(tag.toLowerCase())
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-10 flex flex-wrap gap-7 justify-center">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
