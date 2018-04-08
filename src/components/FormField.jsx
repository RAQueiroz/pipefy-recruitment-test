import React from "react";
import ShortTextField from "./ShortTextField";
import LongTextField from "./LongTextField";
import SelectField from "./SelectField";
import RadioVerticalField from "./RadioVerticalField";
import ChecklistVerticalField from "./ChecklistVerticalField";
import DateField from "./DateField";

class FormField extends React.Component {
  render() {
    switch (this.props.__typename) {
      case "ShortTextField":
        return <ShortTextField {...this.props} />;
      case "LongTextField":
        return <LongTextField {...this.props} />;
      case "SelectField":
        return <SelectField {...this.props} />;
      case "RadioVerticalField":
        return <RadioVerticalField {...this.props} />;
      case "ChecklistVerticalField":
        return <ChecklistVerticalField {...this.props} />;
      case "DateField":
        return <DateField {...this.props} />;
      default:
        return null;
    }
  }
}
export default FormField;
