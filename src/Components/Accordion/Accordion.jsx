import React, { useState } from "react";
import data from "./Data.js";
function Accordion() {
  const [selected, setSelected] = useState(null);
  function handleSingleSelection(getCurrentid) {
    console.log(getCurrentid);
    setSelected(getCurrentid === selected ? null : getCurrentid);
  }
  console.log(selected);
  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
