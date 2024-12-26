import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

// Example images (replace with your own)
import scholarship1 from "../assets/scholarship1.png";
import scholarship2 from "../assets/scholarship2.png";

const achievements = [
  {
    title: "Engineering International Student Entrance Scholarship",
    logo: scholarship1,
    paragraphs: [
      "Scholarship worth 10,000 CAD awarded to students in recognition of outstanding academic and extracurricular achievements. Issued by the University of Waterloo, May 2023.",
      "This scholarship is awarded to exceptional international students entering the Faculty of Engineering at the University of Waterloo. It recognizes academic excellence and a strong record of extracurricular involvement.",
    ],
    linkText: "If you want to know more about this scholarship, please ",
    linkUrl: "https://uwaterloo.ca/undergraduate-entrance-awards/awards/engineering-international-student-entrance-scholarship",
  },
  {
    title: "University of Waterloo President's Scholarship of Distinction",
    logo: scholarship2,
    paragraphs: [
      "Scholarship worth 2,000 CAD awarded to students who are admitted to the University of Waterloo with an early-May admission average of 95% or above. Issued by the University of Waterloo, May 2023.",
      "This scholarship recognizes students with exceptional academic achievements upon admission. It rewards an outstanding admission average, demonstrating both dedication and strong study habits.",
    ],
    linkText: "If you want to know more about this scholarship, please ",
    linkUrl: "https://uwaterloo.ca/undergraduate-entrance-awards/awards/university-waterloo-presidents-scholarship-distinction",
  },
];

const AchievementsPage = () => {
  return (
    <div className="relative z-0 bg-primary min-h-screen py-16">
      {/* Heading (removed the "Recognition" text) */}
      <motion.div variants={textVariant()} className="text-center mb-10">
        <h2 className="text-white text-4xl font-bold">Achievements</h2>
      </motion.div>

      {/* Cards container */}
      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.3, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              bg-[#111] 
              rounded-xl 
              shadow-lg 
              border-[2px] border-blue-800 
              hover:shadow-[0_0_15px_2px_rgba(0,0,139,0.7)]
              transition-shadow
              overflow-hidden
            "
          >
            {/* Big image on top */}
            <img
              src={item.logo}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            {/* Text portion */}
            <div className="p-6 bg-gradient-to-r from-[#1b1b1b] to-[#2a2a2a]">
              <h3 className="text-white text-2xl font-bold mb-4">
                {item.title}
              </h3>
              {/* Each paragraph in its own <p> */}
              {item.paragraphs.map((para, i) => (
                <p className="text-gray-300 leading-relaxed mb-4" key={i}>
                  {para}
                </p>
              ))}

              {/* Final line with hyperlink in one line */}
              <p className="text-gray-300 leading-relaxed">
                {item.linkText}
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  click here
                </a>
                .
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
