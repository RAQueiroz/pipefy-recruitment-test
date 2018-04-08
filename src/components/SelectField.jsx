import React from "react";
import styled from "styled-components";
import StyledLabel from "./StyledLabel";
import {InlineError} from "./StyledElements";
import Colors from "../utils/Colors";

const StyledSelect = styled.select`
 border: solid 1px ${props => (props.error ? Colors.errorLight : "#ccc")};
  line-height: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #fff;
  padding-left: 10px;
`;

const SelectField = ({
  label,
  id,
  error,
  options,
  value = "",
  onChange = () => {}
}) => (
  <div>
    <StyledLabel>
      {label}
      <StyledSelect
        id={id}
        error={error}
        value={value}
        onChange={event => onChange({ id, value: event.target.value })}
      >
        <option value="">Select one</option>
        {options.map(item => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </StyledSelect>

    </StyledLabel>
      {error && <InlineError>{error}</InlineError>}
  </div>
);

export default SelectField;
