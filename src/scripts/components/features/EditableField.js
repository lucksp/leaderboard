import React, { Component } from "react";
import { InputGroup, Input } from "reactstrap";
import { updateWinnings } from "../../redux/actions/common";

// redux/state imports
import { connect } from "react-redux";

class EditableField extends Component {
  editField = React.createRef();
  state = { value: null };

  componentDidMount() {
    this.editField.focus();
  }
  handleChange = e => {
    this.setState({ value: this.editField.value });
  };

  handleSave = e => {
    this.props.updateWinnings(this.state.value, this.props.userId);
    this.setState({ value: null }, () => {
      this.props.handleEditToggle(e, null);
    });
  };

  render() {
    return (
      <InputGroup className="edit-winning">
        <Input
          onKeyUp={e => {
            if (e.key === "Enter") {
              this.handleSave(e);
            } else if (e.key === "Escape") {
              this.props.handleEditToggle(e, this.props.userId);
            }
          }}
          onChange={this.handleChange}
          innerRef={input => (this.editField = input)}
          type="number"
          placeholder="Enter new value"
        />
      </InputGroup>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    updateWinnings: (data, id) => dispatch(updateWinnings(data, id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableField);
