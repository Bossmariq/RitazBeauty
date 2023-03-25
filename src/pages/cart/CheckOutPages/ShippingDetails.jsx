import React from "react";
import ContactSection from "./ContactSection/ContactSection";
import ShippingSection from "./ShippingSection/ShippingSection";
import IGLinkModal from "./IGLinkModal";
import { useCheckOutContext } from "../../../context/CheckOutContext";

const ShippingDetails = () => {
  const { showIGModal, showShippingSection } = useCheckOutContext();
  return (
    <main>
      <ContactSection />
      {showShippingSection && <ShippingSection />}
      {showIGModal && <IGLinkModal />}
    </main>
  );
};

export default ShippingDetails;
