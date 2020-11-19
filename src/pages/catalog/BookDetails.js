import React, { useState, useEffect } from "react";
import data from "../../Data";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  //   const [details, setDetails] = useState(data);
  const { id } = useParams();

  //   useEffect(() => {
  //     data.filter((item) => {
  //       if (item.id === id) {
  //         console.log("Hello");
  //       } else {
  //         return item;
  //       }
  //       setDetails(item);
  //     });
  //   }, [id]);

  return (
    <div className="error-div">
      <h2>The id of the book you clicked is {id} work in progress</h2>
      <button className="btn-error">
        <Link to="/">Go Back Home</Link>
      </button>
    </div>
  );
};

export default BookDetails;
