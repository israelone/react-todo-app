import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
`;

const TasksList = (props) => {
  console.log(props);
  return <List></List>;
};

export default TasksList;
