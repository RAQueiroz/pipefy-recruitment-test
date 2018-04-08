import React from "react";
import ShortTextField from "./ShortTextField";

class FormField extends React.Component {
  render() {
    switch (this.props.__typename) {
      case "ShortTextField":
        return <ShortTextField {...this.props} />;
      default:
        return null;
    }
  }
}
export default FormField;
