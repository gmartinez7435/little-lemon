import React from "react";
import { Link } from "react-router-dom";
import resturantfood from "../assets/restauranfood.jpg";
import Specials from "./Specials";
import Footer from "./Footer";
import Testimony from "./Testimony";

const Header = () => {
  return (
    <>
      <header className="header">
        <section>
          <div className="banner">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/booking">
              <button aria-label="On Click">Reserve a Table</button>
            </Link>
          </div>
          <div className="banner-img">
            <img src={resturantfood} alt=" food"></img>
          </div>
        </section>
      </header>
      <Specials />
      <Testimony />
      <Footer />
    </>
  );
};

export default Header;
