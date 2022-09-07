import React from "react";
import "./SideMenu.scss";
import { MenuItem } from "../MenuItem/MenuItem";
import { ERoute } from "../../constants";
import logo from "../../images/olympus-logo.png";
import setIcon from "../../images/set.svg";
import telegramIcon from "../../images/telegram.svg";
import twitterIcon from "../../images/twitter.svg";
import { BigButton } from "../BigButton/BigButton";

interface ISideMenuProps {}

export const SideMenu: React.FC<ISideMenuProps> = () => {
    return (
        <div className="side-menu">
            <img className="side-menu__logo" src={logo} alt="logo" />
            <div className="side-menu__line side-menu__line-top"></div>
            <div className="side-menu__items">
                <MenuItem label="home" route={ERoute.HOMEPAGE} />
                <MenuItem label="my characters" route={ERoute.CHARACTERS} />
                <MenuItem label="my chests" route={ERoute.CHESTS} />
                <MenuItem label="the foundry" route={ERoute.FOUNDRY} />
                <MenuItem label="marketplace" route={ERoute.MARKETPLACE} />
            </div>
            <div className="side-menu__line side-menu__line-bottom"></div>
            <div className="side-menu__links">
                <img src={setIcon} alt="icon" />
                <img src={telegramIcon} alt="telegram-icon" />
                <img src={twitterIcon} alt="twitter-icon" />
            </div>
            <BigButton
                className="side-menu__button"
                label="Disconnect"
            />
        </div>
    )
}