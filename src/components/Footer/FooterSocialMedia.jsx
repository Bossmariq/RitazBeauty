import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const FooterSocialMedia = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <p className="center">
        copyright &copy; {year} RitazBeautyStore Co., Ltd. All Rights Reserved
      </p>
      <div className="footer-social-icons center">
        <Link>
          <i className=" material-icons">email</i>
        </Link>
        <Link>
          <i className=" material-icons">call</i>
        </Link>
        <Link>
          <i className="material-icons">facebook</i>
        </Link>
        <Link>
          <i className=" material-icons">chat</i>
        </Link>
      </div>
    </div>
  );
};

export default FooterSocialMedia;
