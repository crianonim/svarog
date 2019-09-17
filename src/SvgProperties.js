import React from "react"
import BasicAttrEditor from "./BasicAttrEditor";

const SvgProperties = ({attrs,changed}) => {
    return (
        <>
        <BasicAttrEditor
        element="svg"
        attrs={attrs}
        changed={changed}
      />
        </>
    )
}
export default SvgProperties