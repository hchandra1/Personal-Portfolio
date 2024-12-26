import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Card = ({ index, title, icon, description, outlineColor }) => {
  return (
    <Tilt className="w-[300px] h-[400px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full h-full bg-black rounded-[20px] flex flex-col items-center justify-center"
        style={{
          boxShadow: `0 0 15px ${outlineColor}`,
        }}
      >
        <img src={icon} alt={title} className="w-24 h-24 object-contain mb-4" />
        <h3 className="text-white text-[22px] font-bold text-center">{title}</h3>
        <p className="text-white text-[18px] px-6 text-center leading-[28px] mt-4">
          {description}
        </p>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div id="about-section" className="py-20">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Computer Engineering student at the University of Waterloo, blending academic excellence with hands-on experience. Recent internships at Eon Media (Software Engineering) and Rockwell Automation (Control Systems) highlight my skills in software development, automation, and system design.  
        To learn more, scroll below or explore the About Me and Projects sections.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-14 justify-center">
        <Card
          index={0}
          title="University of Waterloo - Full-time Student"
          icon="/waterloo.png"
          description=""
          outlineColor="rgba(255, 215, 0, 0.7)"
        />
        <Card
          index={1}
          title="Software Engineering Intern - Eon Media"
          icon="/eon.png"
          description=""
          outlineColor="rgba(0, 102, 255, 0.7)"
        />
        <Card
          index={2}
          title="Control Systems Intern - Rockwell Automation"
          icon="/rock.png"
          description=""
          outlineColor="rgba(255, 102, 0, 0.7)"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
