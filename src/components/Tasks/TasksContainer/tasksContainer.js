import React from "react";
import styled from "styled-components";
import Task from "../Task/task";

const Container = styled.div`
  display: ${(props) => (props.showTasks ? "grid" : "none")};

  background-color: #c7bbbb21;
  padding: 20px;
`;

const List = styled.ul`
  list-style-type: none;
`;

const TasksContainer = (props) => {
  console.log(props);
  return (
    <Container showTasks={props.showTasks}>
      <List>
        {props.tasks.map((task, index) => {
          return (
            <Task key={index} status={task.status} name={task.name}></Task>
          );
        })}
      </List>
    </Container>
  );
};

export default TasksContainer;
