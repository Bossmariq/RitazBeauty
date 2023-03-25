import React from "react";
import Card from "../../components/Card";
import { useGlobalContext } from "../../context/HairShopContext";

const BestSellersCardBlock = () => {
  const { favoriteHair } = useGlobalContext();
  return (
    <div className="row w-8">
      {favoriteHair.map((eachHair) => {
        const { id, name, price, instock, image } = eachHair;

        return (
          <div key={id} className="col s6 m3 bestseller-cards">
            <Card
              name={name}
              price={price}
              id={id}
              instock={instock}
              image={require(`../../img/${image}.jpg`)}
              message="Buy Now"
            />
          </div>
        );
      })}
    </div>
  );
};

export default BestSellersCardBlock;
