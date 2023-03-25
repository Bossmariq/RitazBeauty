import React from "react";
import "./WhyChooseUs.css";

const WhoChooseUsSections = ({ icon, heading }) => {
  return (
    <div className="center-col col l6 s12 center whychooseussection">
      <i className="medium material-icons">{icon}</i>
      <h5>{heading}</h5>
      <p className="w-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit, repudiandae
        odit quaerat.s
      </p>
    </div>
  );
};

export default WhoChooseUsSections;
