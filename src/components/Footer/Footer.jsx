import React from "react";
import FooterDetails from "./FooterDetails";
import FooterLinks from "./FooterLinks";
import FooterSocialMedia from "./FooterSocialMedia";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer grey darken-4 ">
      <div className="row m-auto w-8">
        <FooterDetails />
        <FooterLinks
          heading={"Shopping And Categories"}
          link1={"Straight Hairs"}
          link2={"Wavy Hairs"}
          link3={"Curly Hairs"}
          link4={"Bouncy Hairs"}
          to1={"/shop"}
          to2={"/shop"}
          to3={"/shop"}
          to4={"/shop"}
        />
        <FooterLinks
          heading={"Useful Links"}
          link1={"Home"}
          link2={"Shop"}
          link3={"WishList"}
          link4={"Contact Us"}
          to1={"/home"}
          to2={"/shop"}
          to3={"/cart"}
          to4={"/contact"}
        />
        <FooterLinks
          heading={"Help And Information"}
          link1={"Blog"}
          link2={"About Us"}
          link3={"Shipping"}
          link4={"FAQ"}
        />
      </div>
      <div className="divider w-8"></div>
      <FooterSocialMedia />
    </section>
  );
};

export default Footer;
