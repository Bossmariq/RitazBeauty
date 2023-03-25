import React, { useContext, useState } from "react";
import {
  StraightHairData,
  BouncyHair,
  FavoriteHair,
  CurlyHair,
  WavyHair,
  cartItem,
  Budget,
  HairType,
  OurTeam,
} from "./HairData";

const HairShopContext = React.createContext();

const HairShopProvider = ({ children }) => {
  const [preLoading, setPreLoading] = useState(false);
  const [straightHairs] = useState(StraightHairData);
  const [bouncyHairs] = useState(BouncyHair);
  const [curlyHair] = useState(CurlyHair);
  const [wavyHair] = useState(WavyHair);
  const [selectedHair, setSelectedHair] = useState(null);
  const [cartNumber, setCartNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [favoriteHair] = useState(FavoriteHair);
  const [pages] = useState(["Home", "Shop", "Cart", "Contact"]);
  const [allHairs] = useState([
    ...favoriteHair,
    ...straightHairs,
    ...bouncyHairs,
    ...curlyHair,
    ...wavyHair,
  ]);
  const [cartContent, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || cartItem
  );
  const [addingToCart, setAddingToCart] = useState(false);
  const [subTotal, setSubTotal] = useState(
    JSON.parse(localStorage.getItem("subTotal"))
  );
  const [HairTypes] = useState(HairType);
  const [YourBudget] = useState(Budget);
  const [teamMembers] = useState(OurTeam);

  const selectHair = (id, openModal) => {
    if (openModal == true) {
      let hair;
      hair = allHairs.find((eachHair) => eachHair.id === id);
      setSelectedHair(hair);
      // setShowModal(true);
    } else {
      let hair;
      hair = cartContent.find((eachHair) => eachHair.id === id);
      setSelectedHair(hair);
      setShowModal(false);
    }
  };
  const closeModal = (check) => {
    if (check) {
      setPreLoading(true);
      setTimeout(() => {
        setPreLoading(false);
        setShowModal(false);
      }, 2000);
    } else {
      setShowModal(false);
    }
  };
  const addNumberToCart = (id) => {
    let hair;
    hair = allHairs.find((eachHair) => eachHair.id === id);
    hair.cartNumber = hair.cartNumber + 1;
    setSelectedHair(hair);
    setCartNumber(selectedHair.cartNumber);
  };
  const removeNumberFromCart = (id) => {
    let hair;
    hair = allHairs.find((eachHair) => eachHair.id === id);
    if (hair.cartNumber > 0) {
      hair.cartNumber = hair.cartNumber - 1;
      setSelectedHair(hair);
      setCartNumber(selectedHair.cartNumber);
    }
  };
  const addItemToCart = (id) => {
    if (cartContent.find((eachContent) => eachContent.id == id)) {
      let cartContentAll = JSON.parse(localStorage.getItem("cartItems"));
      let itemIndex = cartContentAll.findIndex((content) => content.id == id);
      cartContentAll[itemIndex].cartNumber += selectedHair.cartNumber;
      localStorage.setItem("cartItems", JSON.stringify(cartContentAll));
      setCartItems(cartContentAll);
    } else {
      localStorage.setItem(
        "cartItems",
        JSON.stringify(cartContent.concat(selectedHair))
      );
      setCartItems(cartContent.concat(selectedHair));
    }
    setAddingToCart(true);
    sumTotal();
    setTimeout(() => {
      setAddingToCart(false);
    }, 3000);
  };
  const editCartItem = (id) => {
    let cartContentAll = JSON.parse(localStorage.getItem("cartItems"));
    let itemIndex = cartContentAll.findIndex((content) => content.id == id);
    cartContentAll[itemIndex].cartNumber = selectedHair.cartNumber;
    localStorage.setItem("cartItems", JSON.stringify(cartContentAll));
    setCartItems(cartContentAll);
    setAddingToCart(true);
    sumTotal();
    setTimeout(() => {
      setAddingToCart(false);
    }, 3000);
  };
  const deleteCartItem = (id) => {
    setPreLoading(true);
    setTimeout(() => {
      let cartContentAll = JSON.parse(localStorage.getItem("cartItems"));
      let newCartContent = cartContentAll.filter(
        (eachHair) => eachHair.id != id
      );
      localStorage.setItem("cartItems", JSON.stringify(newCartContent));
      setCartItems(newCartContent);
      sumTotal();
      setPreLoading(false);
    }, 2000);
  };
  const sumTotal = () => {
    let cartContentAll = JSON.parse(localStorage.getItem("cartItems"));
    let sumArray = [];
    cartContentAll.map((content) => {
      const { cartNumber, price } = content;
      let total = cartNumber * price;
      sumArray.push(total);
    });
    let sum = 0;
    sumArray.forEach((item) => {
      sum += item;
    });
    localStorage.setItem("subTotal", JSON.stringify(sum));
    setSubTotal(sum);
  };
  const SmoothScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 1000);
  };
  return (
    <HairShopContext.Provider
      value={{
        pages,
        favoriteHair,
        showModal,
        addItemToCart,
        closeModal,
        cartNumber,
        selectHair,
        selectedHair,
        addNumberToCart,
        cartContent,
        removeNumberFromCart,
        addingToCart,
        editCartItem,
        deleteCartItem,
        subTotal,
        preLoading,
        setPreLoading,
        YourBudget,
        HairTypes,
        teamMembers,
        SmoothScrollToTop,
      }}
    >
      {children}
    </HairShopContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(HairShopContext);
};

export { HairShopContext, HairShopProvider };
