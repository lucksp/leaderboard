// react imports
import React, { Component } from "react";
import { Table, Container } from "reactstrap";
import PlayerInput from "./PlayerInput";

// redux/state imports
import { connect } from "react-redux";

const TableRow = props => {
  const { name, winnings, country, emoji } = { ...props.data };
  return (
    <tr>
      <th scope="row">{props.idx}</th>
      <td>{name}</td>
      <td>${winnings}</td>
      <td>
        <span className="table-data-emoji">{emoji}</span>
        {country}
      </td>
    </tr>
  );
};

class Board extends Component {
  state = {};

  render() {
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
                <th>#</th>
                <th>Name</th>
                <th>Winnings</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {this.props.playerData.map((item, i) => {
                return <TableRow data={item} idx={i + 1} key={i} />;
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    );
  }
}

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
