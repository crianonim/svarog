import React, { useState} from "react";

const BasicAttrEditor=(props)=>{
    const [controls,setControls]=useState(Object.entries(props.svgAttrs));
    return (
        <div className="flex-row">
            {controls.map( ([key,value],i)=>{
                return (
                    <>
                    <input onChange={(e)=>{
                        controls[i][0]=e.target.value;
                        setControls(controls.slice());
                        props.changed(Object.fromEntries(controls));
                    }}  value={key}></input>
                    <input onChange={(e)=>{
                        controls[i][1]=e.target.value;
                        setControls(controls.slice());
                        props.changed(Object.fromEntries(controls));
                    }} 
                    value={value}></input>
                    </>
                )
            } )}

        </div>
    )
}

export default BasicAttrEditor;