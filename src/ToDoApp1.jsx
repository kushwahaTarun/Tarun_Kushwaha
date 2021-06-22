import React, { useState } from "react";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

const ToDoApp1 = (props) => {
  let [line, newLine] = useState(false);
  let delData = () => newLine(true);

  return (
    <>
      <br />
      <br />
      <span className="listDeco">
        <HighlightOffRoundedIcon className="delIcon" onClick={delData} />
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </span>
    </>
  );
};

export default ToDoApp1;
