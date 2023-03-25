import React from "react";
import "./Modal.css";
import { useGlobalContext } from "../context/HairShopContext";
import { Link } from "react-router-dom";

const Modal = () => {
  const { closeModal, selectedHair, addNumberToCart, removeNumberFromCart } =
    useGlobalContext();
  const { image, inStock, name, id, cartNumber, price } = selectedHair;
  return (
    <section>
      <div className="model-overlay">
        <div className="model-container">
          <i
            onClick={() => closeModal(false)}
            className="material-icons close-btn right-align hide-on-med-and-up"
          >
            close
          </i>
          <img
            className="model-img"
            src={require(`../img/${image}.jpg`)}
            alt={name}
          />
          <div>
            <h2>{name}</h2>
            <div className="divide"></div>
            <h5>${price}.00</h5>
            <p className="desc">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Availability:{" "}
              <strong>{inStock ? "In Stock" : "Out of Stock"}</strong>
            </p>
            <div className=" cart-section">
              <div className="divider"></div>
              <div className="row cart-part">
                <div className="col s3 center add-section">
                  <div>
                    <i
                      onClick={() => removeNumberFromCart(id)}
                      className="material-icons center"
                      style={{ userSelect: "none" }}
                    >
                      remove
                    </i>
                    <span className="center-align border">{cartNumber}</span>
                    <i
                      onClick={() => addNumberToCart(id)}
                      className="material-icons center"
                      style={{ userSelect: "none" }}
                    >
                      add
                    </i>
                  </div>
                </div>
                <Link
                  to={`/productpage`}
                  onClick={() => closeModal(true)}
                  className="col s6 btn waves-effect waves-light modal-cart-button"
                >
                  <i className="material-icons right">shopping_basket</i>Add to
                  Cart
                </Link>
              </div>
              <div className="divider"></div>
            </div>
            <Link
              to={`/productpage`}
              onClick={() => closeModal(true)}
              className="product-page-link"
            >
              Go to Product
            </Link>
          </div>
          <i
            onClick={() => closeModal(false)}
            className="material-icons close-btn hide-on-small-only"
          >
            close
          </i>
        </div>
      </div>
    </section>
  );
};

export default Modal;
