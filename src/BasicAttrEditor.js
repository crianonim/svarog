import React, { useState } from "react";
import './BasicAttrEditor.css';

const attrsData = {
  viewBox: {
    def: "0 0 360 360"
  },
  fill: {
    def: "pink"
  },
  stroke: {
    def: "purple"
  },
  strokeWidth:{
    def:"1"
  }
};

const BasicAttrEditor = props => {
  const [controls, setControls] = useState(Object.entries(props.attrs));
  const unUsedAttrs = Object.keys(attrsData).filter(key =>
    controls.every(control => control[0] !== key)
  );
  const [addAttr, setAddAttr] = useState(unUsedAttrs[0]);
  // console.log(props.element, unUsedAttrs);
  return (
    <div className="flex-row flex-wrap attr-wrapper">
      <span>{props.element}</span>
      <select
        value={addAttr}
        onChange={e => {
          console.log(e.target.value);
          setAddAttr(e.target.value);
        }}
      >
        {unUsedAttrs.map(key => (
          <option key={key}>{key}</option>
        ))}
      </select>

      <button
        onClick={() => {
          console.log({ addAttr });
          const newControls = [...controls, [addAttr, attrsData[addAttr].def]];
          setControls(newControls);
          setAddAttr(unUsedAttrs.filter(key => key !== addAttr)[0]);
          props.changed(Object.fromEntries(newControls));
        }}
      >
        +
      </button>
      {controls.map(([key, value], i) => {
        return (
          <span key={key} className="attr-pair">
            
            <span className="key-name">{key}</span>
            <input
              onChange={e => {
                controls[i][1] = e.target.value;
                setControls(controls.slice());
                props.changed(Object.fromEntries(controls));
            }}
            style={{ width: (value+"").length / 2 + "rem" }}
              value={value}
            />
          </span>
        );
      })}
    </div>
  );
};

export default BasicAttrEditor;
