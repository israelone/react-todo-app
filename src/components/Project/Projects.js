import React, { Component } from "react";
import Project from "../Project/Project";
import styled from "styled-components";
import AddProjectForm from "../Forms/addProjectForm";

const ProjectsContainer = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  font-family: "Quicksand", sans-serif;
`;

const Button = styled.button`
  z-index: 1;
  width: 27px;
  height: 27px;
  border-radius: 100%;
  position: absolute;
  border: none;
  bottom: -18px;
  right: 20px;
  -webkit-box-shadow: 3px 5px 9px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 5px 9px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 5px 9px 1px rgba(0, 0, 0, 0.75);

  background-color: white;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
`;

const Header = styled.h3`
  letter-spacing: 4px;
  color: black;
  text-align: center;
  margin: auto;
  font-family: var(--headerFont);
  margin: 10px;
`;

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      showAddProjectForm: false,
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
          priority: "Low",
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

  showAddProjectForm = () => {
    this.setState({
      showAddProjectForm: !this.state.showAddProjectForm,
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
          <Header>Projects</Header>
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
        <AddProjectForm
          toggleForm={this.showAddProjectForm}
          addProject={this.addProjectHandler}
          showForm={this.state.showAddProjectForm}
        />
        <Button onClick={this.showAddProjectForm}>+</Button>
      </React.Fragment>
    );
  }
}

export default Projects;
