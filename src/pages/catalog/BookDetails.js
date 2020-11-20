import React, { useState, useEffect } from "react";
import data from "../../Data";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();

  return (
    <div className="error-div">
      <h2>
        The id of the book you clicked have the id of {id} work in progress
      </h2>

      <Link to="/" className="btn-error">
        Go Back Home
      </Link>
    </div>
  );
};

export default BookDetails;
