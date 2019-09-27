import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ShapesList from "../components/ShapesList";
it("matches a snapshrot", () => {
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
  expect(toJson(wrapper)).toMatchSnapshot();
});
