import React, { useState } from "react";
import ToDoApp1 from "./ToDoApp1";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const ToDoApp = () => {
  let [Data, newData] = useState("");
  let [storeData, newStoreData] = useState([]);
  const inputField = (event) => newData(event.target.value);

  const saveItem = () => {
    newStoreData((preValue) => {
      return [...preValue, Data];
    });
    newData("");
  };

  return (
    <>
      <div className="center_div">
        <h1>ToDoApp</h1>
        <br />
        <input
          type="text"
          title ="Add an Item"
          value={Data}
          onChange={inputField}
          placeholder="Add an Item"
        />

        <Button
          variant="contained"
          onClick={saveItem}
          title="Save Item"
          className="newBtn"
        >
          <AddIcon />
        </Button>

        {storeData.map((elem, index) => (
          <ToDoApp1 text={elem} />
        ))}
      </div>
    </>
  );
};
export default ToDoApp;
