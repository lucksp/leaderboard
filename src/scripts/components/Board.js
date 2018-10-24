// react imports
import React, { Component } from "react";
import { Table, Container } from "reactstrap";
import PlayerInput from "./PlayerInput";

// redux/state imports
import { connect } from "react-redux";

class Board extends Component {
  state = {};

  render() {
    return (
      <Container id="board">
        {this.props.playerData.length ? (
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
        ) : (
          <div className="board-add">
            <div id="board-new">Add a new Player</div>
            <PlayerInput />
          </div>
        )}
      </Container>
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
