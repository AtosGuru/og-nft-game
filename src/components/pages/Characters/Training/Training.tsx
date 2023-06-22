import { Modal } from "antd";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { BigButton } from "../../../BigButton/BigButton";
import { CustomDropdown } from "../../../CustomDropdown/CustomDropdown";
import "./Training.scss";
import { ERoute, trainingOptions } from "../../../../constants";
import { CharactersContext } from "src/context/CharactersContext/CharactersContext";
import { ProgressBar } from "src/components/ProgressBar/ProgressBar";
import { SmallButton } from "src/components/SmallButton/SmallButton";
import { UserContext } from "src/context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

interface ITrainingProps {}

export const Training: React.FC<ITrainingProps> = () => {
    const { handleUpdateUser, createdUser } = useContext(UserContext)
    const { selectedCharacter, isTraining, setIsTraining, isTrainingFinished, setIsTrainingFinished } = useContext(CharactersContext)
    
    const [ daysToTrain, setDaysToTrain ] = useState(trainingOptions[0])
    const [ progress, setProgress ] = useState(0)
    const [isModalVisible, setIsModalVisible] = useState(false);

    const navigate = useNavigate()

    const showModal = () => {
        setIsModalVisible(true);
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    }

    const handleNavigate = useCallback(() => {
        navigate(ERoute.FOUNDRY)
    }, [ navigate ])

    // NOTE: progress bar simulation
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(progress => {
                if (progress >= 100) {
                    clearInterval(timer)
                    setIsTrainingFinished(true)
                    return progress
                }

                return progress + 1
            })
        }, 200)
        
    }, [ 
        setProgress, 
        setIsTrainingFinished,
        isTraining
    ])

    const handleSetToTraining = useCallback(() => {
        setIsTraining(true)
    }, [ setIsTraining ])

    const handleClaimButton = useCallback(() => {
        setIsTraining(false)
        setIsTrainingFinished(false)
        setProgress(0)
        handleUpdateUser(createdUser, "powder", createdUser.powder + 240)
        showModal()
    }, [ setIsTraining, setIsTrainingFinished, setProgress, handleUpdateUser, createdUser ])

    return (
        <div className="training">
            <h2 className="training__name">{selectedCharacter?.name}</h2>
            <p className="training__text training__text-first">Send your character training and he’ll come back with evolving powder.</p>
            {isTraining ? 
                <>
                    <div className="training__row">
                        <h3 className="training__send">{isTrainingFinished ? "You got 240 powder" : "Training"}</h3>
                        <div className="training__time">
                            {isTrainingFinished ? 
                                <SmallButton 
                                    className="training__claim-button"
                                    label="claim" 
                                    onClick={handleClaimButton}
                                /> : 
                                progress}
                        </div>
                    </div>
                    <ProgressBar
                        className="training__progress"
                        progress={progress}
                    />

                    {!isTrainingFinished &&
                         
                        <p className="training__text training__text-second"> 
                            Training Achilles 1 for <span>{daysToTrain.label}</span> will give you between <span>60 and 240</span> evolving powder.
                        </p>
                    }
                </> :
                <>
                    <h3 className="training__send">Send to training for:</h3>
                    <CustomDropdown 
                        className="training__dropdown" 
                        data={trainingOptions}
                        onChange={setDaysToTrain}
                    />
                    <p className="training__text training__text-second">Training Achilles 1 for <span>{daysToTrain.label}</span> will give you between <span>60 and 240</span> evolving powder.</p>
                    <BigButton
                        className="training__button"
                        label="Send to training"
                        onClick={handleSetToTraining}
                    />
                </>
            }
            <Modal 
                title="Congrats!" 
                visible={isModalVisible} 
                onCancel={handleCancel}
            >
                <p>Achilles 1 brought you 240 powder from training!</p>
                <BigButton 
                    className="modal__button"
                    label="Use in the Foundry"
                    onClick={handleNavigate}
                />
            </Modal>
        </div>
    )
}