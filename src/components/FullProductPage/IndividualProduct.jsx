import React from "react";
import "./FullProductPage.css";
import { useGlobalContext } from "../../context/HairShopContext";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

const IndividualProduct = () => {
  const {
    selectedHair,
    addNumberToCart,
    removeNumberFromCart,
    addItemToCart,
    addingToCart,
  } = useGlobalContext();
  const { image, inStock, name, price, cartNumber, id } = selectedHair;

  const addItemToCartt = (id) => {
    addItemToCart(id);
    setTimeout(() => {
      M.toast({ html: "Item Added!" });
    }, 3000);
  };

  return (
    <section>
      <div className="product-container">
        <img
          className="product-img"
          src={require(`../../img/${image}.jpg`)}
          alt={name}
        />
        <div className="product-content">
          <h2>{name}</h2>
          <div className="ipp-divide"></div>
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
          <p>
            Product Number: <strong>{id}</strong>
          </p>
          <div className=" product-cart-section">
            <div className="divider"></div>
            <div className="row product-cart-part">
              <div className="col l3 m5 center product-add-section">
                <div>
                  <i
                    onClick={() => removeNumberFromCart(id)}
                    className="material-icons center icon-minus"
                  >
                    remove
                  </i>
                  <span className="center-align product-border">
                    {cartNumber}
                  </span>
                  <i
                    onClick={() => addNumberToCart(id)}
                    className="material-icons center icon-plus"
                  >
                    add
                  </i>
                </div>
              </div>
              <Link
                onClick={() => addItemToCartt(id)}
                className={`col m5 s6 btn waves-effect waves-light modal-cart-button ${
                  cartNumber == 0 && "disabled"
                } ${addingToCart && "disabled"}`}
              >
                {addingToCart ? "Adding..." : "Add to Cart "}
                <i className="material-icons">shopping_basket</i>
              </Link>
            </div>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualProduct;
