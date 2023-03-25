import React from "react";
import "./ItemsPromote.css";
import image from "../../img/wig-1.jfif";
import { Link } from "react-router-dom";

const ItemsPromote = () => {
  return (
    <section className="mb-4 mt-4">
      <div className="grid-container w-8 m-auto">
        <div className="box-1">
          <div className="primary-overla"></div>
        </div>
        <div className="box-2">
          <div className="primary-overlay"></div>
        </div>
        <div className="box-3 center-col">
          <h5>Exclusive Hairs</h5>
          <h4>50% OFF</h4>
          <Link to="/shop" className="btn waves-effect waves-light">
            <i className="material-icons right">shopping_basket</i>Get Yours
          </Link>
        </div>
        <div className="box-4 center-col">
          <img src={image} className="responsive-img" alt={image} />
          <div className="center-col">
            <h5>TRENDING Hot Sales</h5>
            <p>STARTING AT $99</p>
            <Link to="/shop" className="btn waves-effect waves-light">
              <i className="material-icons right">shopping_basket</i>Get Yours
            </Link>
          </div>
        </div>
        <div className="box-5">
          <div className="primary-overla"></div>
        </div>
        <div className="box-6 center-col ">
          <h5>DEAL PROMO</h5>
          <h6>STARTING AT $199</h6>
          <Link to="/shop" className="btn waves-effect waves-light mt-1">
            <i className="material-icons right">shopping_basket</i>BUY NOW!
          </Link>
          <div className="st center">70%</div>
          <div className="nd center">50%</div>
        </div>
        <div className="box-7"></div>
        <div className="box-8 center-col center">
          <h6>
            Amazing<span>COLLECTION</span>
          </h6>
          <p>Check our Discounts</p>
          <Link
            to="/shop"
            className="btn waves-effect waves-light mt-1 amber accent-1 black-text"
          >
            <i className="material-icons right">shopping_basket</i>BUY NOW!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ItemsPromote;
