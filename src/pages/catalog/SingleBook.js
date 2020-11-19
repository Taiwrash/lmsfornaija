import React, { useState } from "react";
import data from "../../Data";
import Book from "./Book";

const SingleBook = () => {
  const [text, setText] = useState(data);

  return (
    <>
      <Book item={text}></Book>
    </>
  );
};

export default SingleBook;
