import React from "react";
import { ErrorMessage } from "./StyledElements";

const ErrorStack = ({ errors }) =>
  !errors ? null : (
    <div>
      {errors.map(error => <ErrorMessage>{error.message}</ErrorMessage>)}
    </div>
  );

export default ErrorStack;
