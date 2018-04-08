import React from "react";
import LongTextField from "../LongTextField";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(" <LongTextField/>", () => {
  const onChangeSpy = jest.fn();

  const item = {
    id: "xpto",
    label: "Name",
    value: "Josh"
  };

  const wrapper = shallow(<LongTextField onChange={onChangeSpy} {...item} />);

  it("renders", () => {
    expect(wrapper.find(`#${item.id}`)).toHaveLength(1);
  });

  it("to match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("display label based on props", () => {
    expect(wrapper.containsMatchingElement(item.label)).toBeTruthy();
    wrapper.setProps({ label: "Surname" });
    expect(wrapper.containsMatchingElement("Surname")).toBeTruthy();
  });

  it("display value based on props", () => {
    expect(wrapper.find(`#${item.id}`).props().value).toEqual(item.value);
    wrapper.setProps({ value: "John" });
    expect(wrapper.find(`#${item.id}`).props().value).toEqual("John");
  });

  it("check if onChange works", () => {
    wrapper
      .find(`#${item.id}`)
      .simulate("change", { target: { value: "Hello" } });
    expect(onChangeSpy).toBeCalledWith({ id: "xpto", value: "Hello" });
  });
});
