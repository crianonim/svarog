import React from 'react';

const SaveLoadPanel=({setSaved,setMessage,setShapes,setSvgAttrs,saved,shapes,svgAttrs})=>(
    <div className="panel">
        <div className="panel-heading">Save & Load to localStorage</div>
        <div className="panel-block">

            <button className="button is-danger has-hmargin-med" onClick={ ()=>{
                localStorage.setItem("save",JSON.stringify({attributes:svgAttrs,shapes}));
                setSaved(true);
                setMessage("SVG shape saved.");
            }}>Save</button>
            <button className="button is-info has-hmargin-med" onClick={()=>{
                const obj=JSON.parse(localStorage.getItem("save"));
                if (obj){
                    setShapes(obj.shapes);
                    setSvgAttrs(obj.attributes);
                    setMessage("SVG shape loaded.")
                }
            }} disabled={!saved} >Load</button>
        </div>
</div>)

export default SaveLoadPanel
