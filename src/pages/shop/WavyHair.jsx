import React from "react";
import Card from "../../components/Card";
import { useShopContext } from "../../context/ShopContext";

const WavyHair = () => {
  const { wavyHairs } = useShopContext();

  return (
    <section>
      <div className="row straight-hair">
        {wavyHairs.map((wavyHair) => {
          const { id, name, price, instock, image } = wavyHair;
          return (
            <div key={id} className="col s12 m6 l3">
              <Card
                name={name}
                price={price}
                id={id}
                instock={instock}
                image={require(`../../img/${image}.jpg`)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WavyHair;
