import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const CloneDisp = (props) => {
  let updateData = () => {
    props.onSelect(props.id);
  };

  return (
    <>
      <div className="cloneDisp">
        <div className="container bg-light mt-1">
          <h4 className="text-primary text-capitalize">{props.itemTitle}</h4>
          <p className="text-secondary text-capitalize">{props.itemContent}</p>
          <button className="btn btn-danger" onClick={updateData}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CloneDisp;
