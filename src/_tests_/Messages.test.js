import React from "react";
import { shallow } from "enzyme"
import Messages from "../Messages"




it("renders text",()=>{
    const wrapper=shallow(<Messages message="my message"></Messages>)
    expect(wrapper.text()).toBe("my message")
})