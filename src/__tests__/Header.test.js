import React from "react";
import ReactDOM from "react-dom";
import Header from "../Components/Header/js/Header";
import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Header Component", () => {
  it("should show the Product link", () => {
    const link = shallow(<Header />);
    const element = link.find("NavLink");
    expect(element.text()).toBe(Products);
  });
});
