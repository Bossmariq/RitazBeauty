import React from "react";
import BestSellersCardBlock from "./BestSellersCardBlock";

const BestSeller = () => {
  return (
    <section className="mt-3 mb-4">
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="2000"
        className="center"
      >
        <h2 className="animate__animated animate__backInLeft mb-2">
          Ritazbeautystore BestSeller
        </h2>
      </div>

      <BestSellersCardBlock />
    </section>
  );
};

export default BestSeller;
