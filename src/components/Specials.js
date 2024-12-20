import React from 'react'
import recipes from '../recipes'
import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';

const Menu = () => {

    const handleOrder = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Add this to your cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Order confirmed!",
                text: "Your order has been confirmed.",
                icon: "success"
              });
            }
          });
    }

  return (
    <div className='menu-container'>
        <div className='menu-header'>
            <h2>This Weeks Specials!</h2>
            <Link to="./Menu"> <button>On Our Menu</button></Link>
        </div>
        <div className='cards' style={{justifyContent: "space-evenly"}}>
            {
                recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                    <img src={recipe.image} alt="special items"/>
                    <div className='menu-content'>
                        <div className='heading'>
                            <h5>{recipe.title}</h5>
                            <p>{recipe.price}</p>
                        </div>
                        <p>{recipe.description}</p>
                        <button aria-label="add to cart" className='orderBtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                    </div>
                </div>)
            }

        </div>
    </div>
  )
}

export default Menu