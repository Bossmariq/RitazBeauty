import React from "react";
import ShopNav from "./ShopNav";
import StraightHair from "./StraightHair";
import BouncyHair from "./BouncyHair";
import CurlyHair from "./CurlyHair";
import WavyHair from "./WavyHair";
import { useShopContext } from "../../context/ShopContext";
import "./Shop.css";

const Shop = () => {
  const { showStraightHairs, showBouncyHairs, showCurlyHairs, showWavyHairs } =
    useShopContext();

  return (
    <section>
      <ShopNav />
      {showStraightHairs && <StraightHair />}
      {showBouncyHairs && <BouncyHair />}
      {showCurlyHairs && <CurlyHair />}
      {showWavyHairs && <WavyHair />}
    </section>
  );
};

export default Shop;
