import React from "react";
import ChecklistVerticalField from "../ChecklistVerticalField";
import { render, Simulate, wait } from "react-testing-library";
// import "dom-testing-library/extend-expect";

describe(" <ChecklistVerticalField/>", () => {
  const item = {
    id: "xpto",
    label: "Name",
    value: "",
    options: ["A", "B", "C"]
  };

  const onChangeSpy = jest.fn();
  const { getByText, getByTestId, container, queryByText } = render(
    <ChecklistVerticalField onChange={onChangeSpy} {...item} />
  );

  it("renders", () => {
    const submitButton = queryByText("Name");
    expect(submitButton).toBeTruthy(); // it exist
  });

  it("render correct number of boxes", () => {
    item.options.forEach((item, index) => {
      expect(getByTestId(`check-${index}`)).toBeTruthy();
    });
  });

  it("match snapshot", () => {
    expect(container.firstChild).toMatchSnapshot();
  });

  it("on change to be called with the correct values", () => {
    Simulate.click(getByTestId(`check-1`));
    expect(onChangeSpy).toHaveBeenCalledWith({ id: "xpto", value: ["B"] });
  });
});
