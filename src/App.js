import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import CodePanel from "./CodePanel.js";
import BasicAttrEditor from "./BasicAttrEditor.js";
import { start, defaultValues } from "./lib/helper.js";

const App = () => {
  useEffect(() => {
    console.log("RENDER",selectedShape);
    return () => {
      console.log("clean-up");
    };
  });

  const [shapes, setShapes] = useState(start);
  const [newShape, setNewShape] = useState("circle");
  const [svgAttrs, setSvgAttrs] = useState({ viewBox: "0 0 720 720" });
  const [selectedShape, setSelectedShape] = useState(null);
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
      >
        Add Shape
      </button>
      <CodePanel shapes={shapes} svgAttrs={svgAttrs} />
      <BasicAttrEditor
        element="svg"
        attrs={svgAttrs}
        changed={attr => {
          setSvgAttrs(attr);
        }}
      />

      <div className="shapes-list">
        {shapes.map((shape, ind) => (
          <div key={shape.id} className={"flex-row " + (selectedShape === shape.id ? "selected-shape":"")} >
            <BasicAttrEditor
              
              element={shape.shape}
              attrs={shape.attributes}
              changed={attrs => {
                shapes[ind].attributes = attrs;
                setShapes(shapes.slice());
              }}
            />
            <div>
              {ind > 0 ? (
                <button
                  onClick={() => {
                    let old = shapes[ind - 1];
                    shapes[ind - 1] = shapes[ind];
                    shapes[ind] = old;
                    setShapes(shapes.slice());
                  }}
                >
                  up
                </button>
              ) : null}
              {ind < shapes.length - 1 ? (
                <button
                  onClick={() => {
                    let old = shapes[ind + 1];
                    shapes[ind + 1] = shapes[ind];
                    shapes[ind] = old;
                    setShapes(shapes.slice());
                  }}
                >
                  down
                </button>
              ) : null}
            </div>
          </div>
        ))}
        }
      </div>
    </>
  );
};

export default App;
