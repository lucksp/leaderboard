import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Row,
  Col,
  Dropdown
} from "reactstrap";
import Dropper from "./Dropper";

// redux/state imports
import { connect } from "react-redux";
import { fetchCountries } from "../redux/actions/common";

class PlayerInput extends Component {
  state = {
    loading: true,
    playerData: {}
  };

  componentDidMount() {
    this.props.fetchCountries("countries");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.loading && !this.props.loading) {
      this.setState({ loading: this.props.loading });
    }
  }

  handleClick = (e, name) => {
    e.preventDefault();

    this.setState(
      prevState => ((prevState.playerData.country = name), prevState)
    );
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="input-group">
        <Row>
          <Col xs="4">
            <InputGroup>
              <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
              <Input placeholder="name" />
            </InputGroup>
          </Col>
          <Col xs="4">
            <InputGroup>
              <InputGroupAddon addonType="prepend">$ Winnings</InputGroupAddon>
              <Input placeholder="winnings" type="number" />
            </InputGroup>
          </Col>
          <Col xs="4">
            <Dropper
              data={this.props.countries}
              className="dropdown-countries"
              handleClick={this.handleClick}
              defaultText={this.state.playerData.country}
            />
          </Col>
        </Row>
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
    fetchCountries: url => dispatch(fetchCountries(url))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);
