import React from "react";

import "./SmallButton.scss";

interface IButtonProps {
    label: string
    className?: string
    onClick?: () => void
    isDisabled?: boolean
}

export const SmallButton: React.FC<IButtonProps> = ({ label, className, onClick, isDisabled }) => {

    return (
        <button 
            className={`small-button ${className}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {label}
        </button>
    )
}