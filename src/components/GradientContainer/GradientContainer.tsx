import React from "react";

import "./GradientContainer.scss";

interface IGradientContainerProps {
    className?: string
}

export const GradientContainer: React.FC<IGradientContainerProps> = ({ className }) => {
    return (
        <div className={`gradient-container ${className}`}></div>
    )
}