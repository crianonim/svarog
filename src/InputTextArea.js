import React from "react";
import './InputTextArea.css';

const InputTextArea = (props) => {
    return (
        <div className="flex-column  margined">
         <textarea className="parse-input-ta"></textarea>
         <button onClick={()=>{
         let id=1;
         const fakeDOM=document.createElement('div');
         fakeDOM.innerHTML=document.querySelector('textarea').value;
         const svg=fakeDOM.children[0];
         if (svg) {
           const shapes=Array.from(svg.children).map(child=>{
             const atts=Object.fromEntries(child.getAttributeNames().map(att=>[att,child.getAttribute(att)]));
             return {id:id++,attributes:atts,shape:child.tagName}
            })
            props.change(shapes);
          } else {
            props.msg("E#Badly formed SVG.")
          }
      }
      }>parse</button>
      
        </div>
    )
}

export default InputTextArea;