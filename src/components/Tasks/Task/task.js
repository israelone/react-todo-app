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

const TaskName = styled.span``;

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
  render() {
    return (
      <Item>
        <Input type="checkbox" checked={this.props.status ? false : true} />
        <TaskName>{this.props.name}</TaskName>
        <ConstrolsList>
          <Control className="far fa-edit"></Control>
          <Control className="far fa-trash-alt"></Control>
        </ConstrolsList>
      </Item>
    );
  }
}

export default Task;
