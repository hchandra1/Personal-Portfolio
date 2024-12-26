import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { Tilt } from 'react-tilt';

// Updated icons and images
import certIcon from '../assets/certi.png';  // Certification icon
import inImage from '../assets/in.png';      // Image for LinkedIn courses
import gogsImage from '../assets/gogs.png';  // Google Garage Digital Marketing image

// ================== SAMPLE CERTIFICATIONS DATA ======================
const certData = [
  {
    name: 'Data Science Foundations: Fundamentals',
    description: 'Core data science concepts, data handling, exploration, and visualization.',
    tags: ['data science'],
    image: inImage,
    certificate_link: 'https://www.linkedin.com/learning/certificates/d7a8579b8b0384eefcd6b113bc47b5c1a05430859d3da6d640d50ac80557baef',
    course_link: 'https://www.linkedin.com/learning/data-science-foundations-fundamentals-14537508'
  },
  {
    name: 'JavaScript Essential Training',
    description: 'Modern JS essentials, ES6, DOM manipulation, and async programming.',
    tags: ['javascript', 'ai/ml'],
    image: inImage,
    certificate_link: 'https://www.linkedin.com/learning/certificates/d6d4d5621bcdc125bb5ab0fb7f17a6f090a6ef8d6fa3ca673408b13a68596976',
    course_link: 'https://www.linkedin.com/learning/javascript-essential-training'
  },
  {
    name: 'Python for Data Science Essential Training (Part 1 & 2)',
    description: 'Python basics and data science workflows with NumPy & Pandas.',
    tags: ['python', 'data science'],
    image: inImage,
    certificate_link: 'https://drive.google.com/file/d/1YHIkGXC21VPy0qmcyV-ehZUCqvpEiN6l/view?usp=sharing',
    course_link: 'https://www.linkedin.com/learning/python-for-data-science-essential-training-part-1'
  },
  {
    name: 'C++ Essential Training',
    description: 'C++ syntax, object-oriented programming, and STL fundamentals.',
    tags: ['c++', 'ai/ml'],
    image: inImage,
    certificate_link: 'https://www.linkedin.com/learning/certificates/69fbb58df3204d7125cea67fdf872b2a05e75c4a35596f6fe8c830284e53e4ad',
    course_link: 'https://www.linkedin.com/learning/c-plus-plus-essential-training-2020'
  },
  {
    name: 'Google Skillshop: Google Ads Certification',
    description: 'Master Google Ads fundamentals: campaign creation, ad targeting, bidding, and performance.',
    tags: ['digital marketing', 'google ads', 'advertising'],
    certificate_link: 'https://skillshop.exceedlms.com/student/award/zujHQvQ33xyjYJ5Q2co3gdh8',
    image: gogsImage
  },
];

// ================== FILTER TAGS ======================
const filterTags = ['AI/ML', 'Cybersecurity', 'Data Science'];

// ================== CERT CARD COMPONENT ======================
const CertCard = ({ index, name, description, tags, certificate_link, image }) => {
  // If card is "Google Skillshop" -> 4-colored border; otherwise -> old blue border
  const isGoogleCard = name.toLowerCase().includes('google');

  const borderClass = isGoogleCard
    ? `
      border-t-[3px] border-t-[#EA4335]   /* top in red   */
      border-l-[3px] border-l-[#FBBC05]   /* left in yellow */
      border-r-[3px] border-r-[#4285F4]   /* right in blue */
      border-b-[3px] border-b-[#34A853]   /* bottom in green */
      rounded-2xl
    `
    : 'border-[3px] border-blue-500 rounded-2xl';

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: '0px 0px 30px rgba(0, 204, 255, 0.8)',
      }}
      className={`relative group ${borderClass}`}
    >
      <Tilt
        options={{ max: 25, scale: 1, speed: 400 }}
        className="glass-card bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Image */}
        <div className="relative w-full h-[230px] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Certificate Icon */}
          {certificate_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(certificate_link, '_blank')}
                className="glass-circle w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={certIcon}
                  alt="certificate link"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Text */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Tag Labels */}
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
};

// ================== MAIN CERTIFICATIONS PAGE ======================
const CertificationsPage = () => {
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const filteredCerts = certData.filter((cert) => {
    const searchLower = search.toLowerCase();
    const matchSearch =
      cert.name.toLowerCase().includes(searchLower) ||
      cert.description.toLowerCase().includes(searchLower) ||
      cert.tags.some((t) => t.toLowerCase().includes(searchLower));

    const matchTags =
      selectedTags.length === 0 ||
      selectedTags.every((selTag) =>
        cert.tags.map((x) => x.toLowerCase()).includes(selTag.toLowerCase())
      );

    return matchSearch && matchTags;
  });

  return (
    <div className="min-h-screen bg-primary">
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold text-white">Certifications</h1>
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-3xl mx-auto mb-8 px-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search certifications..."
          className="w-full px-4 py-2 rounded-full focus:outline-none text-white bg-black"
        />
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {filterTags.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-full ${
              selectedTags.includes(tag)
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-800'
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* CERTIFICATIONS */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-10 flex flex-wrap gap-7 justify-center">
          {filteredCerts.map((cert, index) => (
            <CertCard key={index} index={index} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsPage;
