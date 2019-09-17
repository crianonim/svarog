import React from 'react';
import BasicAttrEditor from './BasicAttrEditor';

const CurrentShapePanel = ({shape,changed})=>{
    console.log({shape},{changed})
    return (
        <>
        <BasicAttrEditor
          element={shape.shape}
          attrs={shape.attributes}
          edited={true}
          changed={attrs => {
            shape.attributes=attrs;
            changed(shape);
          }}
        />
        </>
    )
}

export default CurrentShapePanel;
