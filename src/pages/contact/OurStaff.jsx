import React from "react";
import { useGlobalContext } from "../../context/HairShopContext";

const OurStaff = () => {
  const { teamMembers } = useGlobalContext();
  return (
    <main className="our-staff-container">
      <div className="our-staff-container-overlay"></div>
      <div className="our-staff-content">
        <div className="yellow-text text-lighten-4 w-7">
          <h2>Our Team Members</h2>
          {/* <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.,
          </p> */}
        </div>
        <div className="our-staff-members-container mb-4">
          {teamMembers.map((member) => {
            const { image, name, position } = member;
            return (
              <div key={position} className="our-staff-member-container">
                <img src={require(`../../img/${image}.jpg`)} />
                <h6>{name}</h6>
                <p className="sm-text">{position}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default OurStaff;
