import React from "react";
import styled from "styled-components";

const Option = styled.li`
  margin: 0 10px;
  cursor: pointer;
`;
const projectControls = (props) => {
  return (
    <ul>
      <Option className="fas fa-trash"></Option>
      <Option onClick={props.editable} className="fas fa-edit"></Option>
      <Option
        onClick={() => props.showTasks()}
        className="fas fa-angle-down"
      ></Option>
    </ul>
  );
};

export default projectControls;
