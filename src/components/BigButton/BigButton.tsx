import React from "react";

import "./BigButton.scss";

interface IBigButtonProps {
    label: string
    className?: string
    onClick?: () => void
    isDisabled?: boolean
}

export const BigButton: React.FC<IBigButtonProps> = ({ label, className, onClick, isDisabled }) => {
    return (
        <button 
            className={`big-button ${className}`}
            onClick={onClick}
            disabled={isDisabled}
        >
            {label}
        </button>
    )
}