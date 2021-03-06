// react imports
import React from "react";
import { Table, Container } from "reactstrap";
import PlayerInput from "./PlayerInput";
import TableRow from "./TableRow";

// redux/state imports
import { connect } from "react-redux";

const Board = props => {
  return (
    <Container id="board">
      <div className="leaderboard">
        <Table striped>
          <thead>
            <tr>
              <td colSpan="4" className="table-header-add">
                <div id="board-new">Add a new Player</div>
                <PlayerInput />
              </td>
            </tr>
            <tr />
            <tr>
              <th xs="1">#</th>
              <th xs="4">Name</th>
              <th xs="4">Winnings</th>
              <th xs="3">Country</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.playerData).map((item, i) => {
              return (
                <TableRow data={props.playerData[item]} idx={i + 1} key={i} />
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    playerData: state.common.playerData
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
