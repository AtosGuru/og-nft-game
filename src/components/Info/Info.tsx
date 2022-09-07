import React from "react";
import { NavLink } from "react-router-dom";
import { ERoute } from "../../constants";

import "./Info.scss";

interface IInfoProps {
    id: string
}

export const Info: React.FC<IInfoProps> = ({ id }) => {
    return(
        <div className="info">
            <div className="info__menu">
                <NavLink 
                    className="info__menu-item info__summary" 
                    to={ERoute.SUMMARY.replace(":id", id)} 
                >
                    Summary
                </NavLink>

                <NavLink 
                    className="info__menu-item info__evolving" 
                    to={ERoute.EVOLVING.replace(":id", id)}
                >
                    Evolving
                </NavLink>

                <NavLink 
                    className="info__menu-item info__training" 
                    to={ERoute.TRAINING.replace(":id", id)}
                >
                    Training
                </NavLink>
            </div>
        </div>
    )
}