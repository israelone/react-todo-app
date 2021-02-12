import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Option = styled.li`
  margin: 0 10px;
  cursor: pointer;
`;

const Remove = styled(Option)``;

const Edit = styled(Option)``;

const Expand = styled(Option)``;

const projectControls = (props) => {
  return (
    <ul>
      <Remove className="fas fa-trash"></Remove>
      <Edit onClick={props.editable} className="fas fa-edit"></Edit>
      <Expand
        showTasks={props.showTasks}
        onClick={() => props.showTasksToggle()}
        className="fas fa-angle-down"
      ></Expand>
    </ul>
  );
};

export default projectControls;
