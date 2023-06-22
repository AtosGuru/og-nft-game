import React from "react";

import "./Marketplace.scss";

interface IMarketplaceProps {}

export const Marketplace: React.FC<IMarketplaceProps> = () => {
    return (
        <div className="marketplace">
            <div className="marketplace__text">{`Coming Soon :)`}</div>
        </div>
    )
}