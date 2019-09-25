import React from "react";
import './InputTextArea.css';

const InputTextArea = (props) => {
    return (
      <div className="panel">
        <div className="panel-heading">Parse your SVG code</div>
         <div className="panel-block">  
        <div className="flex-column  margined">
         <textarea className="parse-input-ta"></textarea>
         <button className="button is-small is-info" onClick={()=>{
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
      }>Parse</button>
        </div>
        </div>
      
      </div>      
    )
}

export default InputTextArea;