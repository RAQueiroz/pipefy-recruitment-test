import React from "react";
import styled from "styled-components";
import StyledLabel from "./StyledLabel";
import Colors from "../utils/Colors";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  border: solid 1px ${props => (props.error ? Colors.errorLight : "#ccc")};
  line-height: 40px;
  padding-left: 10px;
  border-radius: 5px;
`;

const ShortTextField = ({
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
        error={error}
        value={value}
        onChange={({ target }) => onChange({ id, value: target.value })}
        type="text"
        id={id}
      />
    </StyledLabel>
  </div>
);

ShortTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
export default ShortTextField;
