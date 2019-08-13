import React,{useState} from 'react';
import './AddShape.css';

const AddShape = (props) => {
    const [newShape, setNewShape] = useState("circle");
    return (
        <>
         <select
        value={newShape}
        onChange={e => {
          setNewShape(e.target.value);
        }}
      >
        <option>circle</option>
        <option>rect</option>
        <option>polygon</option>
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