import React,{useState} from 'react';
import BasicAttrEditor from './BasicAttrEditor.js';
import './ShapeItem.css';
import AttrList from './AttrList.js';

const ShapeItem = (props) => {
    const shape = props.shape;
    const [edited,setEdited] = useState(false);
    return (
     <div key={shape.id} className="flex-row shape-item " >
        <div className="move-up-down-buttons">
          <button onClick={()=>{
            props.duplicate(shape);
          }} className="button is-small"
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
           
        </div>
        <AttrList
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
