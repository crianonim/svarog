import React from 'react';
import './ShapeItem.css';
import AttrList from './AttrList.js';

const ShapeItem = ({shape,duplicate,shapeUp,shapeDown,setSelectedShape}) => {
    return (
     <div key={shape.id} className="flex-row shape-item " >
        <div className="move-up-down-buttons">
          <button onClick={()=>{
            duplicate(shape);
          }} className="button is-small is-primary"
          title="Duplicate Shape"
          >
            *
          </button>
            <button title="Move Up"  className="move-up-button button is-small is-info"
              onClick={() => {
                  shapeUp(shape);
              }}>&#x21E7;</button>
            <button title="Move Down" className="move-down-button  button is-small is-info" onClick={() => {
                shapeDown(shape);
              }}
            >&#x21E9;</button>
           
        </div>
        <span onClick={()=>{setSelectedShape(shape.id)}}>

        <AttrList 
          element={shape.shape}
          attrs={shape.attributes}
          />
        </span>
       
    </div>
    );
}

export default ShapeItem;
