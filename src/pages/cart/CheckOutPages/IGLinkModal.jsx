import React from "react";
import { Link } from "react-router-dom";
import { useCheckOutContext } from "../../../context/CheckOutContext";

const IGLinkModal = () => {
  const { setShowIGModal } = useCheckOutContext();
  return (
    <main>
      <div className="model-overlay">
        <div className="checkout-model-container">
          <div className="checkout-model-close">
            <i onClick={() => setShowIGModal(false)} className="material-icons">
              highlight_off
            </i>
          </div>
          <div className="center-align w-8 m-auto">
            <h3
              style={{
                fontFamily: "Roboto",
              }}
            >
              <strong>Oh Snap!</strong>
              <div
                style={{
                  width: "3rem",
                  backgroundColor: "#ff4081",
                  height: ".1rem",
                  marginTop: "3px",
                }}
                className="m-auto"
              ></div>
            </h3>
            <p>Card payment method not available</p>
            <p>
              Reach out to us on our social media pages to complete transaction
            </p>
          </div>
          <Link
            style={{
              color: "#ff4081",
              fontSize: "1.2rem",
              letterSpacing: ".3rem",
            }}
            className={`center mt-3 card-button waves-effect waves-light btn-large`}
          >
            Chat with us
          </Link>
        </div>
        <div className="model-footer"></div>
      </div>
    </main>
  );
};

export default IGLinkModal;
