import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ShapesList from "../components/ShapesList";


it("deletes an item from list on delete button click",()=>{
    const moveShape = jest.fn();
    const setShapes = jest.fn();
    const setSelectedShape = jest.fn();
    const wrapper = shallow(
      <ShapesList
        selectedShape={1}
        setSelectedShape={setSelectedShape}
        moveShape={moveShape}
        setShapes={setShapes}
        svgAttrs={{ fill: "black" }}
        shapes={[{ id:1,shape: "circle", attributes: { x: 10, y: 20, r: 30 } }]}
      />
    );
    wrapper.find('button').simulate('click');
    expect(setShapes).toBeCalledTimes(1);
    expect(setShapes).toBeCalledWith([]);
    expect(setSelectedShape).toBeCalledTimes(1);
    expect(setSelectedShape).toBeCalledWith(null);

})
