import React from "react";
import styled from "styled-components";

const TasksContainer = styled.div`
  display: ${(props) => (props.showTasks ? "grid" : "none")};
`;

export default TasksContainer;
