import React from "react";
import { Link } from "react-router-dom";

const NoCartItem = () => {
  return (
    <section className="no-cart-item">
      <i className="material-icons">shopping_cart</i>
      <span>You have no items in your shopping cart.</span>
      <Link to="/shop" class="card-button waves-effect waves-light btn-large">
        Continue Shopping
      </Link>
    </section>
  );
};

export default NoCartItem;
