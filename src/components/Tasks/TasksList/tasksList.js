import React from "react";
import styled from "styled-components";
import Task from "../Task/task";

const List = styled.ul`
  list-style-type: none;
`;

const TasksList = (props) => {
  console.log(props);
  return <List></List>;
};

export default TasksList;
