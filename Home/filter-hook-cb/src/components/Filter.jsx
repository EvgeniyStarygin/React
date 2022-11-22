import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import List from "./List";

const Filter = ({ words }) => {
  const [isSorted, setIsSorted] = useState(false);
  const [filterByText, setFilterByText] = useState("");
  const [currentWords, setCurrentWords] = useState(words);

  const sortWords = (needSort) => {
    setIsSorted(needSort);
  };

  const filterWords = (value) => {
    setFilterByText(value);
  };

  const reset = () => {
    setIsSorted(false);
    setFilterByText("");
  };

  useEffect(() => {
    let arr = null;
    if (filterByText) {
      arr = words.filter((word) => word.includes(filterByText));
    } else {
      arr = [...words];
    }
    if (isSorted) {
      arr.sort();
    }
    setCurrentWords(arr);
  }, [isSorted, filterByText]);

  return (
    <>
      <Controls cbSort={sortWords} cbFilter={filterWords} cbReset={reset} />
      <List words={currentWords} />
    </>
  );
};

export default Filter;
