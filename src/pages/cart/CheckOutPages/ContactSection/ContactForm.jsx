import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCheckOutContext } from "../../../../context/CheckOutContext";

const ContactForm = () => {
  const [disableButton, setDisbleButton] = useState(false);
  const { closeContactForm, contactInfo, setContactInfo } =
    useCheckOutContext();
  const setTheContactInfo = (e) => {
    setContactInfo(e.target.value);
    if (e.target.value.includes("@" && ".")) {
      setDisbleButton(true);
    } else {
      setDisbleButton(false);
    }
  };
  return (
    <section className="left-align checkout-contact-form">
      <div className="checkout-contact-form-heading">
        <div className="center">1</div>
        <p>Enter your email</p>
      </div>
      <div className="row checkout-contact-form">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={setTheContactInfo}
                value={contactInfo}
              />
              <label htmlFor="email">Email</label>
              <span
                className="helper-text"
                data-error="This email address is not valid"
                data-success="success"
              >
                By providing your email, you agree to our Privacy Policy and
                Terms of Service.
              </span>
            </div>
          </div>
          <Link
            type="submit"
            disabled={!disableButton}
            onClick={() => closeContactForm()}
            className={`card-button waves-effect waves-light btn-large`}
          >
            Go To Shipping
          </Link>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
