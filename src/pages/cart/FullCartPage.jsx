import React from "react";
import CartTable from "./CartTable";
import SubCheckout from "./SubCheckout";
import NoCartItem from "./NoCartItem";
import { useGlobalContext } from "../../context/HairShopContext";
import "./Cart.css";

const FullCartPage = () => {
  const { cartContent } = useGlobalContext();
  return (
    <div className="w-8 m-auto">
      <h3>Shopping Cart</h3>
      {cartContent.length > 0 ? (
        <div className="row">
          <div className="col l8 s12 mb-3">
            <CartTable />
          </div>
          <div className="col s12 l4">
            <SubCheckout disabled={false} message={"Checkout"} />
          </div>
        </div>
      ) : (
        <div className="row">
          <NoCartItem />
        </div>
      )}
    </div>
  );
};

export default FullCartPage;
