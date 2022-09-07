import React from "react";
import "./Stone.scss";
import stoneImage from "../../images/foundry-stone.png";
import { SmallButton } from "../SmallButton/SmallButton";

interface IStoneProps {
    label: string
}

export const Stone: React.FC<IStoneProps> = ({ label }) => {
    return (
        <div className="stone">
            <img className="stone__image" src={stoneImage} alt="stone-image" />
            <SmallButton className="stone__button" label={label} />
        </div>
    )
}