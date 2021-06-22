import React from "react";
import { NavLink } from "react-router-dom";

const AppCommon = (props) => {
    return (
        <>
            <section id="header" className=" d-flex ">

                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-10 mx-auto "  >
                            <div className="row align-items-center">
                                <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 order-2 ">
                                    <h1 className="my-3 text-capitalize">{props.name}<strong className="text-info strongtxt">Tarun Kushwaha</strong></h1>
                                    <h5>We are the team of talented developers making website</h5>

                                    <div>
                                        <NavLink to={props.visit} className="btn-get-started text-capitalize btn_start">{props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 order-lg-2 order-1 pt-lg-5" >
                                    <img src={props.imgSrc} className="img-fluid people_img " alt="Random Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AppCommon;