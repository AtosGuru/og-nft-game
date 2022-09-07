import React, { useContext } from "react";
import "./Header.scss";
import logo from "../../images/olympus-logo.png";
import olympIcon from "../../images/coin.png";
import stoneIcon from "../../images/diamond.png";
import powderIcon from "../../images/drop.png";
import { Tooltip } from "antd";
import { UserContext } from "../../context/UserContext/UserContext";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
    const { createdUser } = useContext(UserContext)

    const smallScreen = window.matchMedia('(max-width: 640px)')

    return (
        <div className="header">
            <div className="header__points">
                <div className="header__items">
                    <Tooltip 
                        overlayClassName="header__items-tooltip"
                        title="$OlYMP"
                        trigger={smallScreen.matches ? "click" : "hover"}
                    >
                        <img className="header__icons" src={olympIcon} alt="game-icon" />
                    </Tooltip>
                    <div className="header__items-total">{createdUser.olymp}</div>
                </div>
                <div className="header__items">
                    <Tooltip 
                        overlayClassName="header__items-tooltip"
                        title="Evolving stone"
                        trigger={smallScreen.matches ? "click" : "hover"}
                    >
                        <img className="header__icons" src={stoneIcon} alt="game-icon" />
                    </Tooltip>
                    <div className="header__items-total">{createdUser.stones}</div>
                </div>
                <div className="header__items">
                    <Tooltip 
                        overlayClassName="header__items-tooltip"
                        title="Evolving powder"
                        trigger={smallScreen.matches ? "click" : "hover"}
                    >
                        <img className="header__icons" src={powderIcon} alt="game-icon" />
                    </Tooltip>
                    <div className="header__items-total">{createdUser.powder}</div>
                </div>
            </div>
            <div className="header__text header__items-total">0xf7ds...654e</div>
            <img className="header__logo" src={logo} alt="logo" /> 
        </div>
    )
}