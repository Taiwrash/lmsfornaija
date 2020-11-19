import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-div">
      <h2>This is a missing route.</h2>
      <button className="btn-error">
        <Link to="/">Go Back Home</Link>
      </button>
    </div>
  );
};

export default Error;
