import styled from "styled-components";
import Colors from "../utils/Colors";

const Button = styled.button`
  background-color: ${Colors.primary};
  height: 40px;
  color: white;
  border: none;
  padding: 0px 35px 0px 35px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
`;

const Card = styled.div`
  border: solid 1px #ccc;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px;
`;

const ErrorMessage = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  color: ${Colors.errorDark};
  background-color: ${Colors.errorLight};
  border: 1px solid ${Colors.errorLight};
`;


const SuccessMessage = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  color: ${Colors.successDark};
  background-color: ${Colors.successLight};
  border: 1px solid ${Colors.successLight};
`;

const InlineError = styled.div`
  color: ${Colors.errorLight};
  font-size: 14px;
  padding-left: 10px;
`;

const Spacer = styled.div`
  width: 100%;
  height: ${props=>  props.lg ? '24px': props.md ? '12px' : '6px'};
`;

export {
    Button,
    Card,
    ErrorMessage,
    SuccessMessage,
    InlineError,
    Spacer
}