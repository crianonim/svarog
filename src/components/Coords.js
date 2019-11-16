import React,{useEffect,useState} from "react";

const Coords = ({svgCanvas}) => {
    const [coords,setCoords]=useState([0,0])
    const handler=(e)=>{
        setCoords([e.offsetX,e.offsetY])
        
    }
    useEffect(()=>{
        if (svgCanvas.current===null){
            return
        }
        svgCanvas.current.addEventListener("mousemove",handler)
        return ()=>{
            svgCanvas.current.removeEventListener("mousemove",handler)
        }
    },[svgCanvas])
    return (
        <span className="align-self-center">X:{coords[0]} Y:{coords[1]} &nbsp;</span>
    )
    
}
export default Coords