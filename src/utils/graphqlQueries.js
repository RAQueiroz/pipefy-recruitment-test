const submitPublicFormMutation = `mutation submit($formId: ID!, $filledFields: [FilledField]! ){
        submitPublicForm(input: {         
          formId: $formId,
          filledFields: $filledFields
         }) {
         repoItem {
            id
            title
          }
        }
    }`;

const getPublicFormQuery = `query getForm($formId: ID!){
  publicForm(formId: $formId) {
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
        label,        
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
        label,description
      }
      __typename
    }
  }
}`;
export { submitPublicFormMutation, getPublicFormQuery };
