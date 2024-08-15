import React, { useState } from "react";
import data from "./Data";

const SampleThree = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentid) {
    setSelected(getCurrentid === selected ? null : getCurrentid);
  }
  const handleMultiSelection = (getCurrentid) => {
    let cpymultiple = [...multiple];
    const findIndexOfCurrentId = cpymultiple.indexOf(getCurrentid);
    if (findIndexOfCurrentId === -1) cpymultiple.push(getCurrentid);
    else cpymultiple.splice(findIndexOfCurrentId, 1);
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
          data.map((DataItem) => (
            <div className="item" key={DataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(DataItem.id)
                    : () => handleSingleSelection(DataItem.id)
                }
                className="title"
              >
                <h3>{DataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection ? (
                multiple.indexOf(DataItem.id) !== -1 && (
                  <div className="content">{DataItem.answer}</div>
                )
              ) : selected === DataItem.id && (
                <div className="contnet">{DataItem.answer}</div>
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

export default SampleThree;
