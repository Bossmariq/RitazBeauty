import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/HairShopContext";

const SubCheckout = ({ disabled, message }) => {
  const { subTotal } = useGlobalContext();

  return (
    <section>
      <div className="checkout">
        <h4>summary</h4>
        <div className="checkout-content">
          <div>
            <span>Subtotal</span>
            <span>
              <strong>${subTotal}.00</strong>
            </span>
          </div>
          <div>
            <span>Discount</span>
            <span>
              <strong>${subTotal / 20}.00</strong>
            </span>
          </div>
          <div>
            <span>Tax</span>
            <span>
              <strong>$0.00</strong>
            </span>
          </div>
          <div>
            <span>Shipping</span>
            <span>
              <strong>Free</strong>
            </span>
          </div>
        </div>
        <strong>
          <div className="order-total">
            <p>Order Total</p>
            <p>${subTotal - subTotal / 20}.00</p>
          </div>
        </strong>
        <Link
          to="/checkout"
          disabled={disabled}
          className="card-button waves-effect waves-light btn-large"
        >
          {message}
        </Link>
      </div>
    </section>
  );
};

export default SubCheckout;
