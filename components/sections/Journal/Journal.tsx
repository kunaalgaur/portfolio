import React from 'react';
import styles from './Journal.module.css';
import JournalCard from '@/components/card/JournalCard/JournalCard';

const Journal = () => {
    return (
        <div id={styles.container}>
            <div id={styles.top}>
                <div id={styles.left}>
                    <span id={styles.heading}>Take a look</span>
                    <span id={styles.heading}>
                        At my <span id={styles.span}>Journal</span>
                    </span>
                </div>

                <span id={styles.button}>See All</span>
            </div>

            <div id={styles.bottom}>
                <JournalCard
                    image="/journalcardbg1.jpg"
                    chip="Technology"
                    link="/blog/1"
                    heading="Prisma the next generation ORM(Object relational mapping)."
                    text="lorem ipsum something somehting bla bla, hahah, abhi likhunga bhia rukja ek min..."
                />
                <div id={styles.right}>
                    <JournalCard
                        image="/journalcardbg2.jpg"
                        chip="Technology"
                        link="/blog/1"
                        heading="The differnce let, var and const in Javascript."
                        text="lorem ipsum something somehting bla bla, hahah, abhi likhunga bhia rukja ek min..."
                    />
                    <JournalCard
                        image="/journalcardbg3.jpg"
                        chip="Technology"
                        link="/blog/1"
                        heading="How to implement redux toolkit in Next.js 13 App router."
                        text="lorem ipsum something somehting bla bla, hahah, abhi likhunga bhia rukja ek min..."
                    />
                    <JournalCard
                        image="/journalcardbg4.jpg"
                        chip="Technology"
                        link="/blog/1"
                        heading="What does Next.js have that React.js doesn't?"
                        text="lorem ipsum something somehting bla bla, hahah, abhi likhunga bhia rukja ek min..."
                    />
                    <JournalCard
                        image="/journalcardbg5.jpg"
                        chip="Technology"
                        link="/blog/1"
                        heading="The differnce between axios and fetch."
                        text="lorem ipsum something somehting bla bla, hahah, abhi likhunga bhia rukja ek min..."
                    />
                </div>
            </div>
        </div>
    );
};

export default Journal;
