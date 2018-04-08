import React from "react";
import styled from "styled-components";
import StyledLabel from "./StyledLabel";
import { InlineError } from "./StyledElements";

const StyledRadio= styled.div`
  border: solid 1px ${({ checked }) => (checked ? "#006699" : "#CCC")};
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 50%;
  display: inline-block;
  &:before {
    content: "✔";
    position: relative;
    top: 0px;
    left: 3px;
    color: ${({ checked }) => (checked ? "#006699" : "#FFF")};
  }
`;

const RadioVerticalField = ({
  label,
  id,
  error,
  options,
  value,
  onChange = () => {}
}) => (
  <div id={id}>
    <StyledLabel>{label}</StyledLabel>
    {options.map((item, index) => (
      <label
        data-testid={`radio-${index}`}
        key={item}
        style={{ display: "block", padding: 10, cursor: "pointer" }}
        onClick={() =>
          onChange({
            id,
            value: item
          })
        }
      >
        <StyledRadio checked={value === item}  />
        {item}
      </label>
    ))}
    {error && <InlineError>{error}</InlineError>}
  </div>
);

export default RadioVerticalField;
