import React,{useState} from 'react';
import BasicAttrEditor from './BasicAttrEditor.js';
import './ShapeItem.css';

const ShapeItem = (props) => {
    const shape = props.shape;
    const [edited,setEdited] = useState(false);
    return (
     <div key={shape.id} className="flex-row shape-item " >
        <div className="move-up-down-buttons">
          <button onClick={()=>{
            props.duplicate(shape);
          }} className="dup-shape-button"
          title="Duplicate Shape"
          >
            *
          </button>
            <button title="Move Up"  className="move-up-button"
              onClick={() => {
                  props.shapeUp(shape);
              }}>&#x21E7;</button>
            <button title="Move Down" className="move-down-button" onClick={() => {
                props.shapeDown(shape);
              }}
            >&#x21E9;</button>
            {edited?
            <button title="Disable attribute editing" className="edit-enable-btn" onClick={()=>setEdited(false)}>--</button>:
            <button title="Enable attribute editing" className="edit-enable-btn" onClick={()=>setEdited(true)}>...</button>
          }
        </div>
        <BasicAttrEditor
          element={shape.shape}
          attrs={shape.attributes}
          edited={edited}
          changed={attrs => {
            shape.attributes=attrs;
            props.changed(shape);
          }}
        />
       
    </div>
    );
}

export default ShapeItem;
