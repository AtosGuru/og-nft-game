import { Tooltip } from "antd";
import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ERoute } from "src/constants";
import { CharactersContext } from "src/context/CharactersContext/CharactersContext";
import { UserContext } from "src/context/UserContext/UserContext";
import { BigButton } from "../../../BigButton/BigButton";
import { ProgressBar } from "../../../ProgressBar/ProgressBar";

import "./Evolving.scss";

interface IEvolvingProps {}

export const Evolving: React.FC<IEvolvingProps> = () => {
    const { createdUser, handleUpdateUser } = useContext(UserContext)
    const { selectedCharacter, stonesToNextLevel, handleUpdateCharacter } = useContext(CharactersContext)

    const navigate = useNavigate()

    const handleEvolveToNextLevel = useCallback(() => {
        handleUpdateCharacter(selectedCharacter.id, "level", selectedCharacter.level + 1)

        handleUpdateUser(createdUser, "stones", createdUser.stones - stonesToNextLevel)
        
    }, [ handleUpdateCharacter, handleUpdateUser ])

    const handleNavigateToFoundry = useCallback(() => {
        navigate(ERoute.FOUNDRY)
    }, [ navigate ])

    const handleNavigateToMarketplace = useCallback(() => {
        navigate(ERoute.MARKETPLACE)
    }, [ navigate ])

    if (!selectedCharacter) {
        return
    }

    return (
        <div className="evolving">
            <h2 className="evolving__name">{selectedCharacter.name}</h2>
            <div className="evolving__progress">
                <div className="evolving__progress-level">
                    <div className="evolving__level-left">{`Lvl${selectedCharacter.level}`}</div>
                    <div className="evolving__level-right">
                        {`${createdUser.stones}/${stonesToNextLevel}`}
                    </div>
                </div>
                <ProgressBar 
                    className="evolving__progress-bar"
                    progress={createdUser.stones >= stonesToNextLevel ? 100 : createdUser.stones / stonesToNextLevel * 100}
                />
            </div>

            {createdUser.stones <= stonesToNextLevel ? 
                <Tooltip 
                    title="You don’t have enough stones" 
                    overlayClassName="evolving__tooltip"
                >
                    <div className="evolving__button-wrapper">
                        <BigButton 
                            className="evolving__button"
                            label={`Evolve to Level ${selectedCharacter.level + 1}`}
                            isDisabled={true}
                        />
                    </div>
                </Tooltip> : 
                <BigButton 
                    className="evolving__button"
                    label={`Evolve to Level ${selectedCharacter.level + 1}`}
                    isDisabled={false}
                    onClick={handleEvolveToNextLevel}
                />
            }
            
            <p className="evolving__rule">You need 8 evolving stones to upgrade Achilles 1 to level 3.</p>
            <h3 className="evolving__speed">Speed up evolving:</h3>
            <div className="evolving__buttons">
                <BigButton 
                    className="evolving__buttons-button evolving__button-left" 
                    label="Make Stones" 
                    onClick={handleNavigateToFoundry}
                />
                <BigButton 
                    className="evolving__buttons-button evolving__button-right" 
                    label="Purchase Stones" 
                    onClick={handleNavigateToMarketplace}
                />
            </div>
        </div>
    )
}