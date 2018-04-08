import React from "react";
import SelectField from "../SelectField";
import { render, Simulate, wait } from "react-testing-library";

describe(" <SelectField/>", () => {
  const item = {
    id: "xpto",
    label: "Name",
    value: "",
    options: ["A", "B", "C"]
  };

  const onChangeSpy = jest.fn();
  const { getByTestId, container } = render(
    <SelectField onChange={onChangeSpy} {...item} />
  );

  it("renders", () => {
    expect(container.querySelector("select")).toBeTruthy();
  });
  //
  it("to match snapshot", () => {
    expect(container.firstChild).toMatchSnapshot();
  });
  //

  it("render correct number of radios", () => {
    // 4 - (3 items and 1 empty one)
    expect(container.querySelector("select>option:nth-child(4)")).toBeTruthy();
  });

    it("on change to be called", () => {
        Simulate.change(container.querySelector('select'));
        expect(onChangeSpy).toHaveBeenCalled();
    });
});
