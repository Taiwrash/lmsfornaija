import React, { useState } from "react";
import data from "../../Data";
import Book from "./Book";
import Category from "./Category";
const allCate = ["all", ...new Set(data.map((item) => item.category))];

const SingleBook = () => {
  const [text, setText] = useState(data);
  const [categories, setCategories] = useState(allCate);

  const filterCategory = (cat) => {
    if (cat === "all") {
      setText(data);
      return;
    }
    const result = data.filter((book) => book.category === cat);
    setText(result);
  };

  return (
    <>
      <Category allCate={categories} filterCategory={filterCategory} />

      <div className="big-house">
        <Book item={text}></Book>
      </div>
    </>
  );
};

export default SingleBook;
