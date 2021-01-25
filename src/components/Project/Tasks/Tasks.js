import React, { Component } from "react";
import Task from "../Tasks/Task";
import TaskControls from "./TasksControls/TaskControls";
import styled from "styled-components";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks,
      show: this.props.show,
    };
  }

  deleteTaskHandler = (i) => {
    let updatedTasksList = [...this.state.tasks];
    // updatedTasksList.splice(i - 1, 1);
    console.log(updatedTasksList);
    this.setState({
      tasks: updatedTasksList,
    });
    console.log(this.state.tasks);
  };

  render() {
    return (
      <React.Fragment>
        <Task name={this.props.name} />
        <TaskControls />
      </React.Fragment>
    );
  }
}

export default Tasks;
