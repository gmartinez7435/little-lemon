import React from "react";
import Adrian from "../assets/Adrian.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <header className="about-header" style={{padding: "20px"}}>
      <section>
        <div className="banner">
          <h2>About Us</h2>
          <p>
            Founder: Adrian Alvarez <br></br>
            <br></br>
            In the heart of Chicago, The Little Lemon was founded by Adrian. The
            restaurant offers authentic Mediterranean recipes passed down
            through generations. Guests enjoy dishes like fresh Greek salads,
            lamb kebabs, and indulgent baklava.
            <br></br>
            <br></br>Adrian's philosophy is to serve food that delights and
            nourishes. The Little Lemon is known for its warm ambiance and
            exceptional service, creating a beloved community fixture. Under
            Adrian's guidance, The Little Lemon thrives, offering shared meals
            and memorable dining experiences. Every visit is a journey worth
            savoring.
            <br></br>
            <br></br>
            <strong>A Note From Adrian</strong>
            "At The Little Lemon, we believe food connects us to our heritage.
            Our recipes, crafted with love and authenticity, celebrate
            Mediterranean culture." 
            <br></br>
            Adrian ensures The Little Lemon remains a
            beacon of culinary excellence and authenticity. 🌿🍋🍴
          </p>

          <Link to="/booking">
            <button className="about-btn" aria-label="on Click">Reserve Table</button>
          </Link>
        </div>
      </section>
            <div className="banner-img" style={{paddingTop: "10px", alignItems: "center", alignSelf: "center", }}>
            <img src={Adrian} alt="Adrian" />
          </div>
    </header>
  );
};

export default About;
