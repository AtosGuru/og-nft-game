import React, { useCallback, useContext, useEffect, useState } from "react";
import { SmallButton } from "../SmallButton/SmallButton";
import { ProgressBar } from "../ProgressBar/ProgressBar";

import "./Claim.scss";
import { FoundryPageContext } from "../../context/FoundryPageContext/FoundryPageContext";
import { IStoneObject } from "../../interfaces";
import { UserContext } from "../../context/UserContext/UserContext";

interface IClaimProps {
    stone: IStoneObject
}

export const Claim: React.FC<IClaimProps> = ({ stone }) => {
    const { createdUser, setCreatedUser } = useContext(UserContext)
    const { handleUpdateStone } = useContext(FoundryPageContext)

    const [ progress, setProgress ] = useState(0)

    const handleClaimButton = useCallback(() => {
        handleUpdateStone(stone.id, "isClaimed", true)

        setCreatedUser({...createdUser, "stones": (createdUser.stones + stone.numberOfStones)})

    }, [ handleUpdateStone, stone, setCreatedUser ])

    // NOTE: progress bar simulation
    useEffect(() => {
        if (stone.isCreated) {
            setProgress(100)
            return
        }

        const timer = setInterval(() => {
            setProgress(progress => {
                if (progress >= 100) {
                    clearInterval(timer)
                    handleUpdateStone(stone.id, "isCreated", true)
                    return progress
                }

                return progress + 1
            })
        }, 300)
        
    }, [ 
        setProgress, 
        handleUpdateStone,
        stone
    ])
    
    return (
        <div className="claim">
            <div className="claim__stones">
                <div 
                    className={`claim__stones-label ${stone.isClaimed ? 'claim__stones-label_disabled' : ''}`}
                >
                    {stone.numberOfStones} {" "}
                    {stone.numberOfStones === 1 ? "stone" : "stones" } {" "}
                    {stone.isCreated ?  "completed" : "in progress"}
                </div>
                
                {!stone.isCreated && 
                    <div className="claim__label-progress">{progress}</div>
                }

                {stone.isCreated &&
                    <SmallButton 
                        className="claim__button" 
                        label={stone.isClaimed ? "claimed" : "claim"}
                        onClick={handleClaimButton}
                        isDisabled={stone.isClaimed}
                    />
                }
            </div>
            <ProgressBar
                className={stone.isClaimed ? "claim__progress-disabled" : ""}
                progress={progress} 
            />
        </div>
    )
}