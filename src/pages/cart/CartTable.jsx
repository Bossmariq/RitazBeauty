import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/HairShopContext";

const CartTable = () => {
  const { cartContent, selectHair, deleteCartItem } = useGlobalContext();
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>
              <div className="row card-heading">
                <div className="col s6 card-head-half">
                  <span>item</span>
                  <span>price</span>
                </div>
                <div className="col s6 card-head-half">
                  <span>Qty</span>
                  <span>subtotal</span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {cartContent &&
            cartContent.map((eachContent) => {
              const { id, name, price, cartNumber, image } = eachContent;
              return (
                <tr key={id}>
                  <td>
                    <div className="row card-body">
                      <div className="col s6 card-body-half">
                        <div>
                          <img
                            alt={name}
                            className="cart-img"
                            src={require(`../../img/${image}.jpg`)}
                          />
                          <h6>{name}</h6>
                        </div>
                        <p>${price}.00</p>
                      </div>
                      <div className="col s6 card-body-half">
                        <div>{cartNumber}</div>
                        <p>${cartNumber * price}.00</p>
                      </div>
                    </div>
                  </td>
                  <td className="cart-edit-box">
                    <div className="cart-edit">
                      <Link
                        to={`/editcartitem`}
                        onClick={() => selectHair(id, false)}
                      >
                        <i className="material-icons grey-text text-darken-3">
                          edit
                        </i>
                      </Link>
                      <Link onClick={() => deleteCartItem(id)}>
                        <i className="material-icons grey-text text-darken-3">
                          delete
                        </i>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default CartTable;
