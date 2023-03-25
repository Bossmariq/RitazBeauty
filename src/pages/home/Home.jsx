import React from "react";
import HeroPage from "./HeroPage";
import BestSeller from "./BestSeller";
import HairDisplay1 from "../../components/HairDisplay1";
import ItemsPromote from "./ItemsPromote";
import WhyChooseUs from "./why choose us/WhyChooseUs";
import "animate.css";

const description =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur";

const Home = () => {
  return (
    <section>
      <HeroPage
        name="RitazBeautyStore"
        description={description}
        slogan="Hair & Beyond"
      />
      <BestSeller />
      <HairDisplay1
        title="#1 VIRGIN HAIR BRAND"
        desc={description}
        slogan="Love Is In The Hair"
      />
      <ItemsPromote />
      <WhyChooseUs />
    </section>
  );
};

export default Home;
