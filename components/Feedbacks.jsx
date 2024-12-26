import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ashish from "../assets/ashish.png";  // Make sure Ashish's image is in /assets

const FeedbackCard = ({ testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", 0.3, 0.75)}
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-10 rounded-[30px] w-full shadow-lg border border-blue-500"
  >
    <div className="flex items-center gap-5">
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-20 h-20 rounded-full object-cover border-4 border-blue-400"
      />
      <div>
        <p className="text-white font-semibold text-[20px]">@ {name}</p>
        <p className="text-secondary text-[14px] mt-1">
          {designation} of {company}
        </p>
      </div>
    </div>

    <p className="text-white font-medium text-[18px] mt-6 leading-relaxed italic">
      "{testimonial}"
    </p>
  </motion.div>
);

const Feedbacks = () => {
  const testimonialData = {
    name: "Ashish Agrawal",
    designation: "Co-Founder & C.E.O",
    company: "Eon Media",
    image: ashish,  // Points to Ashish's image in assets
    testimonial:
      "Hari has been a huge asset to our team not just a team member but also as a proactive learner who is open to new challenges and deliverables. We would love to have Hari back in the company in future roles and he will be a huge asset to any organization.",
  };

  return (
    <div className="mt-12">
      <div className="bg-gradient-to-r from-[#111827] to-[#1f2937] rounded-[20px] shadow-2xl p-12">
        <motion.div variants={textVariant()}>
          <p className="text-blue-400 text-[18px] tracking-wider">
            A Word From Eon Media
          </p>
          <h2 className="text-white text-[40px] font-bold mt-3">
            Testimonial.
          </h2>
        </motion.div>

        <div className="mt-10">
          <FeedbackCard {...testimonialData} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
