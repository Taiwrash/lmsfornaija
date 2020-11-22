import React, { useState, useEffect } from "react";
import data from "../../Data";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [value, setValue] = useState("");

  useEffect(() => {
    data.map((item) => {
      return setValue(item);
      // const newItems = item.filter((newItem) => item.id === id);
    });
  }, []);
  const { title, category, desc } = value;
  console.log(value);

  return (
    <div className="error-div">
      <h2>{title}</h2>
      <h2>{desc}</h2>
      <h2>{category}</h2>
      <div>
        <h2></h2>
      </div>

      <Link to="/" className="btn-error">
        Go Back Home
      </Link>
    </div>
  );
};

export default BookDetails;
