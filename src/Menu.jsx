import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className = "menu bg-dark">
                <NavLink className = "linkStyle" exact activeClassName="styleMenu" to="/home">Home</NavLink>
                <NavLink className = "linkStyle" exact activeClassName="styleMenu" to="/name/Arav">User</NavLink>
                <NavLink className = "linkStyle" exact activeClassName="styleMenu" to="/service">Service</NavLink>
                <NavLink className = "linkStyle" exact activeClassName="styleMenu" to="/contact">Contact</NavLink>
            </div>
        </>
    );
}

export default Menu;