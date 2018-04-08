import React from "react";
import styled from "styled-components";
import StyledLabel from "./StyledLabel";
import Colors from '../utils/Colors'
import {InlineError} from "./StyledElements";
const StyledInput = styled.input`
  border: solid 1px ${props => (props.error ? Colors.errorLight : "#ccc")};
  border-radius: 5px;
  line-height: 40px;
  padding-left: 10px;
`;


const DateField = ({ label, id, error, value = "", onChange = () => {} }) => (
  <div>
    <StyledLabel>
      {label}
      <StyledInput
        error={error}
        value={value}
        type="date"
        id={id}
        onChange={event => onChange({ id, value: event.target.value })}
      />

    </StyledLabel>
      {error && <InlineError>{error}</InlineError>}
  </div>
);

export default DateField;
