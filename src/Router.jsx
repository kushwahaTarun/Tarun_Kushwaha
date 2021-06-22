import React from "react";
import { Switch, Route } from "react-router-dom";
import RouterContact from "./RouterContact";
import RouterName from "./RouterName";
import RouterHome from "./RouterHome";
import RouterService from "./RouterService";
import  Menu  from "./Menu";

const Router = () => {
    return (
        <>
        <Menu/>
            <Switch>
                <Route exact path="/home" component={RouterHome} />
                <Route exact path="/name/:name" component={RouterName} />
                <Route exact path="/service" component={RouterService} />
                <Route exact path="/contact" component={RouterContact} />
                <Route component={Error} />
            </Switch>

        </>
    );
}

export default Router;