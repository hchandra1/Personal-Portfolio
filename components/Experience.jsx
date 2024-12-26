import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Updated Experiences
const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Eon Media",
    icon: "/public/eon.png",
    iconBg: "#007bff",
    date: "May 2024 – Aug 2024",
    points: [
      "Spearheaded the development of an AI model capable of summarizing lengthy articles by preprocessing large datasets and refining model parameters, improving text accuracy by 30%.",
      "Engineered a Python script to automate the identification and removal of duplicate facial expressions within image datasets, ensuring unique representations while preserving distinct variations for model training.",
      "Implemented Selenium-based automated UI testing scripts, significantly reducing manual QA time and enhancing overall application stability.",
      "Collaborated with cross-functional teams to resolve critical platform issues, optimizing performance and driving seamless user experiences.",
    ],
  },
  {
    title: "Control Systems Intern",
    company_name: "Rockwell Automation",
    icon: "/public/rock.png",
    iconBg: "#ff6600",
    date: "June 2023 – Aug 2023",
    points: [
      "Programmed and tested Allen-Bradley PLCs using ladder logic, reducing robotic system downtime by 20% and increasing operational efficiency.",
      "Designed and implemented control logic to monitor position and speed in real-time, improving robotic synchronization and reducing motion errors by 15%.",
      "Conducted rigorous testing and troubleshooting to ensure precise motion control in robotic operations, enhancing overall system performance.",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "Project Ubuntu",
    icon: "/public/ubuntu.png",
    iconBg: "#ffd700",
    date: "Jan 2022 – Present",
    points: [
      "Co-founded Project Ubuntu to provide discounted groceries to low-income communities through an app platform, reaching over 500 users during the pilot phase.",
      "Led a cross-functional team in designing and launching the app, integrating user feedback to enhance accessibility and usability.",
      "Secured partnerships with local grocery stores and NGOs, fostering collaboration to expand community outreach and drive social impact.",
      "Conducted market research and data analysis to tailor app features to user needs, resulting in increased engagement and positive reception from target demographics.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
