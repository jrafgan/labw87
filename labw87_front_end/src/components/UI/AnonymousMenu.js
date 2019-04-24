import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";

const AnonymousMenu = () => (
    <div className="anonymous_menu">
        <div>
            <NavLink to="/register" exact>Sign Up</NavLink>
        </div>

        <div>
            <NavLink to="/login" exact>Login</NavLink>
        </div>
    </div>
);

export default AnonymousMenu;