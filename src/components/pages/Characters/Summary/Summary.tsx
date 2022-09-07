import { Input, InputRef } from "antd";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { CharactersContext } from "src/context/CharactersContext/CharactersContext";
import { UserContext } from "src/context/UserContext/UserContext";
import { BigButton } from "../../../BigButton/BigButton";
import { ProgressBar } from "../../../ProgressBar/ProgressBar";
import { BsPencilFill } from "react-icons/bs";
import xCircleIcon from "../../../../images/x-circle.svg";
import checkIcon from "../../../../images/check-icon.svg";
import "./Summary.scss";
import { useNavigate } from "react-router-dom";
import { ERoute } from "src/constants";

interface ISummaryProps {}

export const Summary: React.FC<ISummaryProps> = () => {
    const { createdUser } = useContext(UserContext)
    const { selectedCharacter, stonesToNextLevel, isTraining, handleUpdateCharacter } = useContext(CharactersContext)

    const [ isFocused, setIsFocused ] = useState(false)
    const [ width, setWidth ] = useState(70)

    const navigate = useNavigate()
    const ref = useRef<InputRef>(null)

    const handleFocusInput = useCallback((e: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement> | React.MouseEvent<SVGElement>) => {
        setIsFocused(true)
        setWidth(e.currentTarget?.previousElementSibling.clientWidth + 48)
    }, [ setIsFocused, setWidth ])

    const handleFocusOnEnter = useCallback((e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
        handleUpdateCharacter(selectedCharacter?.id, "name", e.currentTarget?.value)
        setIsFocused(false)
    }, [ setIsFocused, handleUpdateCharacter, selectedCharacter ])

    const handleUnfocusInput = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false)
        handleUpdateCharacter(selectedCharacter?.id, "name", e.target.value)
    }, [ setIsFocused, handleUpdateCharacter, selectedCharacter ])

    const handleChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            e.currentTarget.style.color = "#FFFFFF"
        }
    }, [])

    const handleNavigateToMarketplace = useCallback(() => {
        navigate(ERoute.MARKETPLACE)
    }, [ navigate ])
    
    useEffect(() => {
        if (ref.current && isFocused) {
            ref.current.focus()
        }
    }, [ isFocused, ref ])

    if (!selectedCharacter) {
        return
    }

    return (
        <div className="summary">
            <div 
                className="summary__name-input" 
            >
                {isFocused 
                ? (
                    <>
                        <Input 
                            ref={ref}
                            className="summary__name" 
                            defaultValue={selectedCharacter?.name}
                            bordered={false}
                            onPressEnter={handleFocusOnEnter}
                            onBlur={handleUnfocusInput}
                            onChange={handleChangeInput}
                            style={{
                                width: `${width}px`,
                            }}
                        />
                        <button
                            className="summary__save-input"
                            onClick={handleFocusOnEnter}
                        >
                            <img src={checkIcon} alt="check-icon" />
                        </button>
                        <button
                            className="summary__save-input"
                            onClick={() => setIsFocused(false)}
                        >
                            <img src={xCircleIcon} alt="close-icon" />
                        </button>
                    </>
                ) : (
                    <>
                        <div 
                            className="summary__name"
                            onClick={handleFocusInput}
                        >
                            {selectedCharacter?.name}
                        </div>
                        <BsPencilFill 
                            className="summary__change-icon" 
                            onClick={handleFocusInput} 
                        />
                    </>
                )
                }
                
                
            </div>
            <div className="summary__progress">
                <div className="summary__progress-level">
                    <div className="summary__level-left">{`Lvl${selectedCharacter.level}`}</div>
                    <div className="summary__level-right">
                        {`${createdUser.stones}/${stonesToNextLevel}`}
                    </div>
                </div>
                <ProgressBar 
                    className="summary__progress-bar" 
                    progress={createdUser.stones >= stonesToNextLevel ? 100 : createdUser.stones / stonesToNextLevel * 100}
                />
            </div>
            <div className="summary__info">
                <div>Type: {selectedCharacter.type}</div>
                <div>Rarity: {selectedCharacter.rarity}</div>
                <div>Status: {isTraining ? "Training" : selectedCharacter.status}</div>
            </div>
            <BigButton
                className="summary__button" 
                label="Sell on the Marketplace"
                onClick={handleNavigateToMarketplace}
            />
        </div>
    )
}