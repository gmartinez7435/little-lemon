import React from 'react'

const ConfirmedBooking = () => {
  return (
  <div className='confirm-container'>
    <div className='confirm'>
        <div>
            <h1>Booking has been <span>confirmed!</span></h1>
            <p>We'll send you a confirmation email shortly.</p>
            <button aria-label="Back to Home"><a href='/' style={{color: "rgb(51, 51, 51)"}}>Back to Home</a></button>
        </div>
    </div>
  </div>
  )
}

export default ConfirmedBooking