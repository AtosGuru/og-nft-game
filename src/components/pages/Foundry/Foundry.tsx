import React, { useCallback, useContext, useEffect } from "react";
import "./Foundry.scss";
import foundryStoneImage from "../../../images/foundry-stone.png";
import { BigButton } from "../../BigButton/BigButton";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { Claim } from "../../Claim/Claim";
import { Stone } from "../../Stone/Stone";
import { CustomDropdown } from "../../CustomDropdown/CustomDropdown";
import { GradientContainer } from "../../GradientContainer/GradientContainer";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { stoneNumberOptions } from "../../../constants";
import { FoundryPageContext } from "../../../context/FoundryPageContext/FoundryPageContext";
import { createStoneObject } from "../../../utils";
import { UserContext } from "../../../context/UserContext/UserContext";
import { uniqueId } from "lodash";

interface IFoundryProps {}

function SampleNextArrow(props: any) {
    const { style, onClick, className } = props;

    return (
      <BiChevronRight
        onClick={onClick}
        style={{ 
            ...style, 
            display: "block", 
            background: "transparent", 
            color: className.includes("slick-disabled") ? "#575267" : "#FFFFFF", 
            position: "absolute",
            right: "-20px",
            fontSize: "44px",
            bottom: "50%",
            transform: "translateY(45%)"
        }}
      />
    )
}

function SamplePrevArrow(props: any) {
    const { style, onClick, currentSlide } = props;
    return (
        <div>
            <BiChevronLeft
                onClick={onClick}
                style={{ 
                    ...style, 
                    display: "block", 
                    background: "transparent", 
                    color: currentSlide === 0 ? "#575267" : "#FFFFFF",
                    position: "absolute",
                    left: "-20px",
                    fontSize: "44px",
                    bottom: "50%",
                    transform: "translateY(45%)"
                }}
            />
        </div>
    )
}

const responsiveSettings = [
    {
        breakpoint: 1214,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
    },
    {
        breakpoint: 720,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
    },
    {
        breakpoint: 632,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
    },
    {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
    }
]

export const Foundry: React.FC<IFoundryProps> = () => {
    const { createdUser, setCreatedUser } = useContext(UserContext)
    const { selectedValue, setSelectedValue, setCreatedStones, createdStones } = useContext(FoundryPageContext)

    const handleStartStoneProgress = useCallback(() => {
        setCreatedStones(createdStones => {
            return [createStoneObject(parseInt(selectedValue?.value)), ...createdStones]
        })

        setCreatedUser({...createdUser, "powder": (createdUser.powder - parseInt(selectedValue?.value) * 100)}) 

    }, [ setCreatedStones, selectedValue, setCreatedUser ])

    useEffect(() => {
        stoneNumberOptions.slice(Math.floor(createdUser.powder / 100), stoneNumberOptions.length)
                            .map(option => option.className = "disabled-option")
    }, [ stoneNumberOptions, createdUser ])
    
    return (
        <div className="foundry">
            <div className="foundry__main">
                <div className="foundry__main-container foundry__create">
                    <GradientContainer className="foundry__create-gradient" />
                    <h2 className="foundry__name">The foundry</h2>
                    <div className="foundry__create-powder">
                        <img className="foundry__powder-image" src={foundryStoneImage} alt="foundry-stone-image" />
                        <div className="foundry__powder-label">{`${createdUser.powder}/${createdUser.powderToCreateStone}`}</div>
                        <ProgressBar 
                            className="foundry__powder-bar"
                            progress={createdUser.powder > 100 ? 100 : createdUser.powder}
                        />
                        <div className="foundry__powder-text">You need 100 Powder to create 1 Evolving stone.</div>
                        <div className="foundry__powder-text">The Foundry takes <span>8 hours</span> to create from 1 to 10 stones.</div>
                    </div>
                    <div className="foundry__create-options">
                        <div className="foundry__options-label">Create:</div>
                        <CustomDropdown 
                            data={stoneNumberOptions}
                            onChange={setSelectedValue}
                        />
                        <BigButton 
                            className="foundry__options-button" 
                            label="Start" 
                            onClick={handleStartStoneProgress}
                            isDisabled={createdUser.powder < 100 || parseInt(selectedValue.value)*100 > createdUser.powder}
                        />
                    </div>
                </div>
                <div className="foundry__main-container foundry__progress">
                    <h2 className="foundry__name">Stone Progress</h2>
                    {createdStones.map(stone => 
                        <Claim key={stone.id} stone={stone} />
                    )}
                </div>
            </div>
            <div className="foundry__title">{`Evolving Stones (${createdUser.stones})`}</div>
            <div className="foundry__slider">
                <GradientContainer className="foundry__slider-gradient" />
                <Slider
                    slidesToShow={6}
                    slidesToScroll={6}
                    infinite={false}
                    initialSlide={0}
                    prevArrow={<SamplePrevArrow className="foundry__slider-arrow foundry__arrow-left" />}
                    nextArrow={<SampleNextArrow className="foundry__slider-arrow foundry__arrow-right" />}
                    responsive={[...responsiveSettings]}
                >
                    {Array(createdUser.stones).fill(0).map(stone => <Stone key={stone.id} label="sell" />)}
                </Slider>
            </div>
        </div>
    )
}