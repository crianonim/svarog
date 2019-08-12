import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import CodePanel from "./CodePanel.js";
import BasicAttrEditor from "./BasicAttrEditor.js";
import { start, defaultValues } from "./lib/helper.js";
import ShapeItem from "./ShapeItem";

const App = () => {
  useEffect(() => {
    console.log("RENDER",selectedShape);
    return () => {
      console.log("clean-up");
    };
  });
   
  // state
  const [shapes, setShapes] = useState(start);
  const [newShape, setNewShape] = useState("circle");
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
    <>
      <svg {...svgAttrs} className="Svg-view">
        {shapes.map((shape, i) => {
          const ShapeType = shape.shape;
          return <ShapeType data-id={shape.id} onClick={(e)=>{
            setSelectedShape(shape.id)
          }} key={i} {...shape.attributes} />;
        })}
      </svg>
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
          console.log(newShape);
          setShapes([
            ...shapes,
            {
              shape: newShape,
              attributes: defaultValues[newShape],
              id: Date.now()
            }
          ]);
        }}
      >Add Shape</button>
      <CodePanel shapes={shapes} svgAttrs={svgAttrs} />
      <BasicAttrEditor
        element="svg"
        attrs={svgAttrs}
        changed={attr => {
          setSvgAttrs(attr);
        }}
      />
      <textarea></textarea>
      <button onClick={()=>{
        let id=1;
        const fakeDOM=document.createElement('div');
        fakeDOM.innerHTML=document.querySelector('textarea').value;
        const svg=fakeDOM.children[0];
        const shapess=Array.from(svg.children).map(child=>{
          const atts=Object.fromEntries(child.getAttributeNames().map(att=>[att,child.getAttribute(att)]));
          return {id:id++,attributes:atts,shape:child.tagName}
        })
        setShapes(shapess);
      }
      }>parse</button>
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
