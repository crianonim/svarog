import React, { useState} from "react";

const attrsData={
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
    const [controls,setControls]=useState(Object.entries(props.attrs));
    const unUsedAttrs=Object.keys(attrsData).filter(key=>controls.every(control=>control[0]!==key));
    const [addAttr,setAddAttr]=useState(unUsedAttrs[0])
    console.log(unUsedAttrs); 
    return (
        <div className="flex-row">
	<select value={addAttr} onChange={(e)=>{
	    console.log(e.target.value);
	setAddAttr(e.target.value);
	}}>
	 { unUsedAttrs.map(key=>(<option key={key} >{key}</option>)) }
	</select>

	<button onClick={ ()=>{
	  console.log({addAttr})
	    const newControls=[...controls,[addAttr,attrsData[addAttr].def]]; 
	    setControls(newControls);
	    setAddAttr(unUsedAttrs.filter(key=>key!==addAttr)[0])
	    props.changed(Object.fromEntries(newControls));
	}

	}>New Attr</button>
	{controls.map( ([key,value],i)=>{
	    return (
                    <span key={key} className="attr-pair">
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
                    </span>
                )
            } )}
		
        </div>
    )
}

export default BasicAttrEditor;
