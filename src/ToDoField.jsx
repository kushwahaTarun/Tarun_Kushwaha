import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const ToDoField = (props) => {
  return (
    <>
      <div className="center_div">
        <h1>ToDo List</h1>
        <TextField
          value={props.value}
          id="outlined-basic"
          label="Your Item"
          placeholder="Add a Item"
          variant="outlined"
          onChange={props.onChange}
        />
        <br />
        <br />
        <Tooltip disableFocusListener title="Save Item">
          <Button
            className="btn1"
            onClick={props.onClick}
            variant="contained"
            color="secondary"
          >
            Save
          </Button>
        </Tooltip>
      </div>
      <br />
      <br />
    </>
  );
};

export default ToDoField;
