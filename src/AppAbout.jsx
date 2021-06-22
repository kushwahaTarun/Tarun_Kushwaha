import React from "react";
import about from "./images/about.jpg";
import AppCommon from "./AppCommon";

const AppAbout = () => {
    return (
        <>
            <AppCommon
                name="Welcome to about page "
                btnName="contact now"
                imgSrc={about}
                visit="/contact"
            />
        </>
    );
}

export default AppAbout;