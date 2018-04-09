import React from "react";
import styled from "styled-components";
import FormField from "./FormField";
import {
  Button,
  Card,
  ErrorMessage,
  Spacer,
  SuccessMessage
} from "./StyledElements";
import { withQuery, executeQuery } from "../utils/graphqlHelpers";
import {
  getPublicFormQuery,
  submitPublicFormMutation
} from "../utils/graphqlQueries";
import validate from "validate.js";
import Loading from "./Loading";
import FormHeader from "./FormHeader";
import ErrorStack from "./ErrorStack";
import Debug from "../utils/Debug";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px 10px;
  grid-template-areas:
    " . . . . . "
    ".  left content content .";

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left "
      "content ";
  }
`;

const StyledLeftArea = styled.div`
  grid-area: left;
`;
const StyledContentArea = styled.div`
  grid-area: content;
`;

class Form extends React.Component {
  state = {
    publicForm: {},
    filledFields: {},
    formErrors: {},
    submitted: false,
    showDebug: false
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
        .catch(({ response }) => {
          debugger;
          if (response.errors) {
            this.setState({
              errors: response.errors,
              isSending: false
            });
          }
        });
    }
  };

  render() {
    const { publicForm, loading } = this.props;
    const {
      errors = [],
      filledFields,
      formErrors = {},
      successMessage,
      isSending,
      showDebug
    } = this.state;

    // If publicForm the query didn't found a valid form for the formId provided
    if (!loading && !publicForm) {
      return <ErrorMessage>The formId provided is invalid.</ErrorMessage>;
    }

    return loading ? (
      <Loading />
    ) : (
      <StyledContainer>
        <StyledLeftArea>
          <Card>
            <FormHeader publicFormSettings={publicForm.publicFormSettings} />

            {errors && <ErrorStack errors={errors} />}

            {successMessage && (
              <SuccessMessage>{successMessage}</SuccessMessage>
            )}
            {isSending && <Loading />}

            <Debug object={this.state} active={showDebug} />
          </Card>
        </StyledLeftArea>
        <StyledContentArea>
          <Card>
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

              <Spacer lg />
              <Button type="submit">Submit</Button>
            </form>
          </Card>
        </StyledContentArea>
      </StyledContainer>
    );
  }
}

export default withQuery(getPublicFormQuery)(Form);
