import React from "react";
import { useState } from "react";

const AppContact = () => {

    const [data, setData] = useState({                           //use State Hook for updating the values of the input field
        fname: "",
        num: "",
        email: "",
        feedback: ""
    })

    const inputEvent = (event) => {

        const { name, value } = event.target;
        setData((preValues) => {
            return {
                ...preValues,
                [name]: value,
            };
        })
    };

    const frwrdData = (event) => {
        event.preventDefault();
        alert(`Your name is ${data.fname}, your contact number is ${data.num}, your mail is ${data.email} and you are ${data.feedback}`);
    }


    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center text-capitalize display-5 my-3">Contact Us</h1>
                <div className="row">

                    <div className="col-md-6 col-10 mx-auto my-5">
                        <form onSubmit={frwrdData}>

                            <div className="form-group">
                                <label for="exampleInputEmail1">Full Name</label>
                                <input type="text"
                                    className="form-control mt-2"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="fname"
                                    value={data.fname}
                                    onChange={inputEvent}
                                    required
                                    placeholder="Enter Your Name" />

                                <label for="exampleInputEmail1" className="mt-2">Contact</label>
                                <input type="number"
                                    className="form-control mt-2"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="num"
                                    value={data.num}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Mobile" />

                                <label for="exampleInputEmail1" className="mt-2">Email address</label>
                                <input type="email"
                                    className="form-control mt-2"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    required
                                    placeholder="Enter Your E-mail" />
                                <small id="emailHelp" className="form-text text-muted ">We'll never share your email with anyone else.</small><br />
                            </div>

                            <div className="form-group">
                                <label for="exampleInputPassword1" className="mt-2">Feedback</label><br />
                                <textarea rows=""
                                    cols=""
                                    className="form-control"
                                    type="text"
                                    name="feedback"
                                    value={data.feedback}
                                    onChange={inputEvent}
                                    placeholder="Your Feedback"></textarea>
                            </div>
                            <div className="form-group form-check mt-2">
                                <input type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-outline-info mt-2">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AppContact;