import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Define the colors array for outlines
const colors = [
  "linear-gradient(135deg, #007bff, #ffd700)",  // Blue to Yellow for Python
  "#007bff",  // Blue
  "#ffd700",  // Yellow
  "#007bff",  // Blue
  "#007bff",  // Blue
  "linear-gradient(135deg, #ff0000, #0000ff)",  // Red to Blue
  "linear-gradient(135deg, #ffeb00, #007bff)",  // Yellow to Blue
  "#a9a9a9",  // Grey
];

// Animation variants for captions
const captionVariants = {
  hidden: { opacity: 0, y: 30 },  // Start off-screen
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const Tech = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-white mb-10">
        My Core Tech Stack
      </h2>
      
      {/* Tech Grid */}
      <div className="grid grid-cols-4 gap-10">
        {technologies.map((technology, index) => (
          <motion.div
            className="flex flex-col items-center"
            key={technology.name}
            initial="hidden"
            animate="visible"
            variants={captionVariants}
            viewport={{ once: true, amount: 0.2 }}  // Trigger animation when in view
            transition={{ delay: index * 0.1 }}  // Staggered entrance
          >
            {/* Cube with Glassmorphism Effect */}
            <div className="cube-wrapper w-28 h-28 flex items-center justify-center transform transition-transform hover:scale-110">
              <div
                className="glass-cube w-24 h-24 rounded-lg flex items-center justify-center"
                style={{
                  background: `${colors[index % colors.length]}`,
                }}
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
            {/* Caption with 3D Effect and Hover Effects */}
            <p className="mt-3 text-white text-lg font-medium text-3d hover-glow hover-scale">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CSS for hover + 3D text effects */}
      <style>
        {`
          /* 3D Text Effect */
          .text-3d {
            text-shadow: 
              1px 1px 2px rgba(0, 0, 0, 0.8), 
              2px 2px 3px rgba(0, 0, 0, 0.6), 
              3px 3px 4px rgba(0, 0, 0, 0.4);
          }

          /* Hover Glow Effect */
          .hover-glow:hover {
            color: #ffd700;
            text-shadow: 0 0 8px #ffd700, 0 0 15px #ffdd55;
            transition: 0.3s ease-in-out;
          }

          /* Scaling and Rotation */
          .hover-scale:hover {
            transform: scale(1.1) rotate(-3deg);
            transition: transform 0.3s ease;
          }

          /* Glass Cube Effect */
          .glass-cube {
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 
              0 4px 6px rgba(0, 0, 0, 0.1), 
              0 1px 3px rgba(0, 0, 0, 0.06);
            backdrop-filter: blur(6px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
          }

          /* Hover Glow for Cube */
          .cube-wrapper:hover .glass-cube {
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 215, 0, 0.7);
            transform: translateY(-5px);
          }
        `}
      </style>
    </section>
  );
};

export default SectionWrapper(Tech, "");
