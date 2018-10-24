// React components
import React from "react";
import Home from "./Home";

// Redux/State
import { connect } from "react-redux";

const App = props => {
  return (
    <div>
      <Home />
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
