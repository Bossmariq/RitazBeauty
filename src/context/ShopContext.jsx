import React, { useContext, useState } from "react";
import { StraightHairData, BouncyHair, CurlyHair, WavyHair } from "./HairData";

const ShopContext = React.createContext();

const ShopProvider = ({ children }) => {
  const [straightHairs] = useState(StraightHairData);
  const [bouncyHairs] = useState(BouncyHair);
  const [curlyHairs] = useState(CurlyHair);
  const [wavyHairs] = useState(WavyHair);
  const [showStraightHairs, setshowStraightHairs] = useState(true);
  const [showWavyHairs, setshowWavyHairs] = useState(false);
  const [showCurlyHairs, setshowCurlyHairs] = useState(false);
  const [showBouncyHairs, setshowBouncyHairs] = useState(false);

  const showPage = (id) => {
    if (id == 3) {
      setshowBouncyHairs(true);
      setshowStraightHairs(false);
      setshowCurlyHairs(false);
      setshowWavyHairs(false);
    } else if (id == 1) {
      setshowBouncyHairs(false);
      setshowStraightHairs(false);
      setshowCurlyHairs(false);
      setshowWavyHairs(true);
    } else if (id == 2) {
      setshowBouncyHairs(false);
      setshowStraightHairs(false);
      setshowCurlyHairs(true);
      setshowWavyHairs(false);
    } else {
      setshowBouncyHairs(false);
      setshowStraightHairs(true);
      setshowCurlyHairs(false);
      setshowWavyHairs(false);
    }
  };
  return (
    <ShopContext.Provider
      value={{
        straightHairs,
        bouncyHairs,
        curlyHairs,
        wavyHairs,
        showBouncyHairs,
        showCurlyHairs,
        showStraightHairs,
        showWavyHairs,
        showPage,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  return useContext(ShopContext);
};

export { ShopContext, ShopProvider };
