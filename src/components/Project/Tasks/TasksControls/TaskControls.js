import React from "react";

const taskControls = (props) => {
  return (
    <ul>
      <li onClick={props.delete} className="fas fa-trash"></li>
      <li onClick={props.editable} className="fas fa-edit"></li>
    </ul>
  );
};

export default taskControls;
