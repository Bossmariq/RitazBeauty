import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import Footer from "./components/Footer/Footer";
import FullCartPage from "./pages/cart/FullCartPage";
import CheckOut from "./pages/cart/CheckOutPages/CheckOut";
import PreLoader from "./components/PreLoader";
import ContactUs from "./pages/contact/ContactUs";
import FullProductPage from "./components/FullProductPage/FullProductPage";
import FullProductPageEdit from "./components/FullProductPage/FullProductPageEdit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./context/HairShopContext";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const { showModal, preLoading } = useGlobalContext();
  useEffect(() => {
    M.AutoInit();
    AOS.init();
  });
  return (
    <main className="App">
      <BrowserRouter>
        <NavBar />
        {showModal && <Modal />}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<FullCartPage />} />
          <Route path="/productpage" element={<FullProductPage />} />
          <Route path="/editcartitem" element={<FullProductPageEdit />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
        {preLoading && <PreLoader />}
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
