import { ITrack } from './models.types';
const MESSAGES = [
    "Hi, man! 👋", 1000,
    "I`m glad that you here 😊", 1000,
    "How are you? 🙂", 6000,
];

const TRACKS: ITrack[] = [
    {src: require('../../../../../resources/Alter_Ego.mp3'), author: "N'to", title: "Alter Ego"},
    {src: require('../../../../../resources/Ghinzu.mp3'), author: "Ghinzu", title: "21st Century Crooners"},
    {src: require('../../../../../resources/JetSex.mp3'), author: "Ghinzu", title: "Jet sex"}
]

const PHONE = "89600981865".split("");


export {MESSAGES, TRACKS, PHONE}