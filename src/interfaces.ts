export interface IStoneObject {
    numberOfStones: number
    id: string
    isClaimed: boolean
    timeToCreate: number
    isCreated: boolean
}

export interface ICharacter {
    id: string
    name: string
    avatar: string
    image: string
    level: number
    type: string
    rarity: string
    status: string
}

export interface IUser {
    id: string
    olymp: number
    stones: number
    powder: number
    powderToCreateStone: number
}

