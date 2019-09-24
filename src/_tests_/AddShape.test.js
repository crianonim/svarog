import React from "react";
import { shallow } from "enzyme"
import AddShape from "../AddShape"

it("should react to click with a default shape",()=>{
    const addShape=jest.fn()
    const wrapper=shallow(<AddShape addShape={addShape}/>)
    wrapper.find('button').simulate("click");
    expect(addShape).toBeCalledWith("circle")
})

it("should change shape to rect and after click call with rect",()=>{
    const addShape=jest.fn()
    const wrapper=shallow(<AddShape addShape={addShape}/>)
    wrapper.find('select').simulate("change",{target:{value:"rect"}});
    wrapper.find('button').simulate("click");
    expect(addShape).toBeCalledWith("rect")
})