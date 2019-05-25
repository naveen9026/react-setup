import React, { Component } from "react";
import getTitle from "../redux/actions/getTitle";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.getTitle();
  }
  render() {
    return (
      <div>
        <h1>React App!</h1>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.title
  };
}

function mapDisptachToProps(dispatch) {
  return {
    actions: {
      getTitle: bindActionCreators(getTitle, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(App);
