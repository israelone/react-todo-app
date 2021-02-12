import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input``;

const Item = styled.li`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 0.25fr 3fr 1fr;
  height: 30px;
`;

const ConstrolsList = styled.ul`
  padding: 0;
  align-items: center;
  display: flex;
`;

const TaskName = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none ")};
`;

const Control = styled.li`
  cursor: pointer;
  margin: 0 auto;
`;

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: props.status,
    };
  }
  taskStatusToggle = () => {
    this.setState({
      completed: !this.state.completed,
    });
  };

  render() {
    return (
      <Item>
        <Input onChange={() => this.taskStatusToggle()} type="checkbox" />
        <TaskName completed={this.state.completed}>{this.props.name}</TaskName>
        <ConstrolsList>
          <Control className="far fa-edit"></Control>
          <Control className="far fa-trash-alt"></Control>
        </ConstrolsList>
      </Item>
    );
  }
}

export default Task;
