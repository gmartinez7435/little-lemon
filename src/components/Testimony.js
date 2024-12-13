import React from 'react';

const testimonials = [
  {
    name: "Sophie R.",
    picture: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    comment: "Absolutely delightful! The lemon tart is to die for."
  },
  {
    name: "Carlos M.",
    picture: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    comment: "A hidden gem! The staff is friendly and the ambiance is perfect."
  },
  {
    name: "Ava L.",
    picture: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    comment: "The best dining experience I've had in a long time. Highly recommend!"
  },
  {
    name: "Liam T.",
    picture: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    comment: "Amazing food and wonderful service. The lemon chicken is a must-try!"
  }
];

const Testimony = () => {
  return (
    <section className='test-section'>
    <h2 className='test-title'>Testimonials</h2>
    <div className="testimony-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="card">
          <img src={testimonial.picture} alt={`${testimonial.name}`} className="picture" />
          <h3>{testimonial.name}</h3>
          <div className="rating">
            {'★'.repeat(testimonial.rating)}
            {'☆'.repeat(5 - testimonial.rating)}
          </div>
          <p>{testimonial.comment}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Testimony;