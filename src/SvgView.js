import React,{useState} from 'react';
import './SvgView.css';




const SvgView = (props) => {
    const [zoom,setZoom] = useState(400);

    const setZoomHandler = zoom => () => setZoom(zoom);
    return (
        <div className="svg-display margined">
            <div className="svg-zoom-control flex-row flex-align-center">
               
                <span >Zoom:</span>

                <label>
                  <input type="radio" checked={zoom===100} onChange={setZoomHandler(100)} name="zoom-radios" />
                  100
                </label>
                <label>
                  <input type="radio" checked={zoom===200} onChange={setZoomHandler(200)} name="zoom-radios" />
                    200
                </label>
                <label>
                  <input type="radio" checked={zoom===400} onChange={setZoomHandler(400)} name="zoom-radios" />
                    400
                </label>
                <label>
                  <input type="radio" checked={zoom===800} onChange={setZoomHandler(800)} name="zoom-radios" />
                    800
                </label>
            </div>
        <svg {...props.attrs} className="Svg-view" style={{width:zoom}}>
        {props.shapes.map((shape, i) => {
          const ShapeType = shape.shape;
          return <ShapeType data-id={shape.id} onClick={(e)=>{
            props.setSelectedShape(shape.id)
          }} key={i} {...shape.attributes} />;
        })}
      </svg>
        </div>
    )
}

export default SvgView;
