import React from "react";

function Calculate(num1, num2) {
  return num1 + num2;
}

function GetSub(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

function GetMultiply(num1, num2) {
  return num1 * num2;
}

function getDivide(num1, num2) {
  if (num1 > num2) {
    return num1 % num2;
  } else {
    return num2 % num1;
  }
}

export {Calculate , GetSub , GetMultiply, getDivide};