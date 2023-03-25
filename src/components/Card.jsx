import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/HairShopContext";

const Card = ({ name, image, price, inStock, id, message }) => {
  const { selectHair, setPreLoading, SmoothScrollToTop } = useGlobalContext();
  const selectAHair = (id) => {
    setPreLoading(true);
    setTimeout(() => {
      setPreLoading(false);
    }, 2000);
    selectHair(id, true);
    SmoothScrollToTop();
  };
  return (
    <div>
      <div className="card hoverable">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="img responsive-img" src={image} alt={name} />
        </div>
        <div className="card-content card-action">
          <span className="card-title grey-text text-darken-4">{name}</span>
          <p>
            <strong>Price: </strong>${price}.00
          </p>
          <p className="hide-on-med-and-up">
            <strong>{inStock ? "Out of Stock" : "In Stock"}</strong>
          </p>
          <p className="hide-on-small-only">
            <strong>Availability: </strong>
            {inStock ? "Out of Stock" : "In Stock"}
          </p>
          <div className="center">
            <Link
              to={`/productpage`}
              onClick={() => selectAHair(id, true)}
              className="card-button btn waves-effect waves-light"
            >
              <i className="material-icons right">shopping_basket</i>
              {message ? message : "Add to cart"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
