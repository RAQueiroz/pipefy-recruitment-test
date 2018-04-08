import React from "react";
import FormField from "./FormField";
import { Button, Card, SuccessMessage } from "./StyledElements";
import { withQuery, executeQuery } from "../utils/graphqlHelpers";
import {
  getPublicFormQuery,
  submitPublicFormMutation
} from "../utils/graphqlQueries";
import validate from "validate.js";
import Loading from "./Loading";
const Debug = ({ object }) => <pre>{JSON.stringify(object, null, 2)}</pre>;

class Form extends React.Component {
  state = {
    publicForm: {},
    filledFields: {},
    loading: true,
    formErrors: {},
    submitted: false
  };

  componentDidMount() {}

  isValid = () => {
    const constraints = {
      your_name: {
        presence: true
      },
      primary_skill: {
        presence: true
      },
      javascript_library_of_choice: {
        presence: true
      },
      additional_experience: {
        presence: true
      },
      start_date: {
        presence: true
      }
    };

    console.log(validate(this.state.filledFields, constraints));
    let formErrors = validate(this.state.filledFields, constraints);
    this.setState({ formErrors, submitted: true });

    return !formErrors;
  };

  handleChange = field => {
    const { id, value } = field;

    this.setState(
      prevState => ({
        filledFields: {
          ...prevState.filledFields,
          [id]: value
        }
      }),
      () => {
        // Clear the error from a field if its correct
        if (this.state.submitted) {
          this.isValid();
        }
      }
    );
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.isValid()) {
      this.setState({ isSending: true });

      // create an array with fieldId, fieldValue based on the filledFields
      let filledFields = Object.entries(this.state.filledFields).map(
        ([fieldId, fieldValue]) => ({ fieldId, fieldValue })
      );
      let variables = {
        formId: this.props.formId,
        filledFields
      };

      executeQuery(submitPublicFormMutation, variables)
        .then(data => {
          // Show the repoItem.id for feedback purposes
          const successMessage = `Your form was sent successfully under the identifier '${
            data.submitPublicForm.repoItem.id
          }'`;

          this.setState({
            successMessage,
            filledFields: {},
            isSending: false
          });
        })
        .catch(data => {});
    }
  };

  render() {
    const { publicForm, loading, errors } = this.props;
    const {
      filledFields,
      formErrors = {},
      successMessage,
      isSending
    } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <Card>
            <div>
              {successMessage && (
                <SuccessMessage>{successMessage}</SuccessMessage>
              )}
              {isSending && <Loading />}
            </div>
            <form onSubmit={this.onSubmit}>
              {publicForm.formFields &&
                publicForm.formFields.map(item => (
                  <FormField
                    key={item.id}
                    {...item}
                    error={formErrors[item.id]}
                    onChange={this.handleChange}
                    value={filledFields[item.id]}
                  />
                ))}

              <Button>Submit</Button>
            </form>
            <Debug object={this.state} />
          </Card>
        )}
      </div>
    );
  }
}

export default withQuery(getPublicFormQuery)(Form);
