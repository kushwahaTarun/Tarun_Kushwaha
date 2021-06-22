import React, { useState } from "react";

const CloneNote = (props) => {
  let [data, setData] = useState({
    title: "",
    content: "",
  });

  //onchange Function

  const inputData = (event) => {
    let { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const submitData = () => {
    props.onSelect(data);
    setData({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <section>
        <div className="container w-50 Note pb-5 mt-4">
          <div className="row">
            <div className="col-md-8 col-12 mx-auto mt-5">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Title"
                title="Enter Title"
                value={data.title}
                onChange={inputData}
                name="title"
              />
              <textarea
                className="form-control mt-1"
                id="exampleFormControlTextarea1"
                rows=""
                column=""
                placeholder="Save Your Note..."
                title="Save Your Note."
                value={data.content}
                onChange={inputData}
                name="content"
              ></textarea>
              <button
                onClick={submitData}
                className="btn btn-outline-success mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-down-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                  />
                </svg> Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloneNote;
