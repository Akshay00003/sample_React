import React, { useState } from "react";
import data from "./Data";

const SampleFour = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (getCurrentid) => {
    setSelected(getCurrentid === selected ? null : getCurrentid);
  };
  const handleMultiSelection = (getCurrentid) => {
    let cpymultiple = [...multiple];
    const findIndexofcurrentid = cpymultiple.indexOf(getCurrentid);
    if (findIndexofcurrentid === -1) cpymultiple.push(getCurrentid);
    else cpymultiple.splice(findIndexofcurrentid, 1);
    setMultiple(cpymultiple);
    console.log(cpymultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default SampleFour;
