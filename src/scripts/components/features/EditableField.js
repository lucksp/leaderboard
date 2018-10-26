import React, { Component } from "react";
import { InputGroup, Input } from "reactstrap";
import { updateWinnings } from "../../redux/actions/common";

import check from "../../../../public/assets/img/icon-check.png";
import edit from "../../../../public/assets/img/icon-edit.png";
import cancel from "../../../../public/assets/img/icon-cancel.png";

// redux/state imports
import { connect } from "react-redux";

class EditableField extends Component {
  editField = React.createRef();
  state = { value: null, isEditing: false };

  componentDidMount() {
    if (this.props.originalValue) {
      this.setState({ value: this.props.originalValue });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isEditing) {
      this.editField.current.focus();
    }
  }

  toggleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing, value: "" });
  };

  handleChange = e => {
    e.preventDefault();

    let tempValue = this.editField.current.innerHTML;
    //check for only numbers
    if (tempValue !== "-" && !tempValue.match(/^[\-\+]?\d+$/)) {
      // TODO - return better error message
      return this.toggleEditing();
    }
    if (e.key === "Enter") {
      this.handleSave(e);
    } else if (e.key === "Escape" || e.type === "blur") {
      this.toggleEditing();
      tempValue = this.props.originalValue;
    }

    this.setState({ value: tempValue });
  };

  shouldComponentUpdate(nextProps, nextState) {
    // to prevent edit cursor from going to beginning
    if (nextState.value == this.editField.current.innerHTML) {
      return false;
    }
    return true;
  }

  handleSave = e => {
    if (this.state.value === "") return this.toggleEditing();
    this.props.updateWinnings(this.state.value, this.props.userId);
    this.toggleEditing();
  };

  render() {
    return (
      <React.Fragment>
        <span
          ref={this.editField}
          className="edit-winning"
          suppressContentEditableWarning={true}
          contentEditable={this.state.isEditing}
          onInput={this.handleChange}
          onKeyDown={e => {
            if (e.key === "Enter") {
              this.handleSave(e);
              return;
            }
          }}
          onBlur={this.handleChange}
        >
          {this.state.isEditing ? this.state.value : this.props.originalValue}
        </span>

        {this.state.isEditing ? (
          <div className="edit-toolbar">
            <div className="winnings-edit-icon check">
              <img
                src={check}
                onClick={e => {
                  this.toggleEditing(e, this.props.userId);
                }}
              />
            </div>
            <div className="winnings-edit-icon cancel">
              <img
                src={cancel}
                onClick={e => {
                  this.toggleEditing(e, this.props.userId);
                }}
              />
            </div>
          </div>
        ) : (
          <div className="winnings-edit-icon edit">
            <img
              src={edit}
              onClick={e => {
                this.toggleEditing(e, this.props.userId);
              }}
            />
          </div>
        )}
      </React.Fragment>
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
