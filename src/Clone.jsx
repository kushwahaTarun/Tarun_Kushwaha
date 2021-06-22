import React, { useState } from "react";
import CloneHeader from "./CloneHeader";
import CloneNote from "./CloneNote";
import CloneDisp from "./CloneDisp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Clone = () => {
  let [newNote, setNewNote] = useState([]);

  let frwrdData = (data) => {
    setNewNote((preData) => {
      return [...preData, data];
    });
  };

  let delData = (id) => {
    setNewNote((preval) => {
      return preval.filter((values, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <CloneHeader />
      <CloneNote onSelect={frwrdData} />
      {newNote.map((values, index) => {
        return (
          <CloneDisp
            itemTitle={values.title}
            onSelect={delData}
            itemContent={values.content}
            key={index}
            id={index}
          />
        );
      })}
    </>
  );
};

export default Clone;
