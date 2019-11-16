import React,{useState,useRef} from 'react';
import Coords from './Coords';
import './SvgView.css';




const SvgView = (props) => {
    const [zoom,setZoom] = useState(400);
    const svgCanvas=useRef(null)
    const setZoomHandler = zoom => () => setZoom(zoom);
    return (
        <div className="panel">
          <div className="panel-heading">Your SVG</div>
          <p className="panel-tabs">
            <Coords svgCanvas={svgCanvas} zoom={zoom/400}/>
            <span className="align-self-center">Zoom:</span>
            <a onClick={setZoomHandler(100)} className={zoom===100?"is-active":""}>100px</a>
            <a onClick={setZoomHandler(200)} className={zoom===200?"is-active":""}>200px</a>
            <a onClick={setZoomHandler(400)} className={zoom===400?"is-active":""}>400px</a>
            {/* <a onClick={setZoomHandler(800)}>800px</a> */}
          </p>
         <div className="panel-block">
           <div className="svg-wrapper">

           <svg ref={svgCanvas} {...props.attrs} className="Svg-view" onClick={console.log} style={{width:zoom,height:zoom}}>
          {props.shapes.map((shape, i) => {
            const ShapeType = shape.shape;
            return <ShapeType data-id={shape.id} onClick={(e)=>{
              props.setSelectedShape(shape.id)
            }} key={i} {...shape.attributes} />;
          })}
           </svg>
          </div>
         </div>
        </div>
    )
}

export default SvgView;
