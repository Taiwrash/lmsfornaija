import React, { useState } from "react";
import Reactions from "./Reactions";
import { Link } from "react-router-dom";
const Book = ({ item }) => {
  const [text, setText] = useState(false);
  return (
    <>
      {item.map((book) => {
        return (
          <div className="book-card" key={book.id}>
            <img src="images/edu.png" alt="Book Cover" />
            <div className="book-title">
              <p>{book.category}</p>
              <p>{book.title}</p>
            </div>

            <div className="description">
              <p>{text ? book.desc : `${book.desc.substring(0, 100)}...`}</p>
              <button onClick={() => setText(!text)} className="readmore-btn">
                {!text ? "Read More" : "Read Less"}
              </button>
              <button className="detail-btn">
                <Link to={`/book/${book.id}`}>more details</Link>
              </button>
            </div>
            <Reactions />
          </div>
        );
      })}
    </>
  );
};
export default Book;
