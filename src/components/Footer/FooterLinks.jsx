import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useGlobalContext } from "../../context/HairShopContext";

const FooterLinks = ({
  heading,
  link1,
  link2,
  link3,
  link4,
  to1,
  to2,
  to3,
  to4,
}) => {
  const { SmoothScrollToTop } = useGlobalContext();
  return (
    <div className="col l3 m6 s12 footer-content">
      <h5>{heading}</h5>
      <p>
        <Link onClick={() => SmoothScrollToTop()} to={to1}>
          {link1}
        </Link>
      </p>
      <p>
        <Link onClick={() => SmoothScrollToTop()} to={to2}>
          {link2}
        </Link>
      </p>
      <p>
        <Link onClick={() => SmoothScrollToTop()} to={to3}>
          {link3}
        </Link>
      </p>
      <p>
        <Link onClick={() => SmoothScrollToTop()} to={to4}>
          {link4}
        </Link>
      </p>
    </div>
  );
};

export default FooterLinks;
