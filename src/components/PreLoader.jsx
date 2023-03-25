import React from "react";
import "./PreLoader.css";

const PreLoader = () => {
  return (
    <div className="preloader-body">
      <div className="preloader-container">
        <div className="loader">
          <span></span>
        </div>
        <div className="loader">
          <span></span>
        </div>

        <div className="loader">
          <i></i>
        </div>
        <div className="loader">
          <i></i>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
