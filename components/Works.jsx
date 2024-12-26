import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Import images directly from assets
import fin from "../assets/fin.png";
import gym from "../assets/gym.png";
import cyber from "../assets/cyber.png";
import git from "../assets/git.png";

// Updated Project Data to match the 2nd, 3rd, and 4th images
const myProjects = [
  {
    name: "Salary Report Generator",
    description:
      "Automates salary report generation using employee data and PDF output. Click on the GitHub Logo to find out more!",
    tags: [
      { name: "python", color: "text-blue-500" },
      { name: "pandas", color: "text-green-500" },
      { name: "data science", color: "text-red-500" },
    ],
    source_code_link: "https://github.com/hchandra1/Salary-Report-Generator",
    image: fin,
  },
  {
    name: "FitBot - Gym Trainer Chatbot",
    description:
      "AI-based gym trainer chatbot using AWS Lex and Python. Click on the GitHub Logo to find out more!",
    tags: [
      { name: "python", color: "text-blue-500" },
      { name: "AWS", color: "text-yellow-500" },
      { name: "AI/ML", color: "text-purple-500" },
    ],
    source_code_link:
      "https://github.com/hchandra1/FitBot---Your-Personal-Gym-Trainer-Chatbot",
    image: gym,
  },
  {
    name: "Wazuh SIEM Security",
    description:
      "Deployed Wazuh SIEM for threat detection across endpoints. Click to find out more!",
    tags: [
      { name: "cybersecurity", color: "text-blue-500" },
      { name: "wazuh", color: "text-green-500" },
      { name: "python", color: "text-yellow-500" },
    ],
    source_code_link:
      "https://wazhari.hashnode.space/default-guide/wazuh-setup-and-configuration-guide",
    image: cyber,
  },
];

// Fractured Glass Card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
  image,
}) => {
  // Conditional wrapper to handle Wazuh card click without GitHub logo
  const handleCardClick = () => {
    if (source_code_link) {
      window.open(source_code_link, "_blank");
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: "0px 0px 30px rgba(0, 204, 255, 0.8)",
      }}
      className="relative group"
      onClick={name === "Wazuh SIEM Security" ? handleCardClick : undefined}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        className="glass-card bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* GitHub Logo for all projects EXCEPT Wazuh */}
          {source_code_link && name !== "Wazuh SIEM Security" && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
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
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Main Works Section
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="relative">
        <h2 className={`${styles.sectionHeadText}`}>
          Featured Projects.
        </h2>

        <div className="absolute inset-0 glass-grid-background"></div>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are just a few of the many projects I've worked on,
          showcasing my interest in cybersecurity, data science, and AI/ML.
          These highlight my problem-solving abilities, technical skills,
          and project management experience. To see more of my work,
          check out the Projects section.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {myProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
