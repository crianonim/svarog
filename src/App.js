import React,{ useState }  from 'react';
// import logo from './logo.svg';
import './App.css';

const start=[
  {
    shape:"circle",
    attributes:{
      cx:101,
      cy:120,
      r:40,
      fill:"pink"
    }
  },
  {
    shape:"circle",
    attributes:{
      cx:601,
      cy:420,
      r:140,
      fill:"green"
    }
  },
  {
    shape:"rect",
    attributes:{
      x:40,
      y:320,
      width:140,
      height:200
    }
  },
]
  
const App = ()=>{
  // const [inputs,setInputs] = useState(circles.map(c=>JSON.stringify(c)));
  const [shapes,setShapes] = useState(start);
  const [newShape,setNewShape] = useState("circle");
  const [shapesControlls,setShapesControlls] = useState(start.map(el=>({shape:el.shape,attributes:JSON.stringify(el.attributes)})));
  return (
    <>
    <svg viewBox="0 0 720 720" className="Svg-view">
      {shapes.map((shape,i)=>{
        const ShapeType=shape.shape;
        return (<ShapeType key={i} {...shape.attributes} />)})}

    </svg>
    {/* <button onClick={()=>setInputs([...inputs,JSON.stringify({cx:Math.random()*720,cy:Math.random()*720,r:20+Math.random()*50})])}>Add</button> */}
    <button onClick={()=>setShapes(shapesControlls.map(i=>({shape:i.shape,attributes:JSON.parse(i.attributes) })))}>Update</button>
    <select value={newShape} onChange={(e)=>{ setNewShape(e.target.value)}}>
      <option>circle</option>
      <option>rect</option>
    </select>
    <button onClick={()=>{console.log(newShape); setShapesControlls([...shapesControlls,{shape:newShape,attributes:"{}"}]) }}>Add Shape</button>
    <pre>
      {JSON.stringify(shapes)}
    </pre>
    <div>
      { shapesControlls.map( (control,ind)=>(
        <div key={ind}>
          <select value={control.shape} onChange={
            (e)=>{
              setShapesControlls(shapesControlls.map( (c,i)=>ind===i?{attributes:c.attributes,shape:e.target.value}:c) )
            }
          }>
            <option>circle</option>
            <option>rect</option>
          </select>
          <input value={control.attributes} onChange={
            (e)=>{
              console.time("map")
              setShapesControlls(shapesControlls.map( (c,i)=>ind===i?{attributes:e.target.value,shape:c.shape}:c) );
              console.timeEnd("map")

            }
          } />
        </div>
      ) )}
    </div>

    <div className="interface">
               </div>
    <p>Jan</p>
    </>
  );
}

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
