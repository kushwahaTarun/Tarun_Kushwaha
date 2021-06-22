import React from "react";
import people from "./images/people.png"
import AppCommon from "./AppCommon";

const AppHome = () => {
    return (
        <>
            <AppCommon
                name="Grow your Bussiness with "
                btnName="get Started"
                imgSrc={people}
                visit="/service"
            />
        </>
    );
}

export default AppHome;