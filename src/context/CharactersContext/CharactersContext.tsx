import { noop } from "lodash";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { ICharacter } from "../../interfaces";
import { createCharactersObject } from "../../utils";

interface ICharacterContextProps {
    createdCharacters: ICharacter[]
    setCreatedCharacters: React.Dispatch<React.SetStateAction<ICharacter[]>>
    selectedCharacter: ICharacter
    setSelectedCharacter: React.Dispatch<React.SetStateAction<ICharacter>>
    stonesToNextLevel: number
    setStonesToNextLevel: React.Dispatch<React.SetStateAction<number>>
    handleUpdateCharacter: (id: string, key: string, value: any) => void
    isTraining: boolean
    setIsTraining: React.Dispatch<React.SetStateAction<boolean>>
    isTrainingFinished: boolean
    setIsTrainingFinished: React.Dispatch<React.SetStateAction<boolean>>
}

export const CharactersContext = createContext<ICharacterContextProps>({
    createdCharacters: createCharactersObject(),
    setCreatedCharacters: noop,
    selectedCharacter: null,
    setSelectedCharacter: noop,
    stonesToNextLevel: null,
    setStonesToNextLevel: noop,
    handleUpdateCharacter: noop,
    isTraining: false,
    setIsTraining: noop,
    isTrainingFinished: false,
    setIsTrainingFinished: noop,
})

export const CharactersContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [ createdCharacters, setCreatedCharacters ] = useState<ICharacter[]>(createCharactersObject())
    const [ selectedCharacter, setSelectedCharacter ] = useState<ICharacter>(null)
    const [ stonesToNextLevel, setStonesToNextLevel ] = useState(4)
    const [ isTraining, setIsTraining ] = useState(false)
    const [ isTrainingFinished, setIsTrainingFinished ] = useState(false)

    const handleUpdateCharacter = useCallback((id: string, key: string, value: any) => {
        setCreatedCharacters(createdCharacters => createdCharacters.map(character => {
            if (id === character.id) {
                return {...character, [key]: value} 
            }
            return character
        }))

    }, [ setCreatedCharacters ])

    useEffect(() => {
        setStonesToNextLevel(Math.pow(2, selectedCharacter?.level + 1))
    }, [ setStonesToNextLevel, selectedCharacter ])

    return (
        <CharactersContext.Provider
            value={{
                createdCharacters,
                setCreatedCharacters,
                selectedCharacter,
                setSelectedCharacter,
                stonesToNextLevel,
                setStonesToNextLevel,
                handleUpdateCharacter,
                isTraining,
                setIsTraining,
                isTrainingFinished,
                setIsTrainingFinished
            }}
        >
            {children}
        </CharactersContext.Provider>
    )
}