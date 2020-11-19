import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <h1>LMSFORNAIJA</h1>
        </div>
        <div className="anchors" id="anchors">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/bookmark">Bookmarks</Link>
            </li>
            <li>
              <Link to="/notification">Notifications</Link>
            </li>
          </ul>
        </div>
        <div className="harmburg" id="harmburg">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
