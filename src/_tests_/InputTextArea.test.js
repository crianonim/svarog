import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import InputTextArea from "../components/InputTextArea";

it("matches a snapshrot",()=>{
    const wrapper=shallow(<InputTextArea/>) 
    expect(toJson(wrapper)).toMatchSnapshot();
});
// TODO: implement different way to create element
// it("changes is fired when add property is clicked",()=>{
//     const changed=jest.fn();
//     const msg=jest.fn();
//     // global.document={querySelector:()=>({value:"<svg></svg>"})}
//     const wrapper=shallow(<InputTextArea changed={changed} msg={msg}/>) 
//     wrapper.find("button").simulate('click');
//     expect(changed).toHaveBeenCalledTimes(1);
// })
