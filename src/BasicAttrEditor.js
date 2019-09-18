import React, { useState } from "react";
import './BasicAttrEditor.css';
import {attrsData} from './lib/helper.js';



const BasicAttrEditor = ({attrs,element,changed}) => {
  const [controls, setControls] = useState(Object.entries(attrs));
  console.log({controls})
  const validAttrs = Object.entries(attrsData)
   .filter( ([_,attr])=>!attr.el || attr.el.includes(element))
   .map(([key,_])=>key);
  const unUsedAttrs = validAttrs.filter(key =>
    controls.every(control => control[0] !== key)
  );
  const [addAttr, setAddAttr] = useState(unUsedAttrs[0]);
  // console.log(element, unUsedAttrs);
  return (
    <div className="flex-row flex-wrap  block">
      <span>Add property: &nbsp;</span>
      <span className="field has-addons">
       <span className="control">
         <span className="select   is-small">
           <select
            value={addAttr}
            onChange={e => {
              console.log("BAE",e.target.value);
              setAddAttr(e.target.value);
            }}>
            {unUsedAttrs.map(key => (
              <option key={key}>{key}</option>
              ))}
          </select>
         </span>
       </span>
      
      <span className="control">
        <button className="button is-small is-primary"
          onClick={() => {
            console.log({ addAttr });
            const newControls = [...controls, [addAttr, attrsData[addAttr].def]];
            setControls(newControls);
            setAddAttr(unUsedAttrs.filter(key => key !== addAttr)[0]);
            changed(Object.fromEntries(newControls));
          }}
          >+</button>
        </span>
      </span>
      {Object.entries(attrs).map(([key, value], i) => {
        return (
          <span key={key} className="flex-row has-hmargin-med">
            <span className="key-name">{key}:  </span>
            <span className="field has-addons">
             <span className="control">
              <input className="input is-small    "
                onChange={e => {
                  controls[i][1] = e.target.value;
                  setControls(controls.slice());
                  console.log("NV",{controls})
                  changed(Object.fromEntries(controls));
                }}
                style={{ width: ((value+"").length+1) + "rem" }}
                value={value}
                />
              {attrsData[key].type==="color"?(<div className="color-box" style={{backgroundColor:value}}></div>):null}
              </span>
 
             <span className="control">
              <button className="button is-small" onClick={()=>{
                const changedAttrs=removeAttributeFromShape(controls,key)
                changed(Object.fromEntries(changedAttrs))
                setControls(changedAttrs);
              }
              }>x</button>
            </span>
           </span>
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
