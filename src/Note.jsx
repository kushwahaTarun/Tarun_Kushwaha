import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
  return (
    <>
      <div className="note">
        <div className = "section">
          <h4>{props.itemTitle}</h4>
          <p>{props.itemContent}</p>
          <button className = "btn" onClick = {() => {
              props.onSelect(props.id)
          }} ><DeleteOutlineIcon/ ></button>
        </div>
      </div>
    </>
  );
};

export default Note;
