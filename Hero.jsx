import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const text1 =
    "A Computer Engineering student at Waterloo with a passion for learning and building things.";
  const text2 = "Seeking Fall 2025 Internships";
  const typingSpeed = 35;
  const deleteSpeed = 20;
  const pauseBeforeDelete = 1500;

  const [typedText, setTypedText] = useState("");
  const [step, setStep] = useState(1);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (step === 1) {
      if (charIndex < text1.length) {
        timer = setTimeout(() => {
          setTypedText(text1.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setStep(2);
        }, pauseBeforeDelete);
      }
    } else if (step === 2) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setTypedText(text1.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, deleteSpeed);
      } else {
        setStep(3);
      }
    } else if (step === 3) {
      if (charIndex < text2.length) {
        timer = setTimeout(() => {
          setTypedText(text2.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      }
    }
    return () => clearTimeout(timer);
  }, [step, charIndex, text1, text2]);

  const [isAtTop, setIsAtTop] = useState(true);

  const handleScrollClick = () => {
    const aboutSection = document.querySelector('#about');
    if (isAtTop) {
      aboutSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsAtTop(!isAtTop);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Removed the vertical line div */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="glitch text-[#007bff]" data-text="Hi, I'm Hari">
              Hi, I'm Hari
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {typedText}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
        <div onClick={handleScrollClick} className="cursor-pointer">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#007bff] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: isAtTop ? 0 : 24,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="w-3 h-3 rounded-full bg-[#007bff] mb-1"
            />
          </div>
        </div>
      </div>

      <style>
        {`
          .glitch {
            position: relative;
            display: inline-block;
          }
          .glitch:before,
          .glitch:after {
            content: attr(data-text);
            position: absolute;
            left: 0;
            top: 0;
            color: #007bff;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
          }
          .glitch:before {
            left: 2px;
            text-shadow: -2px 0 red;
            animation: glitch-anim 2s infinite linear alternate-reverse;
          }
          .glitch:after {
            left: -2px;
            text-shadow: -2px 0 blue;
            animation: glitch-anim 3s infinite linear alternate-reverse;
          }

          @keyframes glitch-anim {
            0% {
              clip: rect(24px, 9999px, 65px, 0);
            }
            20% {
              clip: rect(0, 9999px, 100px, 0);
            }
            40% {
              clip: rect(24px, 9999px, 65px, 0);
            }
            60% {
              clip: rect(0, 9999px, 100px, 0);
            }
            80% {
              clip: rect(24px, 9999px, 65px, 0);
            }
            100% {
              clip: rect(0, 9999px, 100px, 0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
