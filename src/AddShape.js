import React,{useState} from 'react';
import './AddShape.css';
import {defaultValues} from './lib/helper.js'

const AddShape = (props) => {
    const [newShape, setNewShape] = useState("circle");
    return (
        <>
         <select
          value={newShape}
          onChange={e => {
           setNewShape(e.target.value);
          }}
         >{
          Object.keys(defaultValues).map(shapeName=>(<option key={shapeName}>{shapeName}</option>))
         }
         </select>
      <button
        onClick={() => {
          props.addShape(newShape)
        }}
      >Add Shape</button>
        </>
    );
}

export default AddShape;