import React from "react";
import "./CodePanel.css";

const attr2string = attrs => {
  return Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
};
const CodePanel = props => {
  const svg = `
<svg ${attr2string(props.svgAttrs)}> 
${props.shapes
    .map(shape => {
      const attrS = attr2string(shape.attributes);
      return ` <${shape.shape} ${attrS}/>`;
    })
    .join("\n")}
</svg>
  `;
  
  return (
    <div className="code-panel">
      <h3 className="header">Source code:</h3>
      <pre className="code-content">
        {svg}
      </pre>
    </div>
  );
};
export default CodePanel;
