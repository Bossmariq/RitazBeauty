import React from "react";
import IndividualProduct from "./IndividualProduct";

const FullProductPage = () => {
  return (
    <section className="w-8 m-auto mb-3">
      <div className="mt-2">
        <i className="tiny material-icons">home</i>
        <i className="tiny material-icons">chevron_right</i>
        <span>Blank Bouncy</span>
      </div>
      <IndividualProduct />
    </section>
  );
};

export default FullProductPage;
