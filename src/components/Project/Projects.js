import React, { Component } from "react";
import Project from "../Project/Project";
import Tasks from "../Project/Tasks/Tasks";
import styled from "styled-components";
import AddProjectForm from "../Forms/addProjectForm";

const ProjectsContainer = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
`;

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      showTasks: false,
      projects: [
        {
          name: "React",
          description: "Learn React",
          dueDate: "2020-15-14",
          priority: "High",
          tasks: [
            { name: "Setup", completed: false },
            { name: "Implementation", completed: false },
          ],
        },
        {
          name: "Angular",
          description: "Learn Angular",
          dueDate: "2020-15-14",
          priority: "High",
          tasks: [
            { name: "Setup", completed: false },
            { name: "Implementation", completed: false },
          ],
        },
      ],
    };
  }

  showTasks = () => {
    this.setState({
      showTasks: !this.showTasks,
    });
  };

  addProjectHandler = (project) => {
    console.log(project);
    let currentProjects = [...this.state.projects];
    const { name, description, dueDate, priority } = project;
    currentProjects.push({
      name: name,
      description: description,
      dueDate: dueDate,
      priority: priority,
      tasks: [],
    });
    this.setState({
      projects: currentProjects,
    });
  };

  render() {
    return (
      <React.Fragment>
        <ProjectsContainer>
          <h3>Projects</h3>
          {this.state.projects.map((project) => {
            return (
              <React.Fragment>
                <Project
                  name={project.name}
                  description={project.description}
                  dueDate={project.dueDate}
                  priority={project.priority}
                  showTasksHandler={() => this.showTasks()}
                  tasks={project.tasks}
                />
              </React.Fragment>
            );
          })}
        </ProjectsContainer>
        <AddProjectForm addProject={this.addProjectHandler} />
      </React.Fragment>
    );
  }
}

export default Projects;
