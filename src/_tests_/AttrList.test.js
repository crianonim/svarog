import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AttrList from "../components/AttrList";

it("matches a snapshot",()=>{
    const wrapper=shallow(<AttrList element="circle" attrs={{"x":10,"y":20,"r":30}}/>) 
    expect(toJson(wrapper)).toMatchSnapshot();
});

it("has a shape name",()=>{
    const wrapper=shallow(<AttrList element="circle" attrs={{"x":10,"y":20,"r":30}}/>) 
    expect(wrapper.find('div > span:first-child').text()).toBe("circle")
})

it("has 3 attributes",()=>{
    const wrapper=shallow(<AttrList element="circle" attrs={{"x":10,"y":20,"r":30}}/>) 
    const attrs=wrapper.find('div > span').slice(1)
    expect(attrs.length).toBe(3)
})