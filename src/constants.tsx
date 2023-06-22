import { Option } from "react-dropdown";

export const BASE_URL = ''

export enum ERoute {
    HOMEPAGE = '/',
    CHARACTERS = '/my-characters',
    CHESTS = '/my-chests',
    FOUNDRY = '/the-foundry',
    MARKETPLACE = '/marketplace',
    SUMMARY =':id/summary',
    EVOLVING = ':id/evolving',
    TRAINING = ':id/training',
    
}

export enum ERarity {
    COMMON = "common",
    UNCOMMON = "uncommon",
    RARE = "rare",
    LEGENDARY = "legendary"
}

export const timeToTrain = 3600000

export const notifications = [
    {
        id: "jyfguguihuii",
        time: "3 hrs ago", 
        text: "Achilles 1 came back from training with 240 powder"
    },
    {
        id: "asdasdslmcsd",
        time: "6 hrs ago", 
        text: "Evolving stone created"
    }
]

export const  stoneNumberOptions: Option[] = [
    {
        label: "1 stone",
        value: "1",
        className: "",
    },
    {
        label: "2 stones",
        value: "2",
        className: "",
    },
    {
        label: "3 stones",
        value: "3",
        className: "",
    },
    {
        label: "4 stones",
        value: "4",
        className: "",
    },
    {
        label: "5 stones",
        value: "5",
        className: "",
    },
    {
        label: "6 stones",
        value: "6",
        className: "",
    },
    {
        label: "7 stones",
        value: "7",
        className: "",
    },
    {
        label: "8 stones",
        value: "8",
        className: "",
    },
    {
        label: "9 stones",
        value: "9",
        className: "",
    },
    {
        label: "10 stones",
        value: "10",
        className: "",
    }
]

export const trainingOptions: Option[] = [
    {
        label: "1 day",
        value: "1",
        className: "",
    },
    {
        label: "2 days",
        value: "2",
        className: "",
    },
    {
        label: "3 days",
        value: "3",
        className: "",
    }
]
