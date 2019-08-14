import React from 'react';
import BasicAttrEditor from './BasicAttrEditor.js';
import './ShapeItem.css';

const ShapeItem = (props) => {
    const shape = props.shape;
    return (
     <div key={shape.id} className="flex-row shape-item " >
        <div className="move-up-down-buttons">
          <button onClick={()=>{
            props.duplicate(shape);
          }} className="dup-shape-button">
            *
          </button>
            <button className="move-up-button"
              onClick={() => {
                  props.shapeUp(shape);
              }}>&#x21E7;</button>
            <button className="move-down-button" onClick={() => {
                props.shapeDown(shape);
              }}
            >&#x21E9;</button>
        </div>
        <BasicAttrEditor
          element={shape.shape}
          attrs={shape.attributes}
          changed={attrs => {
            shape.attributes=attrs;
            props.changed(shape);
          }}
        />
       
    </div>
    );
}

export default ShapeItem;
