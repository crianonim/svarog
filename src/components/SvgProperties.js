import React from "react"
import AttrList from "./AttrList";

const SvgProperties = ({attrs,isSelected}) => {
    return (
        <div className={isSelected?'selected-shape':''}>
        <AttrList element="svg" attrs={attrs}/>
        </div>
    )
}
export default SvgProperties