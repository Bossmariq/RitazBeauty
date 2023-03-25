import React from "react";
import IndividualProductEdit from "./IndividualProductEdit";

const FullProductPageEdit = () => {
  return (
    <section className="w-8 m-auto mb-3">
      <div className="mt-2">
        <i className="tiny material-icons">home</i>
        <i className="tiny material-icons">chevron_right</i>
        <span>Blank Bouncy</span>
      </div>
      <IndividualProductEdit />
    </section>
  );
};

export default FullProductPageEdit;
