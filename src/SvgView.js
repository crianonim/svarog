import React,{useState} from 'react';
import './SvgView.css';




const SvgView = (props) => {
    const [zoom,setZoom] = useState(400);

    const setZoomHandler = zoom => () => setZoom(zoom);
    return (
        <div className="panel">
          <div className="panel-heading">Your SVG</div>
          <p className="panel-tabs">
            <span className="align-self-center">Zoom:</span>
            <a onClick={setZoomHandler(100)}>100p</a>
            <a onClick={setZoomHandler(200)}>200px</a>
            <a onClick={setZoomHandler(400)} className="is-active">400px</a>
            {/* <a onClick={setZoomHandler(800)}>800px</a> */}
          </p>
         <div className="panel-block">
          <svg {...props.attrs} className="Svg-view" onClick={console.log} style={{width:zoom}}>
        {props.shapes.map((shape, i) => {
          const ShapeType = shape.shape;
          return <ShapeType data-id={shape.id} onClick={(e)=>{
            props.setSelectedShape(shape.id)
          }} key={i} {...shape.attributes} />;
        })}
          </svg>
         </div>
        </div>
    )
}

export default SvgView;
