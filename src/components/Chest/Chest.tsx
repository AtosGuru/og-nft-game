import React, { createElement, DetailedReactHTMLElement, useCallback } from "react";
import { SmallButton } from "../SmallButton/SmallButton";
import { GradientContainer } from "../GradientContainer/GradientContainer";
import "./Chest.scss";
import { Tooltip } from "antd";
import { CustomTooltip } from "../CustomTooltip/CustomTooltip";
import { ERarity } from "../../constants";
 
interface IChestsProps {
    name: string
    image: string
    mode: any
    className?: string
    icon?: string
}

export const Chest: React.FC<IChestsProps> = ({ name, image, className, icon, mode="common" }) => {

    const setTooltip = useCallback(() => {
        switch(mode) {
            case ERarity.COMMON:
                return (
                    <CustomTooltip
                        mode={mode}
                        character={50}
                        olymp={30}
                        olympLevel="200-800"
                        stone={10}
                        powder={100}
                        powderLevel="10-50"
                    />
                )
            case ERarity.UNCOMMON:
                return (
                    <CustomTooltip
                        mode={mode}
                        character={100} 
                        olymp={50}
                        olympLevel="800-3200"
                        stone={20}
                        powder={100}
                        powderLevel="40-200"
                    />
                )
            case ERarity.RARE:
                return(
                    <CustomTooltip
                        mode={mode}
                        character={84} 
                        olymp={40}
                        olympLevel="400-1600"
                        stone={15}
                        powder={100}
                        powderLevel="20-100"
                    />
                )
            case ERarity.LEGENDARY:
                return (
                    <CustomTooltip
                        mode={mode}
                        character={100} 
                        olymp={60}
                        olympLevel="1600-6400"
                        stone={25}
                        powder={100}
                        powderLevel="160-400"
                    />
                )
        }
        
    }, [ mode ])

    return (
        <div className={`chest chest-${mode} ${className}`}>
            <GradientContainer className={`chest__gradient-${mode}`} />
            <div className="chest__image">
                <img className="chest__image-img" src={image} alt="chest-image" />
                
                <Tooltip 
                    overlayClassName={`chest__tooltip-${mode}`}
                    title={setTooltip}
                >
                    <div className={`chest__tooltip-icon chest__icon-${mode}`}>
                        <img className="chest__tooltip-i" src={icon} alt="tooltip-icon" />
                    </div>
                </Tooltip>
            </div>
            <h1 className="chest__name">{name}</h1>
            <div className="chest__buttons">
                <SmallButton 
                    className="chest__buttons-open" 
                    label="open" 
                />
                <SmallButton 
                    className="chest__buttons-sell" 
                    label="sell" 
                />
            </div>
        </div>
    )
}