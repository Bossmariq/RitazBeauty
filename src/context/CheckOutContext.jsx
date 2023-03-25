import React, { useContext, useState } from "react";
import { NigerianStates } from "./HairData";

const CheckOutContext = React.createContext();

const CheckOutProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(true);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showShippingSection, setShowShippingSection] = useState(false);
  const [showShippingForm, setShowShippingForm] = useState(true);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [contactInfo, setContactInfo] = useState("");
  const [statesInNigeria] = useState(NigerianStates);
  const [showIGModal, setShowIGModal] = useState(false);
  const [userDetails, setUserDetails] = useState("");

  const closeContactForm = () => {
    setShowContactForm(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowContactInfo(true);
      setShowShippingSection(true);
    }, 3000);
  };
  const openContactForm = () => {
    setShowShippingSection(false);
    setShowContactForm(true);
    setShowContactInfo(false);
  };
  const closeShippingForm = () => {
    setShowShippingForm(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowShippingInfo(true);
    }, 3000);
  };
  const openShippingForm = () => {
    setShowShippingForm(true);
    setShowShippingInfo(false);
  };
  return (
    <CheckOutContext.Provider
      value={{
        loading,
        showContactForm,
        showShippingForm,
        closeShippingForm,
        closeContactForm,
        showContactInfo,
        showShippingInfo,
        showShippingSection,
        openContactForm,
        openShippingForm,
        contactInfo,
        setContactInfo,
        statesInNigeria,
        showIGModal,
        setShowIGModal,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </CheckOutContext.Provider>
  );
};

export const useCheckOutContext = () => {
  return useContext(CheckOutContext);
};

export { CheckOutContext, CheckOutProvider };
