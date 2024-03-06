import { CiHeart } from "react-icons/ci";

export const sideNavOptions = {
    'health': [
        {
            title: "All",
            icon: <CiHeart size={30} />,
            path: "/health",
        },
        {
            title: "Body Parts",
            icon: <CiHeart size={30} />,
            path: "/health/body-parts",
        },
        {
            title: "Goals",
            icon: <CiHeart size={30} />,
            path: "/health/goals",
        },
        {
            title: "Cancer screening",
            icon: <CiHeart size={30} />,
            path: "/health/cancer-screening",
        },
    ],
    'learnings': [
        {
            title: "books",
            icon: <CiHeart size={30} />,
            path: "/learnings",
        },
        {
            title: "yoga",
            icon: <CiHeart size={30} />,
            path: "/learnings/yoga",
        },
        {
            title: "personal-trainings",
            icon: <CiHeart size={30} />,
            path: "/learnings/personal-trainings",
        },
    ],
    'account': [
        {
            title: "account details",
            icon: <CiHeart size={30} />,
            path: "/",
        },
        {
            title: "profile",
            icon: <CiHeart size={30} />,
            path: "/body-parts",
        },
        {
            title: "privacy",
            icon: <CiHeart size={30} />,
            path: "/goals",
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
        'learnings': [
            'individual',
            'family',
            'relative',
            'friend',
        ],
        'Yoga': [
            'individual',
            'family',
            'relative',
            'friend',
        ],
        'personal-training': [
            'individual',
            'family',
            'relative',
            'friend',
        ]
    },
    account: {
        'accounts': [
            'individual',
            'family',
            'relative',
            'friend',
        ],
        'Yoga': [
            'individual',
            'family',
            'relative',
            'friend',
        ],
        'personal-training': [
            'individual',
            'family',
            'relative',
            'friend',
        ]
    },

}
