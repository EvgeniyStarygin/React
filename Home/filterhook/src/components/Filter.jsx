import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import List from "./List";
import { events } from "../events";

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
    events.addListener("sortWords", sortWords);
    events.addListener("filterWords", filterWords);
    events.addListener("reset", reset);

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
    return () => {
      events.removeAllListeners();
    };
  }, [isSorted, filterByText]);

  return (
    <>
      <Controls />
      <List words={currentWords} />
    </>
  );
};

export default Filter;
