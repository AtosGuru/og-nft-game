import React from "react";

import "./CustomTooltip.scss";

interface ICustomTooltipProps {
    mode: string
    character: number
    olymp: number
    olympLevel: string
    stone: number
    powder: number
    powderLevel: string
}

export const CustomTooltip: React.FC<ICustomTooltipProps> = ({ mode, character, olymp, olympLevel, stone, powder, powderLevel }) => {
    return (
        <div className={`custom-tooltip ${mode}`}>
            <h1 className="custom-tooltip__title">What can you get?</h1>
            <p className="custom-tooltip__text">
                <span>Character</span> - {character}% chance of getting a character
            </p>
            <p className="custom-tooltip__text">
                <span>$OLYMP</span> - {olymp}% chance of getting {olympLevel} $OLYMP
            </p>
            <p className="custom-tooltip__text">
                <span>Evolving stone </span> - {stone}% chance of getting 1 evolving stone
            </p>
            <p className="custom-tooltip__text">
                <span>Evolving powder</span> - {powder}% chance of getting {powderLevel} powder
            </p>
        </div>
    )
}