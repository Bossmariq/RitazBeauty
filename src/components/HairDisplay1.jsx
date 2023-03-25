import React from "react";
import "./HairDisplay1.css";
import { Link } from "react-router-dom";

const HairDisplay1 = ({ title, desc, slogan }) => {
  return (
    <section className="w-8 display-section mb-3 row mt-3">
      <div className="col l6 s12 displayed-hair">
        <div className="primary-overlay">
          <div className="display-content white-text">
            <h5>{title}</h5>
            <h2 className="">{slogan}</h2>
            <span className="center sm-text">{desc}</span>
            <Link to="/shop" className="DC-button btn waves-effect waves-light">
              <i className="material-icons right">shopping_basket</i>Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="col l6 s12 display-container">
        <div className="display-content">
          <h5>{title}</h5>
          <h2 className="">{slogan}</h2>
          <span className="center sm-text">{desc}</span>
          <Link to="/shop" className="DC-button btn waves-effect waves-light">
            <i className="material-icons right">shopping_basket</i>Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HairDisplay1;
