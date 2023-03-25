import React from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import { useShopContext } from "../../context/ShopContext";

const ShopNav = () => {
  const { showPage } = useShopContext();
  const tabs = ["Straight", "Wavy", "Curly", "Bouncy"];
  const checkIndex = (e) => {
    const id = e.currentTarget.id;
    showPage(id);
  };
  return (
    <div>
      <ul className="shop-ul m-auto">
        {tabs.map((tab, index) => (
          <li className="shop-li" key={index} id={index} onClick={checkIndex}>
            <Link className="grey-text text-darken-4 tabs-links">{tab}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopNav;
