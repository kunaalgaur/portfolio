import ArticleFive from '@/components/articles/articleFive';
import ArticleFour from '@/components/articles/articleFour';
import ArticleOne from '@/components/articles/articleOne';
import ArticleThree from '@/components/articles/articleThree';
import ArticleTwo from '@/components/articles/articleTwo';

type Blog = {
    name: string;
    type: string;
    image: string;
    content: JSX.Element;
};

export const blogs: Blog[] = [
    {
        name: 'Prisma the next generation ORM (Object Relational Mappping)',
        type: 'Technology',
        image: '/journalcardbg1.jpg',
        content: <ArticleOne />,
    },
    {
        name: 'The difference between let, var and const.',
        type: 'Technology',
        image: '/journalcardbg2.jpg',
        content: <ArticleTwo />,
    },
    {
        name: `What does Next.js have that React.js doesn't?`,
        type: 'Technology',
        image: '/journalcardbg3.jpg',
        content: <ArticleThree />,
    },
    {
        name: `How to implement redux toolkit in Next.js 13 app router?`,
        type: 'Technology',
        image: '/journalcardbg4.jpg',
        content: <ArticleFour />,
    },
    {
        name: 'Difference between axios and fetch.',
        type: 'Technology',
        image: '/journalcardbg5.jpg',
        content: <ArticleFive />,
    },
];
