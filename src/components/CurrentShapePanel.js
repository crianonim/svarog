import React from 'react';
import BasicAttrEditor from './BasicAttrEditor';

const CurrentShapePanel = ({shape,changed})=>{
    return (
        <div className="panel">
          <div className="panel-heading">Edit properties of the selected <b>{shape.shape}</b></div>
        <div className="panel-block">

        <BasicAttrEditor
          element={shape.shape}
          attrs={shape.attributes}
          changed={attrs => {
            shape.attributes=attrs;
            changed(shape);
          }}
          />
          </div>
        </div>
    )
}

export default CurrentShapePanel;
