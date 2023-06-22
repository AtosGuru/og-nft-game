import React from "react";

import "./ProgressBar.scss";

interface IProgressBarProps {
    progress?: number
    className?: string
}

export const ProgressBar: React.FC<IProgressBarProps> = ({ progress, className }) => {
    return (
        <div className={`progress-bar ${className}`}>
            <div 
                className={`progress-bar__fill`}
                style={{
                    width: `${progress}%`
                }}
            ></div>
        </div>
    )
}