import React from "react";
import "./HeroPage.css";
import { Link } from "react-router-dom";

const HeroPage = ({ name, description, slogan }) => {
  return (
    <section className="heroPage">
      <div className="primary-overlay">
        <div className="hero-page-content right">
          <h4>
            {name}
            <Link to="/shop" className="yellow-text text-lighten-4">
              <i className="material-icons"> shopping_cart</i>
            </Link>
          </h4>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="2000"
          >
            <h1 className="yellow-text text-lighten-4 animate__animated animate__bounce animate__delay-2s animate__repeat-2">
              {slogan}
            </h1>
          </div>
          <span>{description}</span>
          <Link to="/shop" className="hero-button btn waves-effect waves-light">
            <i className="material-icons right">shopping_basket</i>Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
