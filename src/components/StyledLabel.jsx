import styled from "styled-components";

const StyledLabel = styled.label`
  display: ${props => (props.inline ? "block" : "grid")};
  font-weight: 600;
  line-height: 40px;
  color: #333;
  padding: 10px;
`;

export default StyledLabel;
