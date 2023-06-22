import React from "react";

import "./Notification.scss";

interface INotificationProps {
    time: string
    text: string
}

export const Notification: React.FC<INotificationProps> = ({ time, text }) => {
    return (
        <div className="notification">
            <div className="notification__time">{time}</div>
            <div className="notification__text">{text}</div>
        </div>
    )
}