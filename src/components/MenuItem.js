import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className='menu-items'>
      <img src={item.image} alt={item.title} />
      <div className='menu-content'>
        <div className='heading'>
          <h5>{item.title}</h5>
          <p>${item.price.toFixed(2)}</p>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
