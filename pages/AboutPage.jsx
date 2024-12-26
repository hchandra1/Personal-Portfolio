import React, { useState, useEffect } from 'react';
import hari from '../assets/hari.png';

// Top-left & top-right images
import gma from '../assets/gma.JPG';
import uw from '../assets/uw.jpg';
import maing from '../assets/maing.JPG';
import rag2 from '../assets/rag2.JPG';
import gymImg from '../assets/gym.JPG';
import backImg from '../assets/back.jpg';

// The previously used images
import pube from '../assets/pube.png';
import gym from '../assets/gym.png';

// For bottom-left & bottom-right
import footy from '../assets/footy.jpeg';
import ragsJPG from '../assets/rags.JPG';
import bas from '../assets/bas.jpg';
import golf from '../assets/golf.png';

////////////////////////////////////////////////////////////////////////////////
// 0) A small hook to detect mobile
////////////////////////////////////////////////////////////////////////////////
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Adjust threshold to suit your design. 768px or 600px are common breakpoints
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}

////////////////////////////////////////////////////////////////////////////////
// 1) Corner stacks with your text/images
////////////////////////////////////////////////////////////////////////////////
const cornerStacks = {
  'top-left': [
    {
      id: 'top-left-card1',
      title: 'Background',
      image: gma,
      description: 'High school at GEMS Modern Academy, Dubai...',
    },
    {
      id: 'top-left-card2',
      title: 'High School Journey',
      description: `During high school, I served as a Pledge Officer on Duty for the Career and Future Skills Council, 
      earned the K.S Varkey Scholarship for Merit Academic Performance, participated in the Tehseen Scholar 
      Intervention Program, and was a Student Representative of the Class Council.`,
    },
    {
      id: 'top-left-card3',
      title: 'University of Waterloo',
      image: uw,
      description: `I am currently pursuing Computer Engineering at the University of Waterloo.`,
    },
    {
      id: 'top-left-card4',
      title: 'On-Campus Involvements',
      description: `Class Representative for the Waterloo Engineering Endowment Foundation (W.E.E.F.), 
      member of the Waterloo Steel Bridge Team, and recipient of multiple scholarships.`,
    },
  ],

  'top-right': [
    {
      id: 'top-right-card1',
      title: 'Gym',
      image: maing,
      description: 'My second home: The gym.',
    },
    {
      id: 'top-right-card2',
      title: 'Chest Day',
      image: rag2,
      description: `They say to feel happy you need to hit chest with your gym bro.`,
    },
    {
      id: 'top-right-card3',
      title: 'Arm Pump',
      image: gymImg,
      description: `No matter how rough things get, a good arm pump can brighten your day!`,
    },
    {
      id: 'top-right-card4',
      title: 'Back Day Pump',
      image: backImg,
      description: `or a back day pump :)`,
    },
  ],

  'bottom-left': [
    {
      id: 'bottom-left-card1',
      title: 'Pitching Big',
      image: pube,
      description: 'Making big ideas heard from an early age.',
    },
    {
      id: 'bottom-left-card2',
      title: 'Startup Beginnings',
      description: `Launching a startup at a young age wasn’t just about the business—it was about learning 
      how to communicate ideas clearly, think fast, and inspire others to believe in the vision.`,
    },
    {
      id: 'bottom-left-card3',
      title: 'Ideas on the Move',
      image: ragsJPG,
      description: 'From concept to reality—nothing stands still for too long!',
    },
    {
      id: 'bottom-left-card4',
      title: 'Collaboration & Communication',
      description: `Collaboration and communication fuel everything I do. 
      The best ideas often come from casual conversations and a shared drive to create.`,
    },
  ],

  'bottom-right': [
    {
      id: 'bottom-right-card1',
      title: 'Team Player',
      image: footy,
      description: `Soccer taught me that success isn’t just about scoring – it’s about setting others up to win.`,
    },
    {
      id: 'bottom-right-card2',
      title: 'Fast Break',
      image: bas,
      description: `Basketball is where I sharpen my instincts – fast plays, faster decisions.`,
    },
    {
      id: 'bottom-right-card3',
      title: 'A Slower Pace',
      image: golf,
      description: `
Golf is a reminder that the smallest details can change the game.`,
    }
  ]
};

////////////////////////////////////////////////////////////////////////////////
// 2) Corner color logic
////////////////////////////////////////////////////////////////////////////////
function getCornerColors(corner) {
  // Return the border color & glow color for each corner
  switch (corner) {
    case 'top-left':
      return {
        borderColor: 'navy',
        glowColor: 'navy'
      };
    case 'top-right':
      // charcoal grey
      return {
        borderColor: '#36454F',
        glowColor: '#36454F'
      };
    case 'bottom-left':
      // burnt orange
      return {
        borderColor: '#CC5500',
        glowColor: '#CC5500'
      };
    case 'bottom-right':
      // deep blue
      return {
        borderColor: '#00008B',
        glowColor: '#00008B'
      };
    default:
      return {
        borderColor: '#3498db',
        glowColor: 'rgba(52, 152, 219, 0.7)'
      };
  }
}

////////////////////////////////////////////////////////////////////////////////
// 3) Corner positions with new snippet (passes in `isMobile`)
////////////////////////////////////////////////////////////////////////////////
function getCornerPosition(corner, isMobile) {
  switch (corner) {
    case 'top-left':
      return {
        top: '05%',
        left: '20%',
        translate: '0, 0'
      };
    case 'top-right':
      // * Adjust the positions for mobile if you want them more to the right
      if (isMobile) {
        return {
          top: '05%',
          left: '90%',    // more toward the right in mobile
          translate: '-100%, 0%'
        };
      } else {
        return {
          top: '05%',
          left: '85%',
          translate: '-100%, 0%'
        };
      }
    case 'bottom-left':
      return {
        top: '95%',
        left: '20%',
        translate: '0%, -100%'
      };
    case 'bottom-right':
      // * Adjust the positions for mobile if you want them more to the right
      if (isMobile) {
        return {
          top: '95%',
          left: '90%',   // more toward the right in mobile
          translate: '-100%, -100%'
        };
      } else {
        return {
          top: '95%',
          left: '85%',
          translate: '-100%, -100%'
        };
      }
    default:
      return {
        top: '50%',
        left: '50%',
        translate: '-50%, -50%'
      };
  }
}

////////////////////////////////////////////////////////////////////////////////
// 4) getCardStyle - same logic, using getCornerColors() for each corner
////////////////////////////////////////////////////////////////////////////////
function getCardStyle(corner, indexInCorner, isSelected, selectedIndex, totalSelected, isMobile) {
  const baseOffset = 15;
  const sizeWidth = 240;
  const sizeHeight = 340;

  // Grab the color scheme for this corner
  const { borderColor, glowColor } = getCornerColors(corner);

  // Default: center (for selected)
  let top = '50%';
  let left = '50%';
  let translate = '-50%, -50%';
  let rotate = 0;
  let offsetX = indexInCorner * baseOffset;
  let offsetY = indexInCorner * baseOffset;

  if (!isSelected) {
    // corner position
    const { top: cTop, left: cLeft, translate: cTrans } = getCornerPosition(corner, isMobile);
    top = cTop;
    left = cLeft;
    translate = cTrans;
    rotate = (indexInCorner - 1) * 8;
  } else {
    // fanning in center
    const centerOffset = 20;
    offsetX = selectedIndex * centerOffset - (totalSelected - 1) * (centerOffset / 2);
    offsetY = selectedIndex * centerOffset - (totalSelected - 1) * (centerOffset / 2);
    rotate = (selectedIndex - (totalSelected - 1) / 2) * 8;
  }

  const scale = isSelected ? 1.1 : 1;

  return {
    position: 'absolute',
    width: `${sizeWidth}px`,
    height: `${sizeHeight}px`,
    border: `2px solid ${borderColor}`,
    boxShadow: `
      0 4px 8px rgba(0,0,0,0.3),
      0 0 12px 2px ${glowColor}
    `,
    borderRadius: '10px',
    backgroundColor: '#111',
    color: 'white',
    textAlign: 'center',
    overflow: 'hidden',
    cursor: 'pointer',
    top,
    left,
    transform: `
      translate(${translate})
      translate(${offsetX}px, ${offsetY}px)
      rotate(${rotate}deg)
      scale(${scale})
    `,
    transition: 'transform 0.5s ease, top 0.5s ease, left 0.5s ease',
    zIndex: isSelected
      ? 1000 + selectedIndex
      : 100 + (3 - indexInCorner)
  };
}

////////////////////////////////////////////////////////////////////////////////
// 5) Main Component
////////////////////////////////////////////////////////////////////////////////
export default function AboutPage() {
  const [selectedCardIds, setSelectedCardIds] = useState([]);
  // use the mobile detection
  const isMobile = useIsMobile();

  const handleCardClick = (id) => {
    setSelectedCardIds((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id]
    );
  };

  // Flatten all corners into a single list
  const allCards = [];
  Object.entries(cornerStacks).forEach(([corner, cards]) => {
    cards.forEach((card, idx) => {
      allCards.push({ corner, card, indexInCorner: idx });
    });
  });

  // We apply scale(0.8) only if it's mobile, else do nothing
  const mobileScale = isMobile ? 'scale(0.8)' : 'none';

  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        marginTop: '80px',
        transform: mobileScale,
        transformOrigin: 'top left'
      }}
    >
      {/* Profile header */}
      <div style={{ marginBottom: '60px' }}>
        <img
          src={hari}
          alt="Profile"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '4px solid white',
            objectFit: 'cover',
            display: 'block',
            margin: '0 auto'
          }}
        />
        <h1 style={{ color: 'white', marginTop: '20px' }}>About Me</h1>
        <p style={{ color: 'white', fontSize: '1rem' }}>
          Feel free to play around with these cards to get to know more about me!
        </p>
      </div>

      {/* Cards area */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '90vh',
          overflow: 'hidden'
        }}
      >
        {allCards.map(({ corner, card, indexInCorner }) => {
          const isSelected = selectedCardIds.includes(card.id);
          let selectedIndex = 0;
          let totalSelected = 0;

          if (isSelected) {
            selectedIndex = selectedCardIds.indexOf(card.id);
            totalSelected = selectedCardIds.length;
          }

          const cardStyle = getCardStyle(
            corner,
            indexInCorner,
            isSelected,
            selectedIndex,
            totalSelected,
            isMobile
          );

          return (
            <div
              key={card.id}
              style={cardStyle}
              onClick={() => handleCardClick(card.id)}
            >
              {card.image ? (
                <>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: '100%',
                      height: '65%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '10px' }}>
                    <h4 style={{ margin: '5px 0' }}>{card.title}</h4>
                    <p style={{ fontSize: '0.85rem', margin: 0 }}>
                      {card.description}
                    </p>
                  </div>
                </>
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    padding: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <h4 style={{ margin: '0 0 10px' }}>{card.title}</h4>
                  <p style={{ fontSize: '0.85rem', margin: 0, lineHeight: '1.4' }}>
                    {card.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
