// react imports
import React, { Component } from "react";
import { Table } from "reactstrap";

// redux/state imports
import { connect } from "react-redux";

class Board extends Component {
  state = {};

  render() {
    if (!this.props.playerData.length) {
      return <div>Add a Player</div>;
    }
    return (
      <div className="leaderboard">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody />
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playerData: state.common
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
