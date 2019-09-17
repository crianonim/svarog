import React from "react";

const AttrList = ({element,attrs}) => {
  return (
    <div className="flex-row flex-wrap attr-wrapper block">
      <span>{element}</span>
      
      {Object.entries(attrs).map(([key, value], i) => {
        return (
          <span key={key} className="attr-pair">
            <span className="key-name">{key}</span>
            <span className="">{value}</span>
          </span>

        );
      })}
    </div>
  );
};


export default AttrList;
