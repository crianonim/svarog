import React, {useState} from 'react';
import BasicAttrEditor from './BasicAttrEditor.js';
import './ShapeItem.css';

const ShapeItem = (props) => {
    const shape = props.shape;
    return (
     <div key={shape.id} className={"flex-row shape-item "+(props.selected?"selected-shape":"")} >
        <BasicAttrEditor
          element={shape.shape}
          attrs={shape.attributes}
          changed={attrs => {
            shape.attributes=attrs;
            props.changed(shape);
          }}
        />
        <div className="move-up-down-buttons">
            <button className="move-up-button"
              onClick={() => {
                  props.shapeUp(shape);
              }}>up</button>
            <button className="move-down-button" onClick={() => {
                props.shapeDown(shape);
              }}
            >down</button>
        </div>
    </div>
    );
}

export default ShapeItem;
