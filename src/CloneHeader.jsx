import React from "react";
import custom from "./images/custom.jpg";

const CloneHeader = () => {
  return (
    <>
      <header>
        <div className="container-fluid bg-dark py-3 header">
          <img
            src={custom}
            style={{ borderRadius: "5px" }}
            alt="logo"
            width="100"
            height="80"
          />
          <h1 className="text-capitalize text-info display-5 ">
            Tarun kushwaha
          </h1>
        </div>
      </header>
    </>
  );
};

export default CloneHeader;
