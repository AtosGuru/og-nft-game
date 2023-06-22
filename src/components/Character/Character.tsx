import React, { useCallback, useContext, useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { ERoute } from "src/constants";
import { CharactersContext } from "../../context/CharactersContext/CharactersContext";
import { ICharacter } from "../../interfaces";
import { Info } from "../Info/Info";

import "./Character.scss";

interface ICharacterProps {}

export const Character: React.FC<ICharacterProps> = () => {
    const { createdCharacters, setSelectedCharacter } = useContext(CharactersContext)

    const [ character, setCharacter ] = useState<ICharacter>(null)

    const navigate = useNavigate()
    const { id } = useParams()

    const smallScreen = window.matchMedia('(max-width: 640px)')

    useEffect(() => {
        setCharacter(character => {
            const foundCharacter = createdCharacters.find(char => char.id === id) 

            if (foundCharacter) {
                return foundCharacter
            }

            return null
        })

        setSelectedCharacter(character)
    }, [ id, createdCharacters, character, setSelectedCharacter ])

    const handlePreviousCharacter = useCallback(() => {
        const characterIndex = createdCharacters.findIndex(x => x.id === id)
        const character = characterIndex === -1 ? null : createdCharacters[characterIndex - 1]

        if (!character) {
            return 
        } 

        navigate(ERoute.SUMMARY.replace(":id", character?.id))

    }, [ id, createdCharacters, navigate ])

    const handleNextCharacter = useCallback(() => {
        const characterIndex = createdCharacters.findIndex(x => x.id === id)
        const character = characterIndex === -1 ? null : createdCharacters[characterIndex + 1]

        if (!character) {
            return 
        } 

        navigate(ERoute.SUMMARY.replace(":id", character?.id))

    }, [ id, createdCharacters, navigate ])

    return (
        <div className="character">
            <div className="character__main">
                <div className="character__main-image">
                    <img className="character__image-img" src={character?.image} alt="character-image" />
                    <button
                        className="character__arrow character__arrow-left" 
                        onClick={handlePreviousCharacter}
                        disabled={createdCharacters.findIndex(x => x.id === id) === 0}
                    >
                        <BiChevronLeft />
                    </button>
                    <button
                        className="character__arrow character__arrow-right"
                        onClick={handleNextCharacter}
                        disabled={createdCharacters.findIndex(x => x.id === id) === createdCharacters.length - 1}
                    >
                        <BiChevronRight />
                    </button>
                </div>
                <div className="character__main-info">
                    <Info id={character?.id} />
                    {!smallScreen.matches && <Outlet />}
                </div>
                {smallScreen.matches && 
                    <div className="character__outlet">
                        <Outlet />
                    </div>
                }
            </div>
        </div>
    )
}