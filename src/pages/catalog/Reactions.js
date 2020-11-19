import React, { useState } from "react";

const Reactions = () => {
  const [likes, setLikes] = useState(0);
  const [borrow, setBorrow] = useState(0);
  return (
    <div className="icons">
      <button className="icon" onClick={() => setLikes([parseInt(likes) + 1])}>
        Likes + {likes}
      </button>
      <button
        className="icon"
        onClick={() => setBorrow([parseInt(borrow) + 1])}
      >
        Borrow {borrow}
      </button>
      <button className="icon">Bkmark</button>
      <button className="icon">Share</button>
    </div>
  );
};
export default Reactions;
