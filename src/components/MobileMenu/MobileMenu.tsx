import React, { useCallback, useContext, useState } from "react";
import { ERoute } from "src/constants";
import { UserContext } from "src/context/UserContext/UserContext";
import { BigButton } from "../BigButton/BigButton";
import { MenuItem } from "../MenuItem/MenuItem";
import "./MobileMenu.scss";
import { MdClose } from "react-icons/md";
import setIcon from "../../images/set.svg";
import telegramIcon from "../../images/telegram.svg";
import twitterIcon from "../../images/twitter.svg";
import menuIcon from "../../images/menu-icon.svg";
import olympIcon from "../../images/coin.png";
import stoneIcon from "../../images/diamond.png";
import powderIcon from "../../images/drop.png";

interface IMobileMenuProps {}

export const MobileMenu: React.FC<IMobileMenuProps> = () => {
    const { createdUser } = useContext(UserContext)

    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    const mediumScreen = window.matchMedia('(max-width: 1008px)')
    const smallScreen = window.matchMedia('(max-width: 640px)')

    const handleCloseMenu = useCallback(() => {
        setIsMenuOpen(false)
    }, [ setIsMenuOpen ])

    const handleOpenMenu = useCallback(() => {
        setIsMenuOpen(true)
    }, [ setIsMenuOpen ])

    const closeMenuOnClick = useCallback(() => {
        setIsMenuOpen(false)
    }, [ setIsMenuOpen ])

    return (
        <>
            {mediumScreen.matches && !isMenuOpen &&
                <img className="mobile-menu__open" src={menuIcon} alt="menu-icon" onClick={handleOpenMenu} />
            }
            
            {isMenuOpen &&
                <div className="mobile-menu" onClick={closeMenuOnClick} >
                    <MdClose className="mobile-menu__close" onClick={handleCloseMenu} />
                    {smallScreen.matches && 
                        <div className="mobile-menu__points">
                            <div className="mobile-menu__points-items">
                                <img className="header__icons" src={olympIcon} alt="game-icon" />
                                <div className="mobile-menu__points-total">{createdUser.olymp}</div>
                            </div>
                            <div className="mobile-menu__points-items">
                                <img className="header__icons" src={stoneIcon} alt="game-icon" />
                                <div className="mobile-menu__points-total">{createdUser.stones}</div>
                            </div>
                            <div className="mobile-menu__points-items">
                                <img className="header__icons" src={powderIcon} alt="game-icon" />
                                <div className="mobile-menu__points-total">{createdUser.powder}</div>
                            </div>
                        </div>
                    }
                    <div className="mobile-menu__line mobile-menu__line-top"></div>
                    <div className="mobile-menu__items">
                        <MenuItem label="home" route={ERoute.HOMEPAGE} />
                        <MenuItem label="my characters" route={ERoute.CHARACTERS} />
                        <MenuItem label="my chests" route={ERoute.CHESTS} />
                        <MenuItem label="the foundry" route={ERoute.FOUNDRY} />
                        <MenuItem label="marketplace" route={ERoute.MARKETPLACE} />
                    </div>
                    <div className="mobile-menu__line mobile-menu__line-bottom"></div>
                            <div className="mobile-menu__links">
                        <img src={setIcon} alt="icon" />
                        <img src={telegramIcon} alt="telegram-icon" />
                        <img src={twitterIcon} alt="twitter-icon" />
                    </div>
                    <BigButton
                        className="mobile-menu__button"
                        label="Disconnect"
                    />
                </div>
            }
        </>
    )
}