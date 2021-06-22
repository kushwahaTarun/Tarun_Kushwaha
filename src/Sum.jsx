import React from "react";
import {Calculate , GetSub , GetMultiply, getDivide} from "./Calculate";

function Sum() {
  return (
    <>
      <h2>Sum of Two number is {Calculate(23, 45)}</h2>
      <h2>Subtraction of Two number is {GetSub(45, 134)}</h2>
      <h2>Multiplication of Two number is {GetMultiply(98, 10)}</h2>
      <h2>Division of Two number is {getDivide(4, 2)}</h2>
    </>
  );
}

export default Sum;