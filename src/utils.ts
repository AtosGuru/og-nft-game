import { uniqueId } from "lodash";
import { ICharacter, IStoneObject, IUser } from "./interfaces";
import achillesAvatar from "./images/achilles-avatar.png";
import achillesImage from "./images/achilles.png";
import medusaAvatar from "./images/medusa-avatar.png";
import medusaImage from "./images/medusa-big.png";
import apolonAvatar from "./images/apolon-avatar1.png";
import zeusAvatar from "./images/zeus-avatar1.png";
import zeusImage from "./images/zeus-big.png";

export const createStoneObject = (numberOfStones: number):IStoneObject => {
    return {
        numberOfStones,
        id: uniqueId(),
        isClaimed: false,
        timeToCreate: 300,
        isCreated: false
    }
}

export const createUserObject = ():IUser => {
    return {
        id: uniqueId(),
        olymp: 3700,
        stones: 6,
        powder: 460,
        powderToCreateStone: 100
    }
}

export const createCharactersObject = ():ICharacter[] => {
    return [
        {
            id: uniqueId(),
            name: "Achilles1",
            avatar: achillesAvatar,
            image: achillesImage,
            level: 2,
            type: "Achilles",
            rarity: "Common",
            status: "Resting",
        },
        {
            id: uniqueId(),
            name: "Medusa",
            avatar: medusaAvatar,
            image: medusaImage,
            level: 3,
            type: "Medusa",
            rarity: "Gold",
            status: "Resting",
        },
        {
            id: uniqueId(),
            name: "Medusa",
            avatar: medusaAvatar,
            image: medusaImage,
            level: 1,
            type: "Medusa",
            rarity: "Common",
            status: "Resting",
        },
        {
            id: uniqueId(),
            name: "Apolon",
            avatar: apolonAvatar,
            image: "",
            level: 1,
            type: "Apolon",
            rarity: "Common",
            status: "Resting",
        },
        {
            id: uniqueId(),
            name: "Zeus",
            avatar: zeusAvatar,
            image: zeusImage,
            level: 1,
            type: "Zeus",
            rarity: "Diamond",
            status: "Resting",
        }
    ]
}