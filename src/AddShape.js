import React,{useState} from 'react';
import './AddShape.css';
import {defaultValues} from './lib/helper.js'

const AddShape = (props) => {
    const [newShape, setNewShape] = useState("circle");
    return (
        <span className="field has-addons">
         <span className="control select is-small">

         <select
          value={newShape}
          onChange={e => {
            setNewShape(e.target.value);
          }}
          >{
            Object.keys(defaultValues).map(shapeName=>(<option key={shapeName}>{shapeName}</option>))
          }
         </select>
          </span>
      <button className="button control is-small is-primary"
        onClick={() => {
          props.addShape(newShape)
        }}
      >Add Shape</button>
        </span>
    );
}

export default AddShape;