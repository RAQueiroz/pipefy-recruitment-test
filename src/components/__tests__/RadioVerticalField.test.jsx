import React from "react";
import RadioVerticalField from "../RadioVerticalField";
import { render, Simulate, wait } from "react-testing-library";
// import "dom-testing-library/extend-expect";

describe(" <RadioVerticalField/>", () => {
  const item = {
    id: "xpto",
    label: "Name",
    value: "",
    options: ["A", "B", "C"]
  };

  const onChangeSpy = jest.fn();
  const { getByText, getByTestId, container, queryByText } = render(
    <RadioVerticalField onChange={onChangeSpy} {...item} />
  );

  it("renders", () => {
    const submitButton = queryByText("Name");
    expect(submitButton).toBeTruthy(); // it exist
  });

  it("render correct number of radios", () => {
    item.options.forEach((item, index) => {
      expect(getByTestId(`radio-${index}`)).toBeTruthy();
    });
  });

  it("match snapshot", () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  it("on change to be called with the correct value", () => {
    Simulate.click(getByTestId(`radio-1`));
    expect(onChangeSpy).toHaveBeenCalledWith({ id: "xpto", value: "B" });
  });
});
