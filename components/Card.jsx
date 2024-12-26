import React from 'react';

const Card = ({ item, isSelected, onClick, position }) => {
  const styles = {
    card: {
      position: 'absolute',
      width: isSelected ? '350px' : '250px',
      height: isSelected ? '500px' : '350px',
      backgroundColor: '#1a1a1a',
      color: 'white',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      ...position
    },
    image: {
      width: '90%',
      height: '60%',
      objectFit: 'cover',
      borderRadius: '10px 10px 0 0'
    },
    text: {
      padding: '20px',
      textAlign: 'center',
      fontSize: '1rem'
    }
  };

  return (
    <div style={styles.card} onClick={onClick}>
      <img src={item.image} alt={item.title} style={styles.image} />
      <div style={styles.text}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
