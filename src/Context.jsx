//changing the title of the title bar using useEffect;

//useEffect is the hook which automatically get when render method is updated , pagereloaded etc.
//useEffect only accepts function as an argument

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Context = () => {
  let [num, newNum] = useState(0);
  useEffect(() => {
    document.title = `This is the number ${num}`;
  })
  return (
    <>
      <button className="btn btn-outline-info my-5 mx-5" onClick={
        () => {
          newNum(num++);
        }
      }>Click me {num}</button>
    </>
  );
}

export default Context;