import React from 'react';
import MenuItems from '../menuitems';
import MenuItem from './MenuItem';
import "../Order.css"

const Order = () => {
  return (
    <div className='order-container'>
      <div className='order-header'>
        <h2>Order Online</h2>
      </div>
      <div className='cards'>
        {
          MenuItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

export default Order;