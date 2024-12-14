import React, {useState} from 'react'

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
  return (
    <header>
        <section className='booking-form'>
            <form onSubmit={handleSubmit}>
                <fieldset className='booking-field'>
                    <div>
                        <label>First Name:</label>
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor='book-date'>Choose Date:</label>
                        <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
                    </div>

                    <div>
                    <label htmlFor='book-time'>Choose Time:</label>
                    <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} type="time" required>
                        <option value="">Select a Time</option>
                        {
                            props.availableTimes.availableTimes.map(availableTimes => {return <option key=
                                {availableTimes}>{availableTimes}</option>})
                        }
                    </select>
                    </div>

                    <div>
                        <label htmlFor='book-guests'>Number of Guests:</label>
                        <input id='book-guest' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>

                    </div>

                    <div>
                        <label htmlFor='book-occasion' >Occasion:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion
                            (e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Holiday</option>
                                <option>Other</option>
                            </select>
                    </div>

                    <div className='btnReceive'>
                        <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
                    </div>
                </fieldset>

            </form>
        </section>
    </header>
  )
}

export default BookingForm