import React, { useContext } from "react";
import { Notification } from "../../Notification/Notification";
import { notifications } from "../../../constants";
import { GradientContainer } from "../../GradientContainer/GradientContainer";
import { BigButton } from "../../BigButton/BigButton";
import "./Homepage.scss";
import chimeraImage from "../../../images/chimera_running-pose.png";
import { UserContext } from "src/context/UserContext/UserContext";

interface IHomepageProps {}

export const Homepage: React.FC<IHomepageProps> = () => {
    const { createdUser } = useContext(UserContext)

    const smallScreen = window.matchMedia('(max-width: 520px)')

    return (
        <div className="homepage">
            <div className="homepage__main">
                <GradientContainer className="homepage__gradient" />
                <div className="homepage__main-description">
                    <h1 className="homepage__main-title">Hello Olympian!</h1>
                    <div className="homepage__main-text">
                        <div className="homepage__text">You currently have</div>
                        <div className="homepage__text homepage__text-middle">{createdUser.olymp} $OLYMP</div>
                        <div className="homepage__text">under vesting!</div>
                    </div>
                    {smallScreen.matches ? null :
                        <BigButton
                            className="homepage__main-button" 
                            label="Buy $OLYMP"
                        />
                    }
                </div>
            </div>
            <img className="homepage__image" src={chimeraImage} alt="chimera-image" />
            <div className="homepage__sub">
                <div className="homepage__sub-container homepage__news">
                    <GradientContainer className="homepage__news-gradient" />
                    <h2 className="homepage__sub-title">Latest News</h2>
                </div>
                <div className="homepage__sub-container homepage__notifications">
                    <GradientContainer className="homepage__notifications-gradient" />
                    <h2 className="homepage__sub-title">Notifications</h2>
                    {notifications.map((data) => <Notification key={data.time} time={data.time} text={data.text} />)}
                </div>
            </div>
        </div>
    )
}