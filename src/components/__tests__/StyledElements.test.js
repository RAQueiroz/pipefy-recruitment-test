import React from "react";
import {
  Button,
  Card,
  ErrorMessage,
  InlineError,
  Spacer,
  SuccessMessage
} from "../StyledElements";
import { render } from "react-testing-library";

describe("Test snapshots of styled elements", () => {
  const { container: buttonContainer } = render(<Button />);
  const { container: cardContainer } = render(<Card />);
  const { container: errorMessageContainer } = render(<ErrorMessage />);
  const { container: inlineErrorContainer } = render(<InlineError />);
  const { container: spacerContainer } = render(<Spacer />);
  const { container: successMessageContainer } = render(<SuccessMessage />);

  it("Button to match snapshot", () => {
    expect(buttonContainer.firstChild).toMatchSnapshot();
  });

  it("Card to match snapshot", () => {
    expect(cardContainer.firstChild).toMatchSnapshot();
  });

  it("ErrorMessage to match snapshot", () => {
    expect(errorMessageContainer.firstChild).toMatchSnapshot();
  });

  it("InlineError to match snapshot", () => {
    expect(inlineErrorContainer.firstChild).toMatchSnapshot();
  });

  it("Spacer to match snapshot", () => {
    expect(spacerContainer.firstChild).toMatchSnapshot();
  });

  it("SuccessMessage to match snapshot", () => {
    expect(successMessageContainer.firstChild).toMatchSnapshot();
  });
});
