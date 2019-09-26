import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CurrentShapePanel from "../components/CurrentShapePanel";

it("matches a snapshrot",()=>{
    const wrapper=shallow(<CurrentShapePanel shape={{element:"circle",attributes:{"x":10,"y":20,"r":30}} } />) 
    expect(toJson(wrapper)).toMatchSnapshot();
});
