import React, { useState, useEffect } from "react";
import { start, defaultValues, createRandomSVG } from "./lib/helper.js";
import "./App.css";
import "../node_modules/bulma/css/bulma.min.css"
import CodePanel from "./CodePanel.js";
import BasicAttrEditor from "./BasicAttrEditor.js";
import ShapeItem from "./ShapeItem";
import InputTextArea from './InputTextArea';
import SvgView from './SvgView.js';
import AddShape from './AddShape.js';
import Messages from './Messages.js';
import CurrentShapePanel from './CurrentShapePanel.js';

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
  const [saved,setSaved] = useState(localStorage.getItem('save'));
  const [message,setMessage] = useState(null)

  // helpers
  const moveShape = (step) => (movedShape) => {
    const index=shapes.findIndex((sh)=>sh===movedShape);
          const old=shapes[index+step];
          shapes[index+step]=movedShape;
          shapes[index]=old;
          setShapes(shapes.slice())
  }
  return (
    <div className="">
    <header>
      <h1><span className="title-letters">Sv</span>aro<span className="title-letters" >g</span></h1>
      <h2>A slavic deity of celestial fire and blacksmithing that will help you create SVGs.</h2>
    </header>
    <Messages  message={message} dismiss={()=>setMessage(null)}/>    
    <div className="block">

      <SvgView shapes={shapes} attrs={svgAttrs} setSelectedShape={setSelectedShape} />
      <BasicAttrEditor
        element="svg"
        edited="true"
        attrs={svgAttrs}
        changed={attr => {
          setSvgAttrs(attr);
        }}
        />
      <CurrentShapePanel/>
      <div className="shapes-list">
      {shapes.map( shape => (
        <div key={shape.id} className={"flex-row " +(shape.id===selectedShape?"selected-shape":"")}>
        <button  title="Delete Shape" onClick={()=>{
          setShapes(shapes.filter(el=>el!==shape));
        }}>x</button>
        <ShapeItem  shape={shape} duplicate={(shape)=>{
          const dup=Object.assign({},shape);
          dup.id=Date.now();
          let index=shapes.findIndex(el=>el===shape);
          setShapes([...shapes.slice(0,index+1),dup,...shapes.slice(index+1)]);
        }} selected={selectedShape===shape.id}
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
     <div className="flex-column flex-grow bordered margined right-panel">
       {selectedShape?<div className="move-shape" onClick={()=>{
         const shape=shapes.find(el=>el.id===selectedShape);
          shape.attributes.cy-=10;
         setShapes(shapes.slice())
  }}></div>:null}
      <CodePanel shapes={shapes} svgAttrs={svgAttrs} />
      <InputTextArea msg={setMessage} change={setShapes} />
      <div>
        <button onClick={ ()=>{
          localStorage.setItem("save",JSON.stringify({attributes:svgAttrs,shapes}));
          setSaved(true);
          setMessage("SVG shape saved.");
         }
        }>Save</button>
        <button onClick={()=>{
          const obj=JSON.parse(localStorage.getItem("save"));
          if (obj){
            setShapes(obj.shapes);
            setSvgAttrs(obj.attributes);
            setMessage("SVG shape loaded.")
          }
        }} disabled={!saved} >Load</button>
      </div>
     </div>
    </div>
    <div className="svg-data margined bordered">
      <div className="flex-row">

    <button onClick={()=>{
      console.log("Create random SVG");
      const cSvg=createRandomSVG();
      console.log({cSvg});
      setShapes(cSvg.shapes);
      setSvgAttrs(cSvg.attributes);
      setMessage("Random svg created.")
    }}>Randomise</button>
      
      
    
    
    </div><label> Add new shape</label> 
    <AddShape addShape={(shape)=>{
       setShapes([...shapes,{shape,attributes:defaultValues[shape],id:Date.now()}])
      }} />
     
      </div>
    </div>
  );
};

export default App;
