import React, { useState, useEffect } from "react";
import data from "../../Data";
import { useParams, Link } from "react-router-dom";
import Reactions from "./Reactions";

const BookDetails = () => {
  const { id } = useParams();
  const [value, setValue] = useState(data);

  useEffect(() => {
    data.find((item) => {
      return item.id === +id && setValue(item);

      // const newItems = item.filter((newItem) => item.id === id);
    });
  }, [id]);
  const { title, category, desc, img } = value;
  console.log(value);

  return (
    <div className="details">
      <div className="book-card details-card">
        <div className="img-div">
          <img src={img} alt="Book Cover" />
        </div>
        <div className="book-title">
          <p>Category: {category}</p>
          <p>Book Title: {title}</p>
        </div>
        <div className="desc">
          <p>{desc}</p>
        </div>
        <Reactions />
      </div>
      <div className="error-div">
        <Link to="/" className="btn-error">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
