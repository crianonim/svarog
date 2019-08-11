import React, { useState} from "react";

const attrs={
	"viewBox":{
		def:"0 0 360 360"
	},
    	"fill":{
		def:"pink"
	},
    	"stroke":{
		def:"purple",
	}
}

const BasicAttrEditor=(props)=>{
    const [controls,setControls]=useState(Object.entries(props.svgAttrs));
    const unUsedAttrs=Object.keys(attrs).filter(key=>controls.every(control=>control[0]!==key));
    const [addAttr,setAddAttr]=useState(unUsedAttrs[0])
    console.log(unUsedAttrs); 
    return (
        <div className="flex-row">
	<select value={addAttr} onChange={(e)=>{
	setAddAttr(e.target.value);
	}}>
	 { unUsedAttrs.map(key=>(<option>{key}</option>)) }
	</select>

	<button onClick={ ()=>{
	    const newControls=[...controls,[addAttr,attrs[addAttr].def]]; 
	    setControls(newControls)
	    props.changed(Object.fromEntries(newControls));
	}

	}>New Attr</button>
	{controls.map( ([key,value],i)=>{
	    return (
                    <span className="attr-pair">
                    <input onChange={(e)=>{
                        controls[i][0]=e.target.value;
                        setControls(controls.slice());
                        props.changed(Object.fromEntries(controls));
                    }}  value={key}></input>
                    <input onChange={(e)=>{
                        controls[i][1]=e.target.value;
                       // setControls(controls.slice());
                        props.changed(Object.fromEntries(controls));
                    }} 
                    value={value}></input>
                    </span>
                )
            } )}
		
        </div>
    )
}

export default BasicAttrEditor;
