import React from "react";
import { useState } from "react";

const RouterService = () => {
    const [data, setData] = useState("");
    const [img, newImg] = useState("");

    const inputField = (event) => {
        const updatedData = event.target.value;
        setData(updatedData);
        newImg(updatedData);
    }


    return (
        <>
            <h1 className="text-capitalize text-primary text-center mt-4">Search For Our services and items</h1><br />
            <div className="container w-50 text-center serviceSearch">

                <div className="row">
                    <div className="col-12">
                        <input type="text" onChange={inputField} value={data} placeholder="Search Anything..." />
                    </div><br />

                    {/* getting images through API */}

                    <div className="col-12 my-4">
                        <figure>
                            {(img === "") ? null : <img className="img-fluid newImg mt-4" src={`https://source.unsplash.com/500x350/?${img}`} alt="display image" />}
                        </figure>
                    </div>

                </div>
            </div>
            

        </>
    );
}

export default RouterService;