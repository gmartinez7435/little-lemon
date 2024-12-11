import React from 'react'
import small_logo from '../assets/small_logo.png'

const Footer = () => {
  return (
    <footer>
        <section>
            <div className='company-info'>
                <img src={small_logo} alt="logo" />
            </div>
            <div>
              <h3>Important Links</h3>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/About'>About</a></li>
                <li><a href='/menu'>Menu</a></li>
                <li><a href='/booking'>Reservations</a></li>
                <li><a href='/order-online'>Order Online</a></li>
                <li><a href='/login'>Login</a></li>
              </ul>
            </div>

            <div>
              <h3>Contact Us</h3>
              <p>123 Main St, Chicago, Illinois 12345</p>
              <p>Phone: 123-456-7890</p>
              <p>Email: littlelemon@example.com</p>
            </div>

            <div>
              <h3>Social Media Links</h3>
              <ul>
                <li><a href='facebook.com'>Facebook</a></li>
                <li><a href='Instagram.com'>Instagram</a></li>
                <li><a href='X.com'>X</a></li>
              </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer