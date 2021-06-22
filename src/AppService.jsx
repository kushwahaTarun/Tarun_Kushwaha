import React from "react";
import AppCards from "./AppCards";
import AppObj from "./AppObj";

const AppService = () => {
    return (
        <>
            <section className="container-fluid my-3">
                <h1 className="text-center display-5 "> Our Services</h1>
                <div className="row ">
                    <div className="col-md-10 col-10 mx-auto my-3">

                        <div className="row gy-3 gx-3">
                            {AppObj.map((values, index) => {
                                return <AppCards img={values.imgSrc} key={index} title={values.title} />
                            })}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default AppService;