'use client';

import React from 'react';
import styles from './FAQ.module.css';
import FAQCard from '@/components/card/FAQCard/FAQCard';
import { motion } from 'framer-motion';

const FAQ = () => {
    return (
        <section id={styles.container}>
            <motion.span
                id={styles.chip}
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
                FAQ's
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
                Frequently asked questions!
            </motion.span>
            <FAQCard />
        </section>
    );
};

export default FAQ;
