type Links = {
    name: string;
    link: string;
    isPageDifferent: boolean;
};

export const links: Links[] = [
    {
        name: 'Home',
        link: '/',
        isPageDifferent: true,
    },
    {
        name: 'About',
        link: '/about',
        isPageDifferent: true,
    },
    {
        name: 'Work',
        link: '/work',
        isPageDifferent: true,
    },
    {
        name: 'Contact',
        link: '##Contact_container__ER0fX',
        isPageDifferent: false,
    },
    {
        name: 'Blogs',
        link: '/blogs',
        isPageDifferent: true,
    },
];
