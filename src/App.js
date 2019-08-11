import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";
import CodePanel from "./CodePanel.js";

const start = [
  {
    shape: "circle",
    attributes: { cx: 151, cy: 132, r: 52, fill: "red" }
  },
  {
    shape: "circle",
    attributes: {
      cx: 101,
      cy: 120,
      r: 40,
      fill: "pink"
    }
  },
  {
    shape: "circle",
    attributes: {
      cx: 601,
      cy: 420,
      r: 140,
      fill: "green"
    }
  },
  {
    shape: "rect",
    attributes: {
      x: 40,
      y: 320,
      width: 140,
      height: 200
    }
  }
];
const defaultValues = {
  circle: '{"cx":50,"cy":30,"r":10}',
  rect: '{"x":20,"y":50,"width":40,"height":20}',
  polygon: '{"points":"10 10 45 15 20 35"}'
};

const App = () => {
  const updateShapes = () => {
    setShapes(
      shapesControlls.map(i => ({
        shape: i.shape,
        attributes: JSON.parse(i.attributes)
      }))
    );
  };
  useEffect( ()=>{
    console.log("RENDER");
    return () => {
      console.log("clean-up");
    };
  });
  
  // const [inputs,setInputs] = useState(circles.map(c=>JSON.stringify(c)));
  const [shapes, setShapes] = useState(start);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newShape, setNewShape] = useState("circle");
  const [svgAttrs,setSvgAttrs] = useState({viewBox:"0 0 720 720"});
  const [shapesControlls, setShapesControlls] = useState(
    start.map(el => ({
      shape: el.shape,
      attributes: JSON.stringify(el.attributes)
    }))
  );
  useEffect(() => {
    if (isUpdate) {
      updateShapes();
    }
    setIsUpdate(false);
    
  });
  return (
    <>
      <svg {...svgAttrs} className="Svg-view">
        {shapes.map((shape, i) => {
          const ShapeType = shape.shape;
          return <ShapeType key={i} {...shape.attributes} />;
        })}
      </svg>
      {/* <button onClick={()=>setInputs([...inputs,JSON.stringify({cx:Math.random()*720,cy:Math.random()*720,r:20+Math.random()*50})])}>Add</button> */}
      <button onClick={updateShapes}>Update</button>
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
          setShapesControlls([
            ...shapesControlls,
            { shape: newShape, attributes: defaultValues[newShape] }
          ]);
          updateShapes();
        }}
      >
        Add Shape
      </button>
      <CodePanel shapes={ shapes} svgAttrs={svgAttrs}  />

      <div>
        {shapesControlls.map((control, ind) => (
          <div className="shape-row" key={ind}>
            <span className="shape-type">{control.shape}</span>
            <input
              className="shape-attributes"
              value={control.attributes}
              onChange={e => {
                console.time("map");
                setShapesControlls(
                  shapesControlls.map((c, i) =>
                    ind === i
                      ? { attributes: e.target.value, shape: c.shape }
                      : c
                  )
                );
                console.timeEnd("map");
                try {
                  JSON.parse(e.target.value);
                  setIsUpdate(true);
                } catch (e) {
                  setIsUpdate(false);
                }
              }}
            />
            {ind > 0 ? (
              <button
                onClick={() => {
                  let old = shapesControlls[ind - 1];
                  shapesControlls[ind - 1] = shapesControlls[ind];
                  shapesControlls[ind] = old;
                  setShapesControlls(shapesControlls.slice());
                  updateShapes();
                }}
              >
                up
              </button>
            ) : null}
            {ind < shapesControlls.length - 1 ? (
              <button
                onClick={() => {
                  let old = shapesControlls[ind + 1];
                  shapesControlls[ind + 1] = shapesControlls[ind];
                  shapesControlls[ind] = old;
                  setShapesControlls(shapesControlls.slice());
                  updateShapes();
                }}
              >
                down
              </button>
            ) : null}
          </div>
        ))}
      </div>

      <div className="interface" />
      <p>Jan</p>
    </>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
