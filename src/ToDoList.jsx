import React, { useState } from "react";
import ToDoList1 from "./ToDoList1";
import ToDoField from "./ToDoField";

const ToDoList = () => {
  let [Data, newData] = useState("");
  let [printData, newprintData] = useState([]);
  const inputData = (event) => newData(event.target.value);

  const sendData = () => {
    newprintData((preVal) => {
      return [...preVal, Data];
    });
    newData("");
  };

  let deleteItem = (id) => {
    newprintData((values) => {
      return values.filter((dataValue, index) => {
        return index != id;
      });
    });
  };

  return (
    <>
      <ToDoField value={Data} onChange={inputData} onClick={sendData} />
      {printData.map((elem, index) => (
        <ToDoList1 text={elem} onSelect={deleteItem} id={index} key={index} />
      ))}
    </>
  );
};

export default ToDoList;
