'use client';

import React from 'react';
import styles from './Journal.module.css';
import JournalCard from '@/components/card/JournalCard/JournalCard';
import { motion } from 'framer-motion';

const Journal = () => {
    return (
        <div id={styles.container}>
            <div id={styles.top}>
                <div id={styles.left}>
                    <motion.span
                        id={styles.heading}
                        initial={{
                            opacity: 0,
                            filter: 'blur(5px)',
                            y: '100%',
                        }}
                        whileInView={{
                            opacity: 1,
                            filter: 'blur(0)',
                            y: '0%',
                        }}
                        viewport={{ once: true }}
                        transition={{
                            type: 'spring',
                            damping: 10,
                            stiffness: 100,
                            duration: '0.3s',
                        }}>
                        Take a look
                    </motion.span>
                    <motion.span
                        id={styles.heading}
                        initial={{
                            opacity: 0,
                            filter: 'blur(5px)',
                            y: '100%',
                        }}
                        whileInView={{
                            opacity: 1,
                            filter: 'blur(0)',
                            y: '0%',
                        }}
                        viewport={{ once: true }}
                        transition={{
                            type: 'spring',
                            damping: 10,
                            stiffness: 100,
                            duration: '0.3s',
                        }}>
                        At my <span id={styles.span}>Journal</span>
                    </motion.span>
                </div>

                <motion.span
                    id={styles.button}
                    initial={{
                        opacity: 0,
                        filter: 'blur(5px)',
                        y: '100%',
                    }}
                    whileInView={{
                        opacity: 1,
                        filter: 'blur(0)',
                        y: '0%',
                    }}
                    viewport={{ once: true }}
                    transition={{
                        type: 'spring',
                        damping: 10,
                        stiffness: 100,
                        duration: '0.3s',
                    }}>
                    See All
                </motion.span>
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
