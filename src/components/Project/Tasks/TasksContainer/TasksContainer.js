import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: ${(props) => (props.showTasks ? "grid" : "none")};
  background-color: #c7bbbb21;
  padding: 20px;
  font-family: var(--projectFont); ;
`;

const Label = styled.label`
  margin: auto;
`;
const Select = styled.select`
  margin: 0 10px;
`;

const TasksContainer = (props) => {
  return (
    <Container showTasks={props.showTasks}>
      <Label></Label>
    </Container>
  );
};
export default TasksContainer;
