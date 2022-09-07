import React, { useCallback, useContext, useEffect } from "react";
import { Card } from "../../Card/Card";
import "./Characters.scss";
import { useNavigate, useParams } from "react-router-dom";
import { ERoute } from "../../../constants";
import { CharactersContext } from "../../../context/CharactersContext/CharactersContext";
import { Character } from "../../Character/Character";

interface ICharacterProps {}

export const Characters: React.FC<ICharacterProps> = () => {
    const { createdCharacters } = useContext(CharactersContext)

    const { id } = useParams()

    const navigate = useNavigate()

    const navigateToCharacter = useCallback((id: string) => {
        navigate(ERoute.SUMMARY.replace(":id", id))
    }, [ navigate ])

    useEffect(() => {
        if (!id) {
            navigate(ERoute.SUMMARY.replace(":id", createdCharacters[0].id))
        }
    }, [ navigate ])

    return (
        <div className="characters">
            <div className="characters__cards">
                {createdCharacters.map(character => 
                    <Card 
                        key={character.id}
                        id={character.id} 
                        avatar={character.avatar} 
                        navigate={navigateToCharacter} 
                        rarity={character.rarity} 
                    />
                )}
            </div>
            <Character />
        </div>
    )
}