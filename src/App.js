import React, { useState, useEffect } from "react";
import { start, defaultValues, createRandomSVG } from "./lib/helper.js";
import "./App.css";
import "../node_modules/bulma/css/bulma.min.css"
import CodePanel from "./CodePanel.js";
import BasicAttrEditor from "./BasicAttrEditor.js";
import InputTextArea from './InputTextArea';
import SvgView from './SvgView.js';
import AddShape from './AddShape.js';
import Messages from './Messages.js';
import CurrentShapePanel from './CurrentShapePanel.js';
import ShapesList from "./ShapesList.js";
import SvgProperties from "./SvgProperties.js";
import SaveLoadPanel from "./SaveLoadPanel.js";

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
  const [svgPropertiesSelected,setSvgPropertiesSelected]=useState(true);

  // helpers
  const moveShape = (step) => (movedShape) => {
    const index=shapes.findIndex((sh)=>sh===movedShape);
          const old=shapes[index+step];
          shapes[index+step]=movedShape;
          shapes[index]=old;
          setShapes(shapes.slice())
  }
  return (
    <div className="container">
    <header className="hero">
      <h1 className="title"><span className="title-letters">Sv</span>aro<span className="title-letters" >g</span></h1>
      <h2 className="subtitle">A slavic deity of celestial fire and blacksmithing that will help you create SVGs.</h2>
    </header>
   
    <Messages  message={message} dismiss={()=>setMessage(null)}/>    
   
    <main className="block flex-wrap flex-row ">
      <SvgView shapes={shapes} attrs={svgAttrs} setSelectedShape={(shape)=>{setSelectedShape(shape);setSvgPropertiesSelected(false)}} />
        

      <div className="panel">
       <div className="panel-heading">Select element to edit</div>
       <div className="panel-block">
        <div>
         <span onClick={()=>{setSelectedShape(null);setSvgPropertiesSelected(true)}}>
          <SvgProperties isSelected={svgPropertiesSelected} attrs={svgAttrs} changed={attr => {
          setSvgAttrs(attr);
          }}/>
         </span>
         <ShapesList shapes={shapes} setSelectedShape={(shape)=>{setSelectedShape(shape);setSvgPropertiesSelected(false)}} selectedShape={selectedShape} setShapes={setShapes} moveShape={moveShape}/>
        </div>
       </div>
      </div>

      
      {selectedShape!==null && 
      <CurrentShapePanel key={selectedShape} shape={shapes.find(el=>el.id===selectedShape)} changed={(shape)=>{shapes[shapes.findIndex(el=>el.id===selectedShape)]=shape;setShapes([...shapes])}}/>
      }
       {svgPropertiesSelected && 
      <CurrentShapePanel shape={ {shape:'svg',attributes:svgAttrs} } changed={(svg)=>{setSvgAttrs(svg.attributes)}}/>
      }

      <div className="panel">
      <div className="panel-heading">Transform SVG</div>
        <div className="panel-block">
          <div className="flex-row">
           <button className="button is-small is-warning has-hmargin-med" onClick={()=>{
             setSelectedShape(null);
            const cSvg=createRandomSVG();
            setShapes(cSvg.shapes);
            setSvgAttrs(cSvg.attributes);
            setMessage("Random svg created.")
          }}>Randomise</button>
           <button className="button is-small is-danger has-hmargin-med" onClick={()=>{setShapes([]);setSvgPropertiesSelected(true);setSelectedShape(null)}}>Clear</button>
           <AddShape addShape={(shape)=>{
          setShapes([...shapes,{shape,attributes:defaultValues[shape],id:Date.now()}])
        }} />    
         </div>
        </div>
      </div>
         
      <CodePanel shapes={shapes} svgAttrs={svgAttrs} />

      <InputTextArea msg={setMessage} change={setShapes} />

      <SaveLoadPanel saved={saved} setSaved={setSaved} setMessage={setMessage} setShapes={setShapes} setSvgAttrs={setSvgAttrs} shapes={shapes} svgAttrs={svgAttrs}/>
     
     </main>

    </div>
   
  );
};

export default App;
