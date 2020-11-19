import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="content">
          <h2>
            Library Services at your <span>HAND</span>
          </h2>
          <p>
            LMSFORNAIJA built to ease the stress of library users in all levels
            of education. This is also a helper to librarian and library
            officials.
          </p>
          <button>Get Started</button>
        </div>
        <div className="hero">
          <img src="images/home-bg.png" alt="Student Reading" />
        </div>
      </header>
      <div className="content">
        <h2>Our Values </h2>
        <p>
          Relieve you of physical cataloguing, borrowing and returning of
          materials at your various libraries
        </p>
      </div>
    </>
  );
};

export default Header;
