import React, { useState } from "react";
import './BasicAttrEditor.css';
import {attrsData} from './lib/helper.js';



const BasicAttrEditor = ({attrs,element,changed}) => {
  const [controls, setControls] = useState(Object.entries(attrs));
  const validAttrs = Object.entries(attrsData)
   .filter( ([_,attr])=>!attr.el || attr.el.includes(element))
   .map(([key,_])=>key);
  const unUsedAttrs = validAttrs.filter(key =>
    controls.every(control => control[0] !== key)
  );
  const [addAttr, setAddAttr] = useState(unUsedAttrs[0]);
  // console.log(element, unUsedAttrs);
  return (
    <div className="flex-row flex-wrap attr-wrapper block">
      <span>{element}</span>
      <span className="field has-addons">
      <span className="control select is-small">
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
      </span>
      

      <button className="control button is-small is-primary"
        onClick={() => {
          console.log({ addAttr });
          const newControls = [...controls, [addAttr, attrsData[addAttr].def]];
          setControls(newControls);
          setAddAttr(unUsedAttrs.filter(key => key !== addAttr)[0]);
          changed(Object.fromEntries(newControls));
        }}
      >+</button>
      </span>
      {Object.entries(attrs).map(([key, value], i) => {
        return (
          <span key={key} className="attr-pair">
            <span className="key-name">{key}</span>
            <input className="input is-small    "
              onChange={e => {
                controls[i][1] = e.target.value;
                setControls(controls.slice());
                changed(Object.fromEntries(controls));
            }}
            style={{ width: (value+"").length + "rem" }}
              value={value}
            />
            {attrsData[key].type==="color"?(<span className="color-box" style={{color:value}}>&#x2588;</span>):null}
          <button className="button is-small" onClick={()=>{
              const changedAttrs=removeAttributeFromShape(controls,key)
              changed(Object.fromEntries(changedAttrs))
              setControls(changedAttrs);
              }
            }>x</button>
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
