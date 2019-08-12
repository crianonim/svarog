import React from "react";
import './InputTextArea.css';

const InputTextArea = (props) => {
    return (
        <>
         <textarea className="parse-input-ta"></textarea>
         <button onClick={()=>{
         let id=1;
         const fakeDOM=document.createElement('div');
         fakeDOM.innerHTML=document.querySelector('textarea').value;
         const svg=fakeDOM.children[0];
         const shapes=Array.from(svg.children).map(child=>{
           const atts=Object.fromEntries(child.getAttributeNames().map(att=>[att,child.getAttribute(att)]));
           return {id:id++,attributes:atts,shape:child.tagName}
        })
        props.change(shapes);
      }
      }>parse</button>
        </>
    )
}

export default InputTextArea;