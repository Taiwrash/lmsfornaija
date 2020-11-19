import React, { useState } from "react";
import SingleBook from "./SingleBook";
import data from "../../Data";
import Category from "./Category";

const allCate = ["all", ...new Set(data.map((item) => item.category))];

const Books = () => {
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
      <Category filterCategory={filterCategory} allCate={categories} />
      <div className="big-house">
        <SingleBook />
      </div>
    </>
  );
};

export default Books;
