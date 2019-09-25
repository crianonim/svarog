import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import BasicAttrEditor from "../components/BasicAttrEditor";

it("matches a snapshot",()=>{
    const wrapper=shallow(<BasicAttrEditor element="circle" attrs={{"x":10,"y":20,"r":30}}/>) 
    expect(toJson(wrapper)).toMatchSnapshot();
});
it("changes is fired when add property is clicked",()=>{
    const changed=jest.fn();
    const wrapper=shallow(<BasicAttrEditor changed={changed} element="circle" attrs={{"x":10,"y":20,"r":30}}/>) 
    wrapper.find("button.button.is-small.is-primary").simulate('click');
    expect(changed).toHaveBeenCalledTimes(1);
})
it("changes is called with new set attributes with new selected one",()=>{
    const changed=jest.fn();
    const wrapper=shallow(<BasicAttrEditor changed={changed} element="circle" attrs={{"x":10,"y":20,"r":30}}/>) 
    wrapper.find("button.button.is-small.is-primary").simulate('click');
    expect(changed).toBeCalledWith({ x: 10, y: 20, r: 30, fill: 'pink' });
})
it("changes is called without deleted attr",()=>{
    const changed=jest.fn();
    const wrapper=shallow(<BasicAttrEditor changed={changed} element="circle" attrs={{"x":10,"y":20,"r":30}}/>) 
    wrapper.find("button.button.is-small.is-danger").first().simulate('click');
    expect(changed).toBeCalledWith({y: 20, r: 30 });
})
it("has 3 attributes and 3 inputs",()=>{
    const wrapper=shallow(<BasicAttrEditor element="circle" attrs={{"x":10,"y":20,"r":30}}/>) 
    const attrs=wrapper.find('.key-name')
    expect(attrs.length).toBe(3)
    const inputs=wrapper.find('input');
    expect(inputs.length).toBe(3);
})
it("updates attrs when value in input is changed",()=>{
    const changed=jest.fn();
    const wrapper=shallow(<BasicAttrEditor changed={changed} element="circle" attrs={{"x":10,"y":20,"r":30}}/>) 
    const input=wrapper.find('input').first();
    input.simulate('change',{target:{value:66}});
    expect(changed).toBeCalledWith({ x: 66, y: 20, r: 30 });

})