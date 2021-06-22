import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ForwardSharpIcon from "@material-ui/icons/ForwardSharp";

const KeepNote = (props) => {
  let [data, setData] = useState({
    title: "",
    content: "",
  });

  const fillData = (event) => {
    let { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
   
  };

  const submitData = () => {
    props.pop(data);
  }

  return (
    <>
      <div className="container w-50 mx-auto py-5">
        <div className="row">
          <div className="col-md-10 col-12">
            <input
              type="text"
              placeholder="Title"
              className="form-control"
              value={data.title}
              name="title"
              onChange={fillData}
            />
            <textarea
              placeholder="Keep a Note.."
              className="form-control mt-1"
              rows=""
              column=""
              value={data.content}
              name= "content"
              onChange={fillData}
            />
            <button className="btn btn-outline-info mt-1 kNoteBtn" onClick = {submitData}>
              Save a Note <ForwardSharpIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeepNote;
