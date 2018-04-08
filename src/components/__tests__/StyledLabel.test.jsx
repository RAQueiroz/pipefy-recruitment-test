import React from "react";
import ShortTextField from "../ShortTextField";
import StyledLabel from "../StyledLabel";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(" <StyledLabel/>", () => {
  const label = shallow(<StyledLabel>Name</StyledLabel>);

  it("renders", () => {
    expect(label.containsMatchingElement("Name")).toBeTruthy();
  });

  it("to match snapshot", () => {
    expect(toJson(label)).toMatchSnapshot();
  });
});
