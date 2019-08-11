import React from "react";
import "./CodePanel.css";
const CodePanel = props => {
  const shapes = props.shapes
    .map(shape => {
      const attrS = Object.entries(shape.attributes)
        .map(([key, value]) => `${key}:"${value}"`)
        .join(" ");
      return `<${shape.shape} ${attrS}/>`;
    })
    .join("\n");
  return (
    <div className="code-panel">
        <h3>Source code:</h3>
      <pre className="code-content">{shapes}</pre>
    </div>
  );
};
export default CodePanel;
