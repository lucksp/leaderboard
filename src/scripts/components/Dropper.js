import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Dropper extends Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className={this.props.className}
      >
        <DropdownToggle caret>
          {this.props.defaultText ? this.props.defaultText : "Select"}
        </DropdownToggle>
        <DropdownMenu>
          {this.props.data.map((item, i) => {
            return (
              <DropdownItem
                key={i}
                onClick={e => this.props.handleClick(e, item.name)}
              >
                <span>{item.emoji}</span>
                {item.name}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Dropper;
