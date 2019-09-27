import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CodePanel from "../components/CodePanel";

it("matches a snapshrot",()=>{
    const wrapper=shallow(<CodePanel svgAttrs={{fill:"black"}} shapes={[{shape:"circle",attributes:{"x":10,"y":20,"r":30}}] } />) 
    expect(toJson(wrapper)).toMatchSnapshot();
});
it("produces correct rendition of svg code",()=>{
    const wrapper=shallow(<CodePanel svgAttrs={{fill:"black"}} shapes={[{shape:"circle",attributes:{"x":10,"y":20,"r":30}}] } />) 
    expect(wrapper.find('pre').text()).toBe(`
<svg fill="black"> 
 <circle x="10" y="20" r="30"/>
</svg>
  `)
})

