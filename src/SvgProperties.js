import React from "react"
import BasicAttrEditor from "./BasicAttrEditor";
import AttrList from "./AttrList";

const SvgProperties = ({attrs,changed}) => {
    return (
        <>
        <AttrList element="svg" attrs={attrs}/>
        {/* <BasicAttrEditor
        element="svg"
        attrs={attrs}
        changed={changed}
      /> */}
        </>
    )
}
export default SvgProperties