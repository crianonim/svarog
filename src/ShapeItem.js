import React from 'react';
import './ShapeItem.css';
import AttrList from './AttrList.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCopy,faArrowDown,faArrowUp } from '@fortawesome/free-solid-svg-icons'
const ShapeItem = ({shape,duplicate,shapeUp,shapeDown,setSelectedShape}) => {
    return (
     <div key={shape.id} className="flex-row shape-item " >
        <div className="move-up-down-buttons">
          <button onClick={()=>{
            duplicate(shape);
          }} className="button is-small is-primary"
          title="Duplicate Shape"
          >
            <FontAwesomeIcon icon={faCopy}/>
          </button>
            <button title="Move Up"  className="move-up-button button is-small is-info"
              onClick={() => {
                  shapeUp(shape);
              }}><FontAwesomeIcon icon={faArrowUp}/></button>
            <button title="Move Down" className="move-down-button  button is-small is-info" onClick={() => {
                shapeDown(shape);
              }}
            ><FontAwesomeIcon icon={faArrowDown}/></button>
           
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
