import React from "react";
import AppHome from "./AppHome";
import AppService from "./AppService";
import AppContact from "./AppContact";
import AppAbout from "./AppAbout";
import AppMenu from "./AppMenu";
import { Switch, Route } from "react-router-dom";

//internal CSS Stylesheet and bootstrap JS and CSS files

import "./AppStyle.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const App = () => {
    return (
        <>
            <AppMenu />
            <Switch>
                <Route exact path="/" component={AppHome} />
                <Route exact path="/service" component={AppService} />
                <Route exact path="/contact" component={AppContact} />
                <Route exact path="/about" component={AppAbout} />
            </Switch>
        </>
    );
}

export default App;