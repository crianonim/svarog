import React from "react";
import { shallow } from "enzyme";
import Messages from "../components/Messages";
import toJson from "enzyme-to-json";

it("should render message text", () => {
  const wrapper = shallow(<Messages message="my message"></Messages>);
  expect(wrapper.text()).toBe("my message");
});

it("should be invisible if has an empty message", () => {
  const wrapper = shallow(<Messages></Messages>);
  expect(wrapper.find("div").hasClass("invisible")).toBe(true);
});

it("should fire dismiss function on clicking", () => {
  const dismiss = jest.fn();
  const wrapper = shallow(<Messages dismiss={dismiss}></Messages>);
  wrapper.simulate("click");
  expect(dismiss).toHaveBeenCalledTimes(1);
});

it("should have a default class of i if not specified", () => {
  const wrapper = shallow(<Messages message="my message"></Messages>);
  expect(wrapper.find("p").hasClass("message-type-i")).toBe(true);
});

it("should have a class of depending on message tag set before #", () => {
  const wrapper = shallow(<Messages message="w#I warn you!"></Messages>);
  expect(wrapper.find("p").hasClass("message-type-w")).toBe(true);
});
