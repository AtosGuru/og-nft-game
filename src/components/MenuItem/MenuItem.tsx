import React from "react";
import { NavLink } from "react-router-dom";
import { ERoute } from "../../constants";

import "./MenuItem.scss";

interface IMenuItemProps {
    label: string;
    route: ERoute | string
}

export const MenuItem: React.FC<IMenuItemProps> = ({ label, route }) => {
    return (
        <>
            <NavLink className="menu-item" to={route}>
                <div className="menu-item__point"></div>
                <div className="menu-item__title">{label}</div>
            </NavLink>
        </>
    )
}