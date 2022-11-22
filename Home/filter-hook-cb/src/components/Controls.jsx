import React, { useState } from "react";

const Controls = ({ cbSort, cbFilter, cbReset }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [filteredByText, setFilteredByText] = useState("");

  const sort = (eo) => {
    setIsChecked(eo.target.checked);
    cbSort(eo.target.checked);
  };

  const filter = (eo) => {
    setFilteredByText(eo.target.value);
    cbFilter(eo.target.value);
  };

  const reset = (eo) => {
    setIsChecked(false);
    setFilteredByText("");
    cbReset();
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
