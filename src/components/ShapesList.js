import React from 'react';
import ShapeItem from './ShapeItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ShapesList = ({shapes,selectedShape,setShapes,setSelectedShape,moveShape}) => {
    return (<>
     <div className="shapes-list">
      {shapes.map( shape => (
        <div key={shape.id} className={"flex-row " +(shape.id===selectedShape?"selected-shape":"")}>
        <button className="button is-small is-danger " title="Delete Shape" onClick={()=>{
          setShapes(shapes.filter(el=>el!==shape));
          setSelectedShape(null)
        }}><FontAwesomeIcon icon={faTrash}/></button>
        <ShapeItem setSelectedShape={setSelectedShape} shape={shape} duplicate={(shape)=>{
          const dup=Object.assign({},shape);
          dup.id=Date.now();
          let index=shapes.findIndex(el=>el===shape);
          setShapes([...shapes.slice(0,index+1),dup,...shapes.slice(index+1)]);
        }} selected={selectedShape===shape.id}
        
        shapeUp={moveShape(-1)}
        shapeDown={moveShape(1)}
        ></ShapeItem>
        </div>
      ))}
       </div>
    
    </>)
}

export default ShapesList;