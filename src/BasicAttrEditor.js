import React, { useState } from "react";
import './BasicAttrEditor.css';
import {attrsData} from './lib/helper.js';



const BasicAttrEditor = props => {
  const [controls, setControls] = useState(Object.entries(props.attrs));
  const validAttrs = Object.entries(attrsData)
   .filter( ([_,attr])=>!attr.el || attr.el.includes(props.element))
   .map(([key,_])=>key);
  const unUsedAttrs = validAttrs.filter(key =>
    controls.every(control => control[0] !== key)
  );
  const [addAttr, setAddAttr] = useState(unUsedAttrs[0]);
  // console.log(props.element, unUsedAttrs);
  return (
    <div className="flex-row flex-wrap attr-wrapper">
      <span>{props.element}</span>
      {props.edited?
      <>
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
      </>
      :null}
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
            {attrsData[key].type==="color"?(<span className="color-box" style={{color:value}}>&#x2588;</span>):null}
            {props.edited?(<button onClick={()=>{
              const changedAttrs=removeAttributeFromShape(controls,key)
              props.changed(Object.fromEntries(changedAttrs))
              setControls(changedAttrs);
              }
            }>x</button>):null}
          </span>

        );
      })}
    </div>
  );
};

const removeAttributeFromShape=(attributes,attributeName)=>{
  return attributes.filter( ([key,_])=>key!==attributeName );
}

export default BasicAttrEditor;
