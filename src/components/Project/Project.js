import React, { Component } from "react";
import ProjectControls from "./ProjectControls/ProjectControls";
import styled from "styled-components";
import TasksContainer from "../Tasks/TasksContainer/tasksContainer";
import TasksList from "../Tasks/TasksList/tasksList";

const ProjectContainer = styled.div`
  &:hover {
    position: relative;
    border-radius: 3px;
    -webkit-box-shadow: 0px 0px 7px 3px rgb(0 0 0 / 75%);
    -moz-box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 3px 1px rgb(0 0 0 / 75%);
  }

  display: grid;
  background-color: ${(props) =>
    props.priority === "High"
      ? "red"
      : props.priority === "Medium"
      ? "orange"
      : "blue"};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  margin: 0 auto;
`;

const ProjectName = styled.span`
  grid-column: 1;
  grid-row: 1;
  display: inline;
  margin: 20px;
  ${ProjectContainer}:hover & {
    margin-top: 10px;
  }
`;

const ProjectDescription = styled.h6`
  display: inline;
  grid-column: 1;
  grid-row: 1;
  display: none;
  ${ProjectContainer}:hover & {
    display: block;
    margin-left: 20px;
  }
`;

const ProjectDueDate = styled.h3`
  display: inline;
  grid-column: 2;
  grid-row: 1;
  justify-self: center;
`;

const Label = styled.label`
  margin: auto;
`;

const Option = styled.option``;

const Select = styled.select`
  margin: 0 10px;
`;

const Task = styled.li``;

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      description: this.props.description,
      dueDate: this.props.dueDate,
      priority: this.props.priority,
      showTasks: false,
    };
  }

  showTasksHandler = () => {
    this.setState({
      showTasks: !this.state.showTasks,
    });
  };

  render() {
    return (
      <React.Fragment>
        <ProjectContainer priority={this.state.priority}>
          <ProjectName>{this.props.name}</ProjectName>
          <ProjectDescription>{this.props.description}</ProjectDescription>
          <ProjectDueDate>{this.props.dueDate}</ProjectDueDate>
          <ProjectControls showTasks={() => this.showTasksHandler()} />
        </ProjectContainer>
        <TasksContainer
          tasks={this.props.tasks}
          showTasks={this.state.showTasks}
        ></TasksContainer>
      </React.Fragment>
    );
  }
}

export default Project;
