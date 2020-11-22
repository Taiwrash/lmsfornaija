import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Error = () => {
  return (
    <div className="error-div">
      <h2>This is a missing route.</h2>

      <Link to="/" className="btn-error">
        Go Back Home
      </Link>
      <Loader />
    </div>
  );
};

export default Error;
