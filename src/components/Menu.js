import React from 'react';
import MenuItems from '../menuitems';


const Menu = () => {

    return (
      <div className='menu-container'>
        <div className='menu-header'>
            <h2>This Months Menu!</h2>
        </div>
        <div className='cards'>
          {
            MenuItems.map(item => (
              <div key={item.id} className='menu-items'>
                <img src={item.image} alt={item.title} />
                <div className='menu-content'>
                  <div className='heading'>
                    <h5>{item.title}</h5>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
};

export default Menu;
