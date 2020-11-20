import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-div">
      <h2>This is a missing route.</h2>

      <Link to="/" className="btn-error">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
