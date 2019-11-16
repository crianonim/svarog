import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ShapeItem from "../components/ShapeItem";



it("duplicate button can be clicked",()=>{
    const duplicate=jest.fn();
    const wrapper=shallow(<ShapeItem duplicate={duplicate} shape={{shape:"circle",attributes:{"x":10,"y":20,"r":30}}}/>) 
    wrapper.find(".move-up-down-buttons button").first().simulate('click');
    expect(duplicate).toHaveBeenCalledTimes(1);
})