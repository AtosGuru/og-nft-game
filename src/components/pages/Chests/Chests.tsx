import React from "react";
import { Chest } from "../../Chest/Chest";
import "./Chests.scss";
import commonChest from "../../../images/chest1.png";
import uncommonChest from "../../../images/chest2.png";
import rareChest from "../../../images/chest3.png";
import legendaryChest from "../../../images/chest4.png";
import commonIcon from "../../../images/common-i.svg";
import uncommonIcon from "../../../images/uncommon-i.svg";
import rareIcon from "../../../images/rare-i.svg";
import legendaryIcon from "../../../images/legendary-i.svg";

interface IChestsProps {}

const chestType = [
    {
        id: "afdmskjdserertr",
        name: "common chest",
        image: commonChest,
        class: "common",
        icon: commonIcon
    },
    {
        id: "weyqiryeiwer",
        name: "Uncommon Chest",
        image: uncommonChest,
        class: "uncommon",
        icon: uncommonIcon
    },
    {
        id: "mdsafhwowdua",
        name: "Rare Chest",
        image: rareChest,
        class: "rare",
        icon: rareIcon
    },
    {
        id: "posfjsidufhnd",
        name: "Legendary Chest",
        image: legendaryChest,
        class: "legendary",
        icon: legendaryIcon
    }
]

export const Chests: React.FC<IChestsProps> = () => {
    return (
        <div className="chests">
            {chestType.map(data => <Chest key={data.id} name={data.name} image={data.image} icon={data.icon} mode={data.class} />)}
        </div>
    )
}