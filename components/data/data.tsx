// data/cribs.ts

const ShuttleIcon = require('react-native-vector-icons/FontAwesome').default;
const CabinIcon = require('react-native-vector-icons/MaterialIcons').default;
const FanIcon = require('react-native-vector-icons/FontAwesome5').default;
const WaterIcon = require('react-native-vector-icons/MaterialCommunityIcons').default;
const TinyIcon = require('react-native-vector-icons/MaterialIcons').default;
const LakeIcon = require('react-native-vector-icons/MaterialCommunityIcons').default;
const MansionIcon = require('react-native-vector-icons/FontAwesome6').default;
const LightIcon = require('react-native-vector-icons/MaterialCommunityIcons').default;
const TreeIcon = require('react-native-vector-icons/Foundation').default;
const CastleIcon = require('react-native-vector-icons/MaterialIcons').default;
const PlayIcon = require('react-native-vector-icons/MaterialCommunityIcons').default;

export interface Crib {
    id: number;
    icon: React.ComponentType<{ name: string; size?: number; color: string; style?: object }>;
    title: string;
    name: string;
    size: number;
}

export const cribs: Crib[] = [
    {
        id: 0,
        icon: ShuttleIcon,
        title: "space-shuttle",
        name: "Iconic",
        size:24,
    },
    {
        id: 2,
        icon: CabinIcon,
        title: "cabin",
        name: "Cabins",
        size:24,
    },
    {
        id: 3,
        icon: FanIcon,
        title: "fan",
        name: "OMG!",
        size:24,
    },
    {
        id: 4,
        icon: WaterIcon,
        title: "water-polo",
        name: "Beach front",
        size:24,
    },
    {
        id: 5,
        icon: TinyIcon,
        title: "house-siding",
        name: "Tiny homes",
        size:24,
    },
    {
        id: 6,
        icon: LakeIcon,
        title: "snowflake-variant",
        name: "Lake fron",
        size:24,
    },
    {
        id: 7,
        icon: MansionIcon,
        title: "house-flood-water",
        name: "Luxury",
        size:24,
    },
    {
        id: 8,
        icon: LightIcon,
        title: "lighthouse-on",
        name: "Amazing",
        size:24,
    },
    {
        id: 9,
        icon: TreeIcon,
        title: "social-treehouse",
        name: "Tree houses",
        size:24,
    },
    {
        id: 10,
        icon: CastleIcon,
        title: "castle",
        name: "Castles",
        size:24,
    },
    {
        id: 11, // Updated to a unique ID
        icon: PlayIcon,
        title: "cards-playing-heart-outline",
        name: "Play homes",
        size:24,
    },
];
