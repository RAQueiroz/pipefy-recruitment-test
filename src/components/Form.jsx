import React from "react";
import { request } from "graphql-request";
import FormField from "./FormField";

const Debug = ({object})=> (  <pre>{JSON.stringify(object, null, 2)}</pre>);
class Form extends React.Component {
  state = {
    publicForm: {},
    filledFields: {},
    loading: true
  };

  componentDidMount() {
    const query = `{
              publicForm(formId: "1lf_E0x4") {
                publicFormSettings {
                  organizationName
                  submitButtonText
                  title
                }
            
                formFields {
                  ...on ShortTextField {
                    id
                    label
                  }
                  ...on LongTextField {
                    id
                    label
                  }
                  ...on SelectField {
                    id
                    label
                    options
                  }
                  ...on RadioVerticalField {
                    id
                    label
                    options
                  }
                  ...on ChecklistVerticalField {
                    id
                    label
                    options
                  }
                  ...on DateField {
                    id
                    label
                  }
                  __typename
                }
              }
            }`;
    request("https://app.pipefy.com/public_api", query, this.props)
      .then(data => {
        this.setState({
          ...data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error,
          loading: false
        });
      });
  }



    handleChange = field => {
        const { id, value } = field;

        this.setState(
            prevState => ({
                filledFields: {
                    ...prevState.filledFields,
                    [id]: value
                }
            })
        );
    };



  render() {
    const { publicForm, filledFields } = this.state;
    return (
      <div>

        {publicForm.formFields &&
          publicForm.formFields.map(item => (
            <FormField
              key={item.id}
              {...item}
              onChange={this.handleChange}
              value={filledFields[item.id]}
            />
          ))}

          <Debug object={this.state}></Debug>
      </div>
    );
  }
}

export default Form;
