import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Row,
  Col,
  Button
} from "reactstrap";
import Dropper from "./Dropper";

// redux/state imports
import { connect } from "react-redux";
import { fetchCountries, addPlayer } from "../redux/actions/common";

class PlayerInput extends Component {
  form = React.createRef();
  state = {
    loading: true,
    playerData: {
      name: null,
      country: null,
      winnings: null
    }
  };

  componentDidMount() {
    this.props.fetchCountries("countries");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.loading && !this.props.loading) {
      this.setState({ loading: this.props.loading });
    }
  }

  getInputData = e => {
    let inputName = e.target.name;
    let value = e.target.value;
    this.setState(
      prevState => ((prevState.playerData[inputName] = value), prevState)
    );
  };

  handleClick = (e, name) => {
    e.preventDefault();

    this.setState(
      prevState => ((prevState.playerData.country = name), prevState)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPlayer(this.state.playerData, () => {
      this.form.current.reset();
      this.setState({
        playerData: {
          name: null,
          country: null,
          winnings: null
        }
      });
    });
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="player-input-group">
        <form id="form-add" ref={this.form}>
          <Row>
            <Col xs="4">
              <InputGroup>
                <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
                <Input
                  placeholder="name"
                  name="name"
                  onBlur={this.getInputData}
                />
              </InputGroup>
            </Col>
            <Col xs="4">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  $ Winnings
                </InputGroupAddon>
                <Input
                  placeholder="winnings"
                  name="winnings"
                  type="number"
                  onBlur={this.getInputData}
                />
              </InputGroup>
            </Col>
            <Col xs="2">
              <Dropper
                data={this.props.countries}
                className="dropdown-countries"
                handleClick={this.handleClick}
                defaultText={this.state.playerData.country}
                selected={this.state.playerData.country}
              />
            </Col>
            <Col xs="2">
              <Button
                color="primary"
                className="right"
                onClick={this.handleSubmit}
              >
                Add
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    countries: state.common.countries,
    loading: state.common.loading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchCountries: url => dispatch(fetchCountries(url)),
    addPlayer: (data, cb) => dispatch(addPlayer(data, cb))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);
