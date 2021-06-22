import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from '@material-ui/icons/Delete';

const Form1 = () => {
  let [data, valueData] = useState("");
  let [showData, newShowData] = useState([]);
  let [line , newLine] = useState(false);

  const inputData = (event) => {
    valueData(event.target.value);
  };

  const sendData = () => {
    newShowData((preVal) => {
      return [...preVal, data];
    });
    valueData("");
  };

  const cutData = () => {
    newLine(true);
  }

  return (
    <>
      <div className="container">
        <div className="row w-50  mx-auto">
          <div className="col-md-12col-10">
            <label for="todoapp" class="col-sm-2 col-form-label mt-3">
              ToDo App
            </label>
            <input
              type="text"
              class="form-control"
              id="text"
              placeholder="Add an Item"
              autoComplete="off"
              onChange={inputData}
              value={data}
            />
            <button
              className="btn btn-outline-info ml-3 mt-3 "
              onClick={sendData}
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="container w-25 mx-auto mt-5">
        {showData.map((values, index) => {
          return (
            <li
              style={{
                width: "75%",
                marginTop: "15px",
                listStyleType: "none",
                fontSize: "25px",
                fontFamily: "century gothic",
                backgroundColor: "blueviolet",
                color: "white",
                textTransform: "capitalize",
                border: "0.6px solid transparent",
                padding: "8px 15px",
                borderRadius: "8px",
              }}
            >
             <DeleteIcon onClick = {cutData}/> <span style = {{textDecoration : line ? "line-through" : "none"}}>{values}</span>  
            </li>
          );
        })}
      </div>
      
    </>
  );
};

export default Form1;
