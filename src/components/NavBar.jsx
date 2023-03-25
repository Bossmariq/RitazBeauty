import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/HairShopContext";

const NavBar = () => {
  const { pages, SmoothScrollToTop } = useGlobalContext();
  return (
    <main className="navbar-fixed">
      <nav className="grey darken-4">
        <div className="nav-wrapper">
          <Link
            onClick={() => SmoothScrollToTop()}
            to="/"
            className="brand-logo yellow-text text-lighten-4 text-small"
          >
            RitazBeautyStore
          </Link>
          <Link data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            {pages.map((page, index) => (
              <li key={index}>
                <NavLink
                  onClick={() => SmoothScrollToTop()}
                  className={({ isActive }) => {
                    return `navbar-links ${isActive && "activ"}`;
                  }}
                  to={`/${page}`}
                >
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <ul className="sidenav mobile-dem" id="mobile-demo">
        <i className="material-icons sidenav-close">close</i>
        <div>
          {pages.map((page, index) => (
            <li key={index} className="sidenav-close">
              <Link
                onClick={() => SmoothScrollToTop()}
                className="navbar-sm-links"
                to={`/${page}`}
                key={index}
              >
                {page}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </main>
  );
};

export default NavBar;
