import React from 'react';

const GreetingCard = ({ name, greeting }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', margin: '10px' }}>
      <p>{greeting}, {name}!</p>
    </div>
  );
};

export default GreetingCard;
