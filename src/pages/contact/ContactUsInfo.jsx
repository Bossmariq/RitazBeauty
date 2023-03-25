import React from "react";
import { Link } from "react-router-dom";

const ContactUsInfo = () => {
  return (
    <main className="contact-us-info">
      <h2>Let's Talk</h2>
      <div>
        {/* <h4>Store Hours</h4> */}
        <p>
          <strong>Mon - Sat:</strong> 8am - 6pm
        </p>
        <p>
          <strong>Sun:</strong> Closed
        </p>
        <p>
          <strong>Location: </strong>No 13 Nwaturuocha street Ikenegbu Owerri
          Imo State Nigeria
        </p>
      </div>
      <div>
        <h4>Email</h4>
        <Link>RitazBeauty@gmail.com</Link>
      </div>
      <div className="contact-us-socials-container">
        <h4>Socials</h4>
        <Link>Instagram</Link>
        <Link>Twitter</Link>
        <Link>Facebook</Link>
      </div>
    </main>
  );
};

export default ContactUsInfo;
