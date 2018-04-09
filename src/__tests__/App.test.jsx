import React from "react";
import App from "../App";
import { render, wait } from "react-testing-library";

it("renders the whole app without crashing", async () => {
  const { getByText } = render(<App />);
  await wait(() => getByText("Pipefy Recruitment Test"));
  expect(getByText("Pipefy Recruitment Test")).toBeTruthy();
});
