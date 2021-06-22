import React, { useState } from "react";
import KeepHeader from "./KeepHeader";
import KeepNote from "./KeepNote";
import Note from "./Note";

const Keep = () => {

  let [storeNote , newStoreNote] = useState([]);

  let frwrdData = (data) => {
    newStoreNote((preData) => {
      return [...preData , data];
    })
    
  }

  const delData = (id) => {
    newStoreNote((preValues) => {
      return preValues.filter((values , index) => {
        return index != id
      })
    })
  }

  return (
    <>
      <KeepHeader/>
      <KeepNote pop = {frwrdData}/>
      {storeNote.map((values , index) => {
        return <Note itemTitle = {values.title}
        onSelect = {delData} itemContent = {values.content} id = {index} key = {index}/>
      })}
    </>
  );
}

export default Keep;