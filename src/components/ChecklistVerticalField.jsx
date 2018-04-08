import React from "react";
import styled from "styled-components";
import StyledLabel from "./StyledLabel";
import { InlineError } from "./StyledElements";

const StyledCheckbox = styled.div`
  border: solid 1px ${({ checked }) => (checked ? "#006699" : "#CCC")};
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-right: 8px;
  display: inline-block;
  &:before {
    content: "✔";
    position: relative;
    top: 0px;
    left: 3px;
    color: ${({ checked }) => (checked ? "#006699" : "#FFF")};
  }
`;

class ChecklistVerticalField extends React.Component {
  onChange = item => {
    const { value = [], onChange, id } = this.props;

    let index = value.indexOf(item);
    let selected =
      index === -1 ? [...value, item] : value.filter(x => x !== item);

    onChange({ id, value: selected });
  };
  render() {
    const { label, id, error, options, value = [] } = this.props;
    return (
      <div id={id}>
        <StyledLabel>{label}</StyledLabel>
        {options.map((item, index) => (
          <label
            data-testid={`check-${index}`}
            key={item}
            style={{ display: "block", padding: 10 }}
            onClick={event => this.onChange(item)}
          >
            <StyledCheckbox checked={value.indexOf(item) !== -1}  />
            {item}
          </label>
        ))}
        {error && <InlineError>{error}</InlineError>}
      </div>
    );
  }
}

export default ChecklistVerticalField;
