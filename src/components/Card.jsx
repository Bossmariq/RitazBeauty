import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/HairShopContext";

const Card = ({ name, image, price, inStock, id, message }) => {
  const { selectHair, setPreLoading } = useGlobalContext();
  const selectAHair = (id) => {
    setPreLoading(true);
    setTimeout(() => {
      setPreLoading(false);
      selectHair(id, true);
    }, 3000);
  };
  return (
    <div>
      <div className="card hoverable">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            onClick={() => selectAHair(id, true)}
            className="img responsive-img"
            src={image}
            alt={name}
          />
        </div>
        <div className="card-content card-action">
          <span className="card-title grey-text text-darken-4">{name}</span>
          <p>
            <strong>Price: </strong>${price}
          </p>
          <p>
            <strong>Availability: </strong>
            {inStock ? "Out of Stock" : "In Stock"}
          </p>
          <div className="center">
            <Link
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
