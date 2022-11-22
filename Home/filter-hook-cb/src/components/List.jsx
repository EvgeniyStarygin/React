import React from "react";
import "./List.css"

const List = ({ words }) => {
  return <textarea className="WordsBlock" value={words.join("\n")} disabled={true} />;
};

export default List;
