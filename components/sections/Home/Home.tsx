'use client';

import Parallax from '@/components/ui/Parallax/Parallax';
import Image from 'next/image';
import React from 'react';
import styles from './Home.module.css';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div id={styles.container}>
            <div id={styles.wrapper}>
                <motion.div
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
                    <Image
                        src="/setup.jpg"
                        alt=""
                        height={300}
                        width={300}
                        id={styles.image}
                    />
                </motion.div>
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
                        delay: 0.2,
                    }}>
                    Hey it's, Kunal Gaur
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
                        delay: 0.4,
                    }}>
                    Full stack developer.
                </motion.span>
                <motion.span
                    id={styles.text}
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
                        delay: 0.6,
                    }}>
                    I thrive for server performance and design
                </motion.span>
                <motion.span
                    id={styles.text}
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
                        delay: 0.8,
                    }}>
                    And aim to make the web a better place.
                </motion.span>
                <motion.a
                    id={styles.button}
                    href="#Contact_container__ER0fX"
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
                        delay: 1,
                    }}>
                    Hire me!
                </motion.a>
            </div>
        </div>
    );
};

export default Home;
