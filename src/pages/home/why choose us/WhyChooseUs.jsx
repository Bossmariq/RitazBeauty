import React from "react";
import WhoChooseUsSections from "./WhoChooseUsSections";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="center-col whychooseus">
      <div data-aos="fade-down" data-aos-delay="500" data-aos-duration="2000">
        <h1 className="center mb-2">Why Choose Us</h1>
      </div>
      <div>
        <div className="row mb-3">
          <WhoChooseUsSections
            icon={"headset_mic"}
            heading={"TOP-NOTCH CUSTOMER SERVICE"}
          />
          <WhoChooseUsSections icon={"flare"} heading={"30 Days Guarantee"} />
        </div>
        <div className="row">
          <WhoChooseUsSections icon={"high_quality"} heading={"High Quality"} />
          <WhoChooseUsSections icon={"timer"} heading={"Long Lasting"} />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
