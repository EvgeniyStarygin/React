import React, { useState } from "react";
import { events } from "../events";

const Controls = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [filteredByText, setFilteredByText] = useState("");

  const sort = (eo) => {
    setIsChecked(eo.target.checked);
    events.emit("sortWords", eo.target.checked);
  };

  const filter = (eo) => {
    setFilteredByText(eo.target.value);
    events.emit("filterWords", eo.target.value);
  };

  const reset = (eo) => {
    setIsChecked(false);
    setFilteredByText("");
    events.emit("reset");
  };

  return (
    <div>
      <input type="checkbox" onChange={sort} checked={isChecked} />
      <input type="text" onChange={filter} value={filteredByText} />
      <input type="button" onClick={reset} value="Сброс" />
    </div>
  );
};

export default Controls;
