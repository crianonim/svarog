import React from 'react';
import './SvgView.css';

const SvgView = (props) => {
    return (
        <>
        <svg {...props.attrs} className="Svg-view">
        {props.shapes.map((shape, i) => {
          const ShapeType = shape.shape;
          return <ShapeType data-id={shape.id} onClick={(e)=>{
            props.setSelectedShape(shape.id)
          }} key={i} {...shape.attributes} />;
        })}
      </svg>
        </>
    )
}

export default SvgView;
