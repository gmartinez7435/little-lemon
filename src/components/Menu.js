import React from 'react';
import MenuItems from '../menuitems';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This Month's Menu!</h2>
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

export default Menu;
