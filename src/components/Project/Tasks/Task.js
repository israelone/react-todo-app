import React, { Component } from "react";
import TaskControls from "../Tasks/TasksControls/TaskControls";

class task extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: this.props.name,
    read: false,
    editable: false,
  };

  changeHandler = () => {
    const read = !this.state.read;
    this.setState({
      read: read,
    });
  };

  nameUpdateHandler = (name) => {
    const newName = name;
    this.setState({
      name: newName,
    });
  };

  makeTaskEditable = () => {
    const editable = !this.state.editable;
    this.setState({
      editable: editable,
    });
  };
  render() {
    return (
      <React.Fragment>
        <input type={"checkbox"} onChange={this.changeHandler} />
        <p
          key={this.props.id}
          onChange={this.nameUpdateHandler}
          contentEditable={this.state.editable}
          style={this.state.read ? { textDecoration: "line-through" } : null}
        >
          {this.state.name}
        </p>
      </React.Fragment>
    );
  }
}

export default task;
