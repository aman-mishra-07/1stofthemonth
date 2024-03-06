import { CiHeart } from "react-icons/ci";
import { IoBodyOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GoScreenFull } from "react-icons/go";
import { GiStairsGoal } from "react-icons/gi";



export const sideNavOptions = {
    'health': [
        {
            title: "All",
            icon: <HiOutlineUserGroup size={30} />,
            path: "/health",
        },
        {
            title: "Body Parts",
            icon: <IoBodyOutline size={30} />,
            path: "/health/body-parts",
        },
        {
            title: "Goals",
            icon: <GiStairsGoal size={30} />,
            path: "/health/goals",
        },
        {
            title: "Cancer screening",
            icon: <GoScreenFull size={30} />,
            path: "/health/cancer-screening",
        },
    ],
    'learnings': [
        {
            title: "routines",
            icon: <CiHeart size={30} />,
            path: "/learnings",
        },
        {
            title: "know-the-signs",
            icon: <CiHeart size={30} />,
            path: "/learnings/know-the-signs",
        },
        {
            title: "how-to-prevent",
            icon: <CiHeart size={30} />,
            path: "/learnings/how-to-prevent",
        },
        {
            title: "more",
            icon: <CiHeart size={30} />,
            path: "/learnings/more",
        },
    ],
    'account': [
        {
            title: "user",
            icon: <CiHeart size={30} />,
            path: "/account",
        },
        {
            title: "privacy",
            icon: <CiHeart size={30} />,
            path: "/account/privacy",
        },
        {
            title: "security",
            icon: <CiHeart size={30} />,
            path: "/account/security",
        },
    ],
};

export const tabs = {
    health: {
        'health': [
            'stared',
            'my-information',
            'family-history',
            'export-pdf',
        ],
        'body-parts': [
            'dental',
            'skin',
            'sight',
            'blood-test',
        ],
        'goals': [
            'activity',
            "my-goals",
            'diet',
        ],
        'cancer-screening': [
            'all',
            'breast',
            'cervica',
            'skin',
            'bowel',]
    },
    learnings: {
   
    },
    account: {
        'account': [
            'family',
            'doctor',
        ],
    },

}
