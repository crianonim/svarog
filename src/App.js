import React, { useState, useEffect } from "react";
import { start, defaultValues } from "./lib/helper.js";
import "./App.css";

import CodePanel from "./CodePanel.js";
import BasicAttrEditor from "./BasicAttrEditor.js";
import ShapeItem from "./ShapeItem";
import InputTextArea from './InputTextArea';
import SvgView from './SvgView.js';
import AddShape from './AddShape.js';

const App = () => {
  useEffect(() => {
    console.log("RENDER",{selectedShape});
    return () => {
      console.log("clean-up");
    };
  });
   
  // state
  const [shapes, setShapes] = useState(start);
  const [svgAttrs, setSvgAttrs] = useState({ viewBox: "0 0 720 720" });
  const [selectedShape, setSelectedShape] = useState(null);

  // helpers
  const moveShape = (step) => (movedShape) => {
    const index=shapes.findIndex((sh)=>sh===movedShape);
          const old=shapes[index+step];
          shapes[index+step]=movedShape;
          shapes[index]=old;
          setShapes(shapes.slice())
  }

  return (
    <><div className="flex-row">

      <SvgView shapes={shapes} attrs={svgAttrs} setSelectedShape={setSelectedShape}/>
     <div className="flex-column flex-grow">
      <CodePanel shapes={shapes} svgAttrs={svgAttrs} />
      <InputTextArea change={setShapes} />
     </div>
    </div>
      <BasicAttrEditor
        element="svg"
        attrs={svgAttrs}
        changed={attr => {
          setSvgAttrs(attr);
        }}
      />
    
     <AddShape addShape={(shape)=>{
        setShapes([...shapes,{shape,attributes:defaultValues[shape],id:Date.now()}])
      }} />
      <div className="shapes-list">
      {shapes.map( shape => (
        <div key={shape.id} className={"flex-row " +(shape.id===selectedShape?"selected-shape":"")}>
        <button onClick={()=>{
          setShapes(shapes.filter(el=>el!==shape));
        }}>x</button>
        <ShapeItem  shape={shape} selected={selectedShape===shape.id}
        changed={(changedShape)=>{
          shapes[shapes.findIndex((sh)=>sh===changedShape)]=changedShape;
          setShapes(shapes.slice());
        }}
        shapeUp={moveShape(-1)}
        shapeDown={moveShape(1)}
        ></ShapeItem>
        </div>
      ))}
      </div>
    </>
  );
};

export default App;
