import React, { useCallback, useContext, useState } from "react";

import "./Card.scss";
import { GradientContainer } from "../GradientContainer/GradientContainer";
import { CharactersContext } from "src/context/CharactersContext/CharactersContext";

interface ICardProps {
    id: string
    avatar: string
    navigate?: (id: string) => void
    rarity?: string
}

export const Card: React.FC<ICardProps> = ({ id, avatar, navigate, rarity }) => {
    const { selectedCharacter } = useContext(CharactersContext)

    const handleNavigate = useCallback(() => {
        navigate(id)
    }, [ navigate, id ])

    return (
        <div 
            className="card__wrapper"
            onClick={handleNavigate}
        >
            <div className="card">
                <GradientContainer className={`card__gradient card__gradient-${rarity.toLowerCase()}`} />
                <div 
                    className={`card__background ${selectedCharacter?.id === id && `card__background_glow-${rarity.toLowerCase()}`}`}
                ></div>
                <img className="card__image" src={avatar} alt="avatar" />
            </div>
        </div>
    )
}