import React from 'react'

const ConfirmedBooking = () => {
  return (
    <div className='confirm'>
        <div>
            <h1>Booking has been <span>confirmed!</span></h1>
            <p>We'll send you a confirmation email shortly.</p>
            <a href='/'>Back to Home</a>
        </div>
    </div>
  )
}

export default ConfirmedBooking