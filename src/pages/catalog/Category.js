import React from "react";

const Category = ({ allCate, filterCategory }) => {
  return (
    <>
      <div className="category">
        {allCate.map((category, key) => {
          return (
            <button key={key} onClick={() => filterCategory(category)}>
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Category;
