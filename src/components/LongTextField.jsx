import React from "react";
import styled from "styled-components";
import StyledLabel from "./StyledLabel";
import { InlineError } from "./StyledElements";
import Colors from "../utils/Colors";

const StyledInput = styled.textarea`
  border: solid 1px ${props => (props.error ? Colors.errorLight : "#ccc")};
  line-height: 40px;
  padding-left: 10px;
  border-radius: 5px;
`;

const LongTextField = ({
  label,
  id,
  error,
  value = "",
  onChange = () => {}
}) => (
  <div>
    <StyledLabel>
      {label}
      <StyledInput
        value={value}
        type="text"
        id={id}
        onChange={({ target }) => onChange({ id, value: target.value })}
      />

    </StyledLabel>
      {error && <InlineError>{error}</InlineError>}
  </div>
);

export default LongTextField;
