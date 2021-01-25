import React, { Component } from "react";
import ProjectControls from "./ProjectControls/ProjectControls";
import styled from "styled-components";
import Tasks from "./Tasks/Tasks";
import TasksContainer from "./Tasks/TasksContainer";

const ProjectContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  background-color: red;
  margin: 0 auto;
`;

const ProjectName = styled.h3`
  grid-column: 1;
  grid-row: 1;
  display: inline;
  ${ProjectContainer}:hover & {
    top: 10px;
  }
`;

const ProjectDescription = styled.h6`
  display: inline;
  grid-column: 1;
  grid-row: 1;
  display: none;
  ${ProjectContainer}:hover & {
    display: visible;
  }
`;
const ProjectDueDate = styled.h3`
  display: inline;
  grid-column: 2;
  grid-row: 1;
`;

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
        <ProjectContainer>
          <ProjectName>{this.props.name}</ProjectName>
          <ProjectDescription>{this.props.description}</ProjectDescription>
          <ProjectDueDate>{this.props.dueDate}</ProjectDueDate>
          <ProjectControls showTasks={() => this.showTasksHandler()} />
        </ProjectContainer>
        <TasksContainer showTasks={this.state.showTasks}>
          <label>Priority</label>
          <select>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {this.props.tasks.map((task) => {
            return <Tasks name={task.name} status={task.status} />;
          })}
        </TasksContainer>
      </React.Fragment>
    );
  }
}

export default Project;
