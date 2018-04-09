import React from "react";
import { request } from "graphql-request";
const graphqlUrl = "https://app.pipefy.com/public_api";

const withQuery = query => Component => {
  return class WithQuery extends React.Component {
    state = {
      error: null,
      loading: true
    };

    componentDidMount() {
      request(graphqlUrl, query, this.props)
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
    render() {
      return <Component {...this.state} {...this.props} />;
    }
  };
};

const executeQuery = (query, variables) =>
  request(graphqlUrl, query, variables);

export { withQuery, executeQuery };
