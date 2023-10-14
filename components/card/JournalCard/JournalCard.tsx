'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './JournalCard.module.css';
import Parallax from '@/components/ui/Parallax/Parallax';

type Props = {
    chip: string;
    heading: string;
    image: string;
    text: string;
    link: string;
};

const JournalCard = ({ chip, heading, image, text, link }: Props) => {
    return (
        <Parallax image={image}>
            <motion.div
                id={styles.container}
                initial={{
                    opacity: 0,
                    filter: 'blur(10px)',
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
                <Link href={link} id={styles.link}>
                    <div id={styles.top}>
                        <span id={styles.chip}>{chip}</span>
                        <span id={styles.heading}>{heading}</span>
                    </div>
                    <span id={styles.text}>{text}</span>
                </Link>
            </motion.div>
        </Parallax>
    );
};

export default JournalCard;
