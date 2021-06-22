import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

let ToDoList1 = (props) => {
  return (
    <>
      <div className="addDiv">
        <HighlightOffIcon
          onClick={() => {
            props.onSelect(props.id);
          }}
          className="addBtn"
        />
        <li className="addList">{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList1;
